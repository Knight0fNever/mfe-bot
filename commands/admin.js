const { embedBuilder } = require('../helper');

module.exports = {
  seeCooldowns: async (msg, client, coolDowns, cooldownTime, startTime) => {
    let fields = []

    for(let key in coolDowns) {
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
    if(Object.entries(coolDowns).length === 0) {
      msg.channel.send(`No active cooldowns`);
    }
    else {
      let embed = embedBuilder('Cooldowns', msg.author, 'RANDOM', 'List of active cooldowns', undefined, fields);
      msg.channel.send(embed);
    }
    
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