const { embedBuilder } = require('../helper');

module.exports = (target, msg, client) => {
  const user = msg.mentions.users.first();
  if(user == undefined) {
    let embed = embedBuilder(`Avatar Showcase`, msg.author, `RANDOM`, ``, msg.author.avatarURL);
    msg.channel.send(embed);
  }
  else {
    let embed = embedBuilder(`Avatar Showcase`, msg.author, `RANDOM`, ``, user.avatarURL);
    msg.channel.send(embed);
  }
  
}

function getUserID(target) {
  return target.substring(3, target.length - 1);
}