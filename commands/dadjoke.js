const fetch = require('node-fetch');
const { Command } = require('eris');


module.exports = {
  "name": "dadjoke",
  "command": dadjoke,
  "options": {
    description: "Random Dad joke",
    fullDescription: "Gives a random Dad joke",
    usage: "dadjoke"
  }
}


function dadjoke(msg) {
  fetch('https://icanhazdadjoke.com/', {
    headers: { 'Accept': 'application/json' },
    method: 'get'
  })
    .then(res => res.json())
    .then(json => {
      msg.channel.createMessage(json.joke);
    });
}