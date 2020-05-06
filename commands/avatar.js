const helper = require('../helper');

module.exports = {
  "name": "avatar",
  "command": avatar,
  "options": {
    description: "avatar",
    fullDescription: "Shows the user's full avatar",
    usage: "<tags (up to 3)>"
  }
}


function avatar(msg, args) {
  const user = msg.mentions[0]
  console.log(`User:\n ${user}`);
  console.log(`Author:\n ${msg.author.dynamicAvatarURL('png', 2048)}`);


  let avatarURL = "";



  if (user == undefined) {
    avatarURL = msg.author.dynamicAvatarURL('png', 2048);
  }
  else {
    avatarURL = user.dynamicAvatarURL('png', 2048);
  }

  let json = {
    "embed": {
      "description": "Avatar Showcase",
      "color": helper.getRandomColor(),
      "author": {
        "name": `${msg.author.username}#${msg.author.discriminator}`,
        "icon_url": msg.author.avatarURL
      },
      "image": {
        "url": avatarURL
      }
    }
  }

  msg.channel.createMessage(json);
}

function getUserID(target) {
  return target.substring(3, target.length - 1);
}