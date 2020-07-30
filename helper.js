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
  makeid: (length) => {
    let result           = '';
    let characters       = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  }
}
