const { MessageEmbed } = require('discord.js');
const moment = require('moment');

module.exports = async (id, msg, client) => {
  // console.log(client);
  local_client = client;
  let userID = '';

  if(msg.mentions.users.first() != undefined) {
    userID = msg.mentions.users.first().id;
  }
  else {
    userID = id;
  }

  let user = await client.users.fetch(userID);

  let guildMembers = msg.guild.members.cache;

  let guildUser = guildMembers.get(userID);

  // console.log(guildUser.joinedAt);

  let fields = [
    {
      "name": "Username",
      "value": user.tag,
      "inline": true
    },
    {
      "name": "User ID",
      "value": user.id,
      "inline": true
    },
    {
      "name": "Status",
      "value": user.presence.status,
      "inline": true
    },
    {
      "name": "Created",
      "value": `${moment.utc(user.createdAt).format('MM/DD/YY h:mm:ss a')}\n ${moment.utc(user.createdAt).fromNow()}`,
      "inline": true
    },
    {
      "name": "Joined",
      "value": `${moment.utc(guildUser.joinedAt).format('MM/DD/YY h:mm:ss a')}\n ${moment.utc(guildUser.joinedAt).fromNow()}`,
      "inline": true
    },
  ]

  let embed = new MessageEmbed()
    .addFields(fields)
    .setAuthor('User Profile')
    .setDescription(`User data for <@${userID}>`)
    .setTimestamp(Date.now())
    .setThumbnail(user.avatarURL())

  msg.channel.send(embed);

}