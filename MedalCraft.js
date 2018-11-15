const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
   console.log('sunt gata!');
});

client.on('message', message => {
   if (message.content == 'ping') {
     message.reply('pong');
   }
});

client.login('NTEyNjA0MzM1ODI2MjcyMjY1.Ds76QA.d-IoP1mUwGK5b6fodfz384eO4mw');
