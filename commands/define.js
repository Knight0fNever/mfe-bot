const fetch = require('node-fetch');
const { MessageEmbed } = require('discord.js');
let client = null;

module.exports = (command_array, msg, parent_client) => {

  let word = "";
  for (let i = 2; i < command_array.length; i++) {
    word = word + command_array[i] + " ";
  }
  // console.log(msg.content);
  word = word.trim();

  console.log(command_array[2]);
  client = parent_client;
  let url = `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=40787c1d-c4c5-45a6-8d87-b0023fc7475a`;
  fetch(url, {
    headers: { 'Accept': 'application/json' },
    method: 'get'
  })
    .then(res => res.json())
    .then(json => {
      msg.channel.send(defineEmbed(json[0], msg));
      // console.log(json[0].shortdef);
    });
}

function defineEmbed(json, msg) {
  let response = new MessageEmbed()
    .setTitle(`${json.meta.id}`)
    .setColor("RANDOM")
    // .setAuthor(msg.author.tag, msg.author.avatarURL())
    // .setDescription(json.shortdef[0])
    .addField("Part of Speech: ", `${json.fl}`, false)
    .addField("Pronounciation: ", `\`${json.hwi.hw}\` | \`${json.hwi.prs[0].mw}\``)
    .addField("Definition: ", `${json.shortdef[0]}`, false)
    .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Merriam-Webster_logo.svg/256px-Merriam-Webster_logo.svg.png")
  return response;
}