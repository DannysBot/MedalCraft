const Discord = require('discord.js');

const TOKEN = "NTEyNjA0MzM1ODI2MjcyMjY1.Ds8RBw.iAHSFw8GEnEVcYwKjBCkD8H4gb0";

var bot = new Discord.Client();

bot.on('ready', function() => {
  console.log("Ready");
});

bot.on('message', function(message) => {
  if (message.author.equals(bot.user)) return;
  
  if (message.content == "hello") {
      message.channel.sendMessage("Hi, there")
  }
});

bot.login(TOKEN);
