require('dotenv').config()
const { Client } = require('discord.js');
const client = new Client();
const router = require('./router');
const emote = require('./emote-only');
const lesbianBoost = require('./lesbian-boost');



let prefix = "mfe!";
let current_env = "dev";
let prod_token = process.env.PROD_TOKEN;
let dev_token = process.env.DEV_TOKEN;
let emote_only_channel = '694473076171210783';
let lesbianBoost_channel = '694639486130454569';

if(current_env == 'dev') {
  emote_only_channel = '663923940841750570';
  lesbianBoost_channel = '694640212210614302';
}

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.channel.id == emote_only_channel) {
    emote(msg, client);
  }
  else if(msg.channel.id == lesbianBoost_channel) {
    lesbianBoost(msg, client);
  }
  else if(msg.content.substring(0, prefix.length).toLowerCase() == prefix && !msg.author.bot) {
    let commandArray = msg.content.split(' ');
    // console.log(commandArray[1].toLowerCase());

    if(commandArray.length >= 2) {
      router(commandArray, msg, client);
    }

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
