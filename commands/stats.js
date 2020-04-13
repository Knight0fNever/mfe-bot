const { MessageEmbed } = require('discord.js');

let functions = {
  stats: (msg, client) => {
    let guild = msg.guild;
    let members = [];
    let bots = [];
    let online = [];

    guild.members.cache.each(member => {
      if(member.user.bot) {
        bots.push(member.user);
      }
      else {
        members.push(member.user);
      }

      if(member.presence.status == 'online') {
        online.push(member.user);
      }
    });

    let embed = new MessageEmbed()
    .addFields([
      {
        "name": "All Users",
        "value": members.length + bots.length,
        "inline": true
      },
      {
        "name": "Bots",
        "value": bots.length,
        "inline": true
      },
      {
        "name": "Users",
        "value": members.length,
        "inline": true
      },
      {
        "name": "Online Users",
        "value": online.length,
        "inline": true
      }
    ])
    .setAuthor('Server Stats')
    // .setDescription(``)
    .setTimestamp(Date.now())
    .setThumbnail(guild.iconURL())

    msg.channel.send(embed);

  }
}

module.exports = functions;