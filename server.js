const express = require('express');
const app = express();
const { Client } = require('discord.js');

const bot = new Client();
const BOT_TOKEN = process.env.BOT_TOKEN;

bot.login(BOT_TOKEN);

app.get('/bot-status', (req, res) => {
    res.json({ status: bot.user.presence.status });
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
