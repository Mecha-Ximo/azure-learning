const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Random Number</title>
</head>
<body>
  <h1>Random Number Demo</h1>
  <button id="btn">Get random number v5</button>
  <p id="result"></p>
  <script>
    document.getElementById('btn').addEventListener('click', async () => {
      const res = await fetch('/api/random');
      const data = await res.json();
      document.getElementById('result').textContent = 'Random number: ' + data.number;
    });
  </script>
</body>
</html>`);
});

app.get('/api/random', (req, res) => {
  res.json({ number: Math.floor(Math.random() * 100) + 1 });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
