* {
  box-sizing: border-box;
}

:root {
  --bg: #09111f;
  --bg-strong: #0d172b;
  --panel: rgba(15, 23, 42, 0.9);
  --panel-soft: rgba(15, 23, 42, 0.68);
  --border: rgba(148, 163, 184, 0.2);
  --text: #e5edf9;
  --muted: #99a6be;
  --accent: #7c9cff;
  --accent-strong: #6f5ef7;
  --green: #28c98a;
  --gold: #ffca6a;
  --shadow: 0 30px 80px rgba(2, 6, 23, 0.5);
}

html, body {
  margin: 0;
  min-height: 100%;
  font-family: 'Inter', sans-serif;
  background:
    radial-gradient(circle at top, rgba(124, 156, 255, 0.22), transparent 35%),
    linear-gradient(180deg, #08101c 0%, #0b1220 100%);
  color: var(--text);
}

body {
  min-height: 100vh;
  display: flex;
  align-items: stretch;
  justify-content: center;
  padding: 32px;
}

button, input, textarea {
  font: inherit;
}

button {
  cursor: pointer;
}

.app-shell {
  width: min(1400px, 100%);
  border: 1px solid var(--border);
  border-radius: 26px;
  background: rgba(10, 18, 31, 0.76);
  box-shadow: var(--shadow);
  overflow: hidden;
  backdrop-filter: blur(12px);
}

.topbar {
  height: 84px;
  padding: 18px 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border);
  background: rgba(10, 19, 31, 0.72);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-mark {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-weight: 800;
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}

.brand-name {
  font-weight: 700;
}

.brand-subtitle {
  font-size: 0.75rem;
  color: var(--muted);
}

.top-actions {
  display: flex;
  align-items: center;
  gap: 12px;
}

.ghost-button,
.primary-button,
.secondary-button {
  border-radius: 12px;
  padding: 10px 16px;
  border: 1px solid var(--border);
  color: var(--text);
  transition: transform 0.15s ease, border-color 0.15s ease;
}

.ghost-button {
  background: rgba(148, 163, 184, 0.06);
}

.primary-button {
  border-color: rgba(124, 156, 255, 0.18);
  background: linear-gradient(135deg, var(--accent), var(--accent-strong));
  font-weight: 600;
}

.secondary-button {
  background: rgba(40, 201, 138, 0.12);
  border-color: rgba(40, 201, 138, 0.22);
  color: #aef7d4;
}

.ghost-button:hover,
.primary-button:hover,
.secondary-button:hover {
  transform: translateY(-1px);
}

.workspace {
  display: grid;
  grid-template-columns: 360px 1fr;
  min-height: 760px;
}

.sidebar {
  background: rgba(11, 21, 36, 0.88);
  border-right: 1px solid var(--border);
  padding: 22px 18px;
}

.panel-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 16px;
  font-weight: 600;
}

.panel-header-spread {
  padding: 0 18px;
}

.status-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  display: inline-block;
}

.status-dot.connected {
  background: var(--green);
  box-shadow: 0 0 10px rgba(40, 201, 138, 0.9);
}

.repo-card {
  background: rgba(15, 23, 42, 0.92);
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 16px;
  margin-bottom: 20px;
}

.repo-header-line {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 12px;
}

.repo-icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: rgba(124, 156, 255, 0.14);
  color: #cfe1ff;
  font-size: 0.7rem;
  font-weight: 700;
}

#repo-name {
  font-size: 0.82rem;
  line-height: 1.4;
  overflow-wrap: anywhere;
}

.repo-meta {
  color: var(--muted);
  font-size: 0.82rem;
  margin-bottom: 12px;
  line-height: 1.5;
}

.repo-stats {
  display: flex;
  justify-content: space-between;
  gap: 12px;
  color: var(--muted);
  font-size: 0.72rem;
}

.file-list {
  margin-bottom: 20px;
}

.file-list h3 {
  margin: 0 0 12px;
  font-size: 0.8rem;
  color: var(--muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

#file-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 8px;
}

.file-item {
  display: block;
  border: 1px solid transparent;
  border-radius: 10px;
  padding: 10px 12px;
  background: rgba(148, 163, 184, 0.04);
  color: var(--muted);
}

.file-item.active {
  border-color: rgba(124, 156, 255, 0.28);
  background: rgba(124, 156, 255, 0.08);
  color: var(--text);
}

.archive-panel {
  padding-top: 12px;
  border-top: 1px solid var(--border);
  display: grid;
  gap: 10px;
}

.archive-panel label {
  color: var(--muted);
  font-size: 0.8rem;
}

.archive-panel input {
  width: 100%;
  border-radius: 10px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.7);
  color: var(--text);
  padding: 10px 12px;
}

.chat-panel {
  display: flex;
  flex-direction: column;
  min-width: 0;
  background: rgba(8, 15, 29, 0.9);
}

.mini-badges {
  display: flex;
  gap: 8px;
  align-items: center;
}

.badge {
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 0.7rem;
  border: 1px solid transparent;
}

.badge.live {
  background: rgba(40, 201, 138, 0.12);
  border-color: rgba(40, 201, 138, 0.2);
  color: #9ce9c8;
}

.badge.sync {
  background: rgba(124, 156, 255, 0.12);
  border-color: rgba(124, 156, 255, 0.2);
  color: #cfe1ff;
}

.response-stream {
  flex: 1;
  overflow: auto;
  padding: 24px 18px 8px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.message {
  display: flex;
  gap: 12px;
  align-items: flex-start;
}

.message-avatar {
  width: 34px;
  height: 34px;
  border-radius: 10px;
  display: grid;
  place-items: center;
  font-size: 0.7rem;
  font-weight: 800;
  background: linear-gradient(135deg, rgba(124, 156, 255, 0.25), rgba(111, 94, 247, 0.25));
  color: #dfe8ff;
}

.message.user .message-avatar {
  background: linear-gradient(135deg, rgba(40, 201, 138, 0.2), rgba(124, 156, 255, 0.2));
}

.message-content {
  background: rgba(15, 23, 42, 0.9);
  border: 1px solid var(--border);
  border-radius: 16px;
  padding: 12px 14px;
  max-width: 80%;
  line-height: 1.6;
  color: var(--text);
}

.message-content p {
  margin: 0;
}

.message-content ul {
  margin: 8px 0 0;
  padding-left: 18px;
}

.task-form {
  border-top: 1px solid var(--border);
  background: rgba(12, 19, 32, 0.8);
  padding: 18px;
  display: grid;
  gap: 12px;
}

.task-form textarea {
  width: 100%;
  resize: vertical;
  min-height: 96px;
  border-radius: 16px;
  border: 1px solid var(--border);
  background: rgba(15, 23, 42, 0.8);
  color: var(--text);
  line-height: 1.5;
  padding: 12px 14px;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 12px;
}

@media (max-width: 980px) {
  body {
    padding: 16px;
  }

  .workspace {
    grid-template-columns: 1fr;
  }

  .sidebar {
    border-right: none;
    border-bottom: 1px solid var(--border);
  }
}
