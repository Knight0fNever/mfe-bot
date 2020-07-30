require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client();
const router = require('./router');



let prefix = "a!";
let current_env = "dev";
let prod_token = process.env.PROD_TOKEN;
let dev_token = process.env.DEV_TOKEN;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.substring(0, prefix.length).toLowerCase() == prefix && !msg.author.bot) {
    let commandString = msg.content.substring(prefix.length, msg.content.length);
    if(commandString.charAt(0) == ' ') {
      commandString = commandString.substring(1, commandString.length);
    }
    let commandArray = [prefix].concat(commandString.split(' '));

    if(commandArray.length >= 2 && msg.channel.id != '628112458891919360') {
      router(commandArray, msg, client);
    }

  }
  else if(msg.content.substring(0, 4).toLowerCase() == 'mfe!' && !msg.author.bot) {
    msg.channel.send("The new prefix is `a!`");
  }
});


client.on('error', error => {
  console.error('The websocket connection encountered an error:', error);
});

if(current_env == 'dev') {
  client.login(dev_token);
}
else {
  client.login(prod_token);
}
