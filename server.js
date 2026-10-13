const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_DIR = path.join(__dirname, 'public');

app.use(express.static(PUBLIC_DIR));

app.get('/', (req, res) => {
  res.redirect('/agent');
});

app.get('/agent', (req, res) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'));
});

app.get('/health', (req, res) => {
  res.json({
    ok: true,
    service: 'arena-agent',
    timestamp: new Date().toISOString(),
  });
});

app.listen(PORT, () => {
  console.log(`Arena agent is running on http://localhost:${PORT}/agent`);
});
