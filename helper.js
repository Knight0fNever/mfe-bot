const { RichEmbed } = require('discord.js');

module.exports = {
  embedBuilder: (description, author, color, title, image) => {
    let response = new RichEmbed()
        .setTitle(title)
        .setColor(color)
        .setImage(image)
        .setAuthor(author.tag, author.avatarURL)
        .setDescription(description);
  
    return response;
  }
}