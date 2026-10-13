const taskForm = document.getElementById('task-form');
const taskInput = document.getElementById('task-input');
const responseStream = document.getElementById('response-stream');
const githubButton = document.getElementById('github-button');
const archiveButton = document.getElementById('archive-button');
const archiveInput = document.getElementById('archive-url');

const defaultRepo = {
  full_name: 'samuelpeplinski9-web/lmarena-github-wayback-agent',
  description: 'LMArena AI agent with GitHub connector and Wayback Machine video archival access for sandbox environments',
  stargazers_count: 0,
};

const repoName = document.getElementById('repo-name');
const repoDescription = document.getElementById('repo-description');
const repoStars = document.getElementById('repo-stars');

function appendMessage(role, html) {
  const wrapper = document.createElement('div');
  wrapper.className = `message ${role}`;

  const avatar = document.createElement('div');
  avatar.className = 'message-avatar';
  avatar.textContent = role === 'assistant' ? 'AI' : 'U';

  const content = document.createElement('div');
  content.className = 'message-content';
  content.innerHTML = html;

  wrapper.appendChild(avatar);
  wrapper.appendChild(content);
  responseStream.appendChild(wrapper);
  responseStream.scrollTop = responseStream.scrollHeight;
}

function setRepoDetails(repo) {
  repoName.textContent = repo.full_name || defaultRepo.full_name;
  repoDescription.textContent = repo.description || defaultRepo.description;
  repoStars.textContent = `☆ ${repo.stargazers_count ?? 0}`;
}

function renderPlan(taskText) {
  const steps = [
    'Inspect the repo context and workspace state',
    'Check the GitHub connector and archival requirements',
    'Draft a concrete fix, run validation, and summarize outcomes',
  ];

  const items = steps
    .map((step) => `<li>${step}</li>`)
    .join('');

  appendMessage('assistant', `
    <p>Task received: <strong>${taskText}</strong></p>
    <ul>${items}</ul>
  `);
}

async function fetchGitHubRepo(repoNameText) {
  const normalized = repoNameText.trim();
  if (!normalized) {
    return defaultRepo;
  }

  const endpoint = `https://api.github.com/repos/${normalized}`;
  const response = await fetch(endpoint, {
    headers: { Accept: 'application/vnd.github+json' },
  });

  if (!response.ok) {
    throw new Error(`GitHub API returned ${response.status}`);
  }

  return response.json();
}

taskForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const taskText = taskInput.value.trim();
  if (!taskText) {
    taskInput.focus();
    return;
  }

  appendMessage('user', `<p>${taskText}</p>`);
  renderPlan(taskText);
  taskInput.value = '';
});

githubButton.addEventListener('click', async () => {
  const repoText = repoName.textContent.trim();
  appendMessage('assistant', '<p>Connecting to GitHub and loading repository details…</p>');

  try {
    const repo = await fetchGitHubRepo(repoText);
    setRepoDetails(repo);
    appendMessage('assistant', `
      <p>GitHub sync complete. Repository is live and ready for agent actions.</p>
      <ul>
        <li>Default branch: <strong>${repo.default_branch || 'main'}</strong></li>
        <li>Open issues: <strong>${repo.open_issues_count ?? 0}</strong></li>
        <li>Visibility: <strong>${repo.private ? 'Private' : 'Public'}</strong></li>
      </ul>
    `);
  } catch (error) {
    setRepoDetails(defaultRepo);
    appendMessage('assistant', `
      <p>GitHub sync could not complete. Falling back to the local repo metadata.</p>
      <p>${error.message}</p>
    `);
  }
});

archiveButton.addEventListener('click', () => {
  const pageUrl = archiveInput.value.trim() || 'https://arena.ai/agent';
  const archiveUrl = `https://web.archive.org/save/${pageUrl}`;
  appendMessage('assistant', `
    <p>Archiving the page using the Wayback Machine.</p>
    <p><a href="${archiveUrl}" target="_blank" rel="noreferrer">Open archive request</a></p>
  `);
  window.open(archiveUrl, '_blank', 'noopener,noreferrer');
});

setRepoDetails(defaultRepo);
