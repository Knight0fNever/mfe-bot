const fetch = require('node-fetch');
let client = null;

module.exports = (msg, parent_client) => {
  client = parent_client;
  fetch('https://icanhazdadjoke.com/', {
    headers: {'Accept': 'application/json'},
    method: 'get'
  })
    .then(res => res.json())
    .then(json => {
      msg.channel.send(json.joke);
    });
}