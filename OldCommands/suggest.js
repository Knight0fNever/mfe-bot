const { MessageEmbed } = require('discord.js');

module.exports = async (suggestion, msg, client) => {
  // console.log(client);
  local_client = client;
  let suggestions = "";
  for (let i = 2; i < suggestion.length; i++) {
    suggestions = suggestions + suggestion[i] + " ";
  }

  suggestions = suggestions.trim();



  let myUser = await client.users.fetch('615687360138575893');

  let embed = buildEmbed(msg.author, suggestions);

  myUser.send(embed);

}

function buildEmbed(author, suggestion) {
  return result = new MessageEmbed()
    .setAuthor(author.tag, author.avatarURL())
    .setColor('#C377E0')
    .setTitle('New MFE-Bot Suggestion')
    .addField('Suggestion', suggestion)
    .setFooter('Date submitted')
    .setTimestamp(Date.now())
}