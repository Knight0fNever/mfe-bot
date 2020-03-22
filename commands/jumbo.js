const { MessageAttachment } = require('discord.js');
let client = null;

module.exports = (commandText, msg, main_client) => {
  client = main_client;
  if(!msg.author.bot){
    let emotes = getEmojiIDs(commandText, msg);
    // console.log(emotes.toString());
    if(emotes.length != 0) {
      let emoji = getEmoji(emotes[0]).url;
      if(emoji == null || emoji == undefined) {
        msg.channel.send("Sorry, I ran into an error and could not continue.");
      }
      else {
        let response = new MessageAttachment(getEmoji(emotes[0]).url);
        // console.log(getEmoji(emotes[0]).url);
        msg.channel.send(response);
      }
    }
    else {
      msg.channel.send("Sorry, I could not find the emoji you're requesting. I need to be in the server where that emoji is uploaded.");
    }
  }
};

function getEmoji(id) {
  try{
    console.log(client.emojis);
    return client.emojis.resolve(id);
  }
  catch(e) {
    console.log("Error: " + e);
    return null;
  }
}

function getEmojiIDs(commandText, msg) {
  let emojis = [];
  let emojiIds = [];
  if(commandText.charAt(0) == '<') {
    // console.log("Command Text: " + commandText);
    emojis = commandText.split(' ');
    // console.log(emojis.length);
    for(let i = 0; i < emojis.length; i++) {
      // check for '<' at first chracter
      if(emojis[i].charAt(0) != '<') {
        // error
        console.log("First Character is not '<'");
      }
      else {
        let emojiId = parseEmojiId(emojis[i]);
        // console.log(parseEmojiId(emojis[i]));
        if(verifyEmojiID(emojiId)) {
          emojiIds.push(emojiId);
        }
        else {
          console.log("Cannot find emoji");
        }
      }
    }
    return emojiIds;
  }
  else {
    // return error
    return "Error";
  }
  
  // for(i = 0; i < )
}

function parseEmojiId(emoji) {
  let secondColonLocation = 0;
  let numberOfColons = 0;
  for(let i = 0; numberOfColons < 2; i++) {
    if(emoji.charAt(i) == ':') {
      numberOfColons++;
    }
    if(numberOfColons == 2) {
      secondColonLocation = i;
    }
  }
  // console.log(secondColonLocation);
  if(numberOfColons != 2) {
    return 0;
  }
  else {
    let emojiID = emoji.substring(secondColonLocation + 1, emoji.length - 1);
    return emojiID;
  }
}


function verifyEmojiID(id) {
  let test = client.emojis.resolve(id);
  // console.log(test);
  if(test === undefined) {
    return false;
  }
  else {
    return true;
  }
}