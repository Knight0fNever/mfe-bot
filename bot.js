require('dotenv').config()
const Eris = require("eris");
const commands = require('./commands');
// const { Client } = require('discord.js');
// const client = new Client();
// const router = require('./router');
// const emote = require('./emote-only');
// const lesbianBoost = require('./lesbian-boost');

let prefix = "mfe!";
let current_env = "dev";
let token = "";
let prod_token = process.env.PROD_TOKEN;
let dev_token = process.env.DEV_TOKEN;

if (current_env == 'dev') {
  token = dev_token;
}
else {
  token = prod_token;
}


const bot = new Eris.CommandClient(token, {}, {
  description: "MFE Bot",
  owner: "Knight#6969",
  prefix: prefix
});

bot.on("ready", () => { // When the bot is ready
  console.log("Ready!"); // Log "Ready!"
});

Object.keys(commands).forEach(key => {
  console.log(commands[key].name);
  if(commands[key].name == undefined) {
    Object.keys(commands[key]).forEach(subkey => {
      console.log(commands[key]);
      bot.registerCommand(commands[key][subkey].name, commands[key][subkey].command, commands[key][subkey].options);
    })
  }
  else {
    bot.registerCommand(commands[key].name, commands[key].command, commands[key].options);
  }
})

console.log(commands);

bot.on('error', error => {
  console.error('The websocket connection encountered an error:', error);
});



bot.connect();