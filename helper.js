var randomColor = require('randomcolor');
var converter = require('hex2dec');
const { MessageEmbed } = require('discord.js');

module.exports = {
  
  embedBuilder: (description, author, color, title, image, fields) => {
    let response = new MessageEmbed()
        .setTitle(title)
        .setColor(color)
        .setAuthor(author.tag, author.avatarURL())
        .setDescription(description);
      if(image != undefined) {
        response.setImage(image);
      }
      if(fields != undefined) {
        response.addFields(fields);
      }
  
    return response;
  },
  getRandomColor: () => {
    let color = randomColor();
    // console.log(color);
    return converter.hexToDec(color.substring(1));
  }
}