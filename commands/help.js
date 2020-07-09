const { MessageEmbed } = require('discord.js');

module.exports = (msg, command) => {
  if (command == undefined) {
    let fields = [
      {
        "name": "**Actions**",
        "value": "`a! help actions`",
        "inline": true
      },
      {
        "name": "**Avatar Showcase**",
        "value": "`a! avatar <@user>`",
        "inline": true
      },
      {
        "name": "**User Profile**",
        "value": "`a! profile <@user/ID>`",
        "inline": true
      },
      {
        "name": "**Dad Joke**",
        "value": "`a! dadjoke`",
        "inline": true
      },
      {
        "name": "**e621**",
        "value": "`a! e621 <search>`",
        "inline": true
      },
      {
        "name": "**suggest - sends a suggestion for the bot to the developer**",
        "value": "`a! suggest <suggestion>`",
        "inline": true
      }
    ]

    let response = new MessageEmbed()
      .setTitle("Apollo Help Page")
      .setColor("RANDOM")
      .setAuthor(msg.author.tag, msg.author.avatarURL())
      .addFields(fields);

    msg.channel.send(response);
  }
  else if (command == 'actions') {
    let response = new MessageEmbed()
      .setTitle("Apollo Actions")
      .setColor("RANDOM")
      .setAuthor(msg.author.tag, msg.author.avatarURL())
      .setDescription("bellyrub\n boop\n cuddle\n flop\n hug\n kiss\n lick\n nap\n nuzzle\n pat\n poke\n pounce\n slap\n sniff\n spray\n wag\n whosagoodboy\n fuck\n pant\n eatPant\n suck\n rub\n tie\n ride\n facefuck\n holdhands")

    msg.channel.send(response);
  }

}