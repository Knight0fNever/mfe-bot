const { MessageAttachment } = require('discord.js');
const fetch = require('node-fetch');
let client = null;

module.exports = async (commandText, msg, main_client) => {
  client = main_client;
  if (!msg.author.bot) {
    if (commandText.charAt(0) == "<") {
      // console.log(parseEmojiId(commandText));
      let url = `https://cdn.discordapp.com/emojis/${parseEmojiId(commandText)}.gif?v=1`
      let response = await fetch(`https://cdn.discordapp.com/emojis/${parseEmojiId(commandText)}.gif?v=1`);
      // console.log(response.status);
      if (response.status != 415) {
        url = `https://cdn.discordapp.com/emojis/${parseEmojiId(commandText)}.gif?v=1`;
      }
      else {
        url = `https://cdn.discordapp.com/emojis/${parseEmojiId(commandText)}.png?v=1`
      }
      let attachment = new MessageAttachment(url);
      msg.channel.send(attachment);
    }
  }
};

function parseEmojiId(emoji) {
  let secondColonLocation = 0;
  let numberOfColons = 0;
  for (let i = 0; numberOfColons < 2; i++) {
    if (emoji.charAt(i) == ':') {
      numberOfColons++;
    }
    if (numberOfColons == 2) {
      secondColonLocation = i;
    }
  }
  // console.log(secondColonLocation);
  if (numberOfColons != 2) {
    return 0;
  }
  else {
    let emojiID = emoji.substring(secondColonLocation + 1, emoji.length - 1);
    return emojiID;
  }
}