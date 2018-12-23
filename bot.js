const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.login('NTI1MzIzODcyNzk1NjIzNDI0.Dv1IXA.9NUAMi5zF-qinJk0qOu7itMqbrU');
