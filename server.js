const express = require('express');
const { Client } = require('discord.js');

const app = express();
const client = new Client();
const BOT_TOKEN = process.env.BOT_TOKEN;

// Bot's login event
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// Endpoint to trigger a bot command
app.get('/trigger-command', (req, res) => {
  const guildId = '882383171323314186'; // ID of the server where the bot is
  const channelId = '1021159647748571207'; // ID of the channel to send the command

  const guild = client.guilds.cache.get(guildId);
  if (!guild) {
    return res.status(400).json({ error: 'Guild not found' });
  }

  const channel = guild.channels.cache.get(channelId);
  if (!channel) {
    return res.status(400).json({ error: 'Channel not found' });
  }

  // Send a message to the channel as the bot
  channel.send('Hello from the bot!');

  return res.json({ message: 'Command sent' });
});

// Start the bot and server
client.login(BOT_TOKEN);
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
