const express = require('express');
const fetch = require('node-fetch-cjs');

const app = express();
const PORT = process.env.PORT || 3000;
const GUILD_ID = process.env.GUILD_ID;

app.use(express.static('public')); // Serve static files (e.g., HTML, JS) from the 'public' folder

app.get('/get-bot-status', async (req, res) => {
  try {
    const response = await fetch(`https://discord.com/api/v10/guilds/${GUILD_ID}/widget.json`);
    const data = await response.json();
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching bot status' });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
