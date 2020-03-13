const { embedBuilder } = require('../helper');

module.exports = (target, msg, client) => {
  const user = msg.mentions.users.first();
  if(user == undefined) {
    let embed = embedBuilder(`Avatar Showcase`, msg.author, `RANDOM`, ``, msg.author.avatarURL({"size": 2048}));
    msg.channel.send(embed);
  }
  else {
    let embed = embedBuilder(`Avatar Showcase`, msg.author, `RANDOM`, ``, user.avatarURL({"size": 2048}));
    msg.channel.send(embed);
  }
  
}

function getUserID(target) {
  return target.substring(3, target.length - 1);
}