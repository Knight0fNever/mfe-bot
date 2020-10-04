const { embedBuilder } = require('../helper');
const { MessageEmbed } = require('discord.js');
const paginationEmbed = require('discord.js-pagination');

module.exports = {
  seeCooldowns: async (msg, client, coolDowns, cooldownTime, startTime) => {
    let fields = []

    for (let key in coolDowns) {
      let timeLeft = findTimeLeft(coolDowns[key].timer, startTime)
      let user = await client.users.fetch(coolDowns[key].userID);
      // console.log(user);
      let object = {
        'name': `${user.tag}`,
        'value': `Action: ${coolDowns[key].action} | Time left: ${timeLeft.minutes} minutes and ${timeLeft.seconds} seconds`,
        'inline': false
      }
      fields.push(object);
    }
    if (Object.entries(coolDowns).length === 0) {
      msg.channel.send(`No active cooldowns`);
    }
    else {
      let embed = embedBuilder('Cooldowns', msg.author, 'RANDOM', 'List of active cooldowns', undefined, fields);
      msg.channel.send(embed);
    }

  },
  roles: async (msg, client) => {
    let results = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], []];
    let i = 1;
    let embeds = [];
    msg.guild.roles.cache.sort((roleA, roleB) => roleB.position - roleA.position).each((role, key) => {
      // console.log(`ID: ${role.id} Members: ${role.members.size} Position: ${role.position}`);

      i++;
      let arrayNumber = Math.floor(i / 25);
      results[arrayNumber].push(
        {
          "id": role.id,
          "value": role.members.size,
          "name": role.name,
          "inline": true
        }
      )

    });
    results.forEach(result => {
      let rolesList = ``;
      if (result.length != 0) {
        result.forEach(innerResult => {
          rolesList = rolesList + `${innerResult.value} - <@&${innerResult.id}>\n`;
        })
        embeds.push(buildRoleCountEmbed(msg, rolesList));
      }
    });
    paginationEmbed(msg, embeds, ['⏪', '⏩'], 120000);
  }
}

function findTimeLeft(timer, startTime) {
  timeLeft = Math.ceil(startTime + timer._idleStart + timer._idleTimeout - Date.now());

  let minutes = Math.floor(timeLeft / 60000);
  let seconds = Math.floor(((timeLeft / 60000) - minutes) * 60);
  return {
    'minutes': minutes,
    'seconds': seconds
  }
}

function buildRoleCountEmbed(msg, roles) {
  let response = new MessageEmbed()
    .setTitle("Server Roles")
    .setColor("GREEN")
    .setAuthor(msg.author.tag, msg.author.avatarURL())
    .setDescription(roles);

  return response;
}