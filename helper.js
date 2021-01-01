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
  },
  checkForMeasure: (msg, client) => {
    let result = "";
    let weightRegEx = new RegExp(/([\d.]+)(\s+)?(lbs?|kgs?)/, 'gi');
    let tempRegEx = new RegExp(/((-?)[\d.]+)(C|F)/, 'gi');

    const weightMatchArray = weightRegEx.exec(msg.content);
    // console.log(weightMatchArray);
    if(weightMatchArray != null) {
      let response = convertWeight(weightMatchArray[1], weightMatchArray[3]);
      result = `${weightMatchArray[0]} is ${response[0]} ${response[1]}`;
    }
    if(result != "") {
      return result;
    }
    const tempMatchArray = tempRegEx.exec(msg.content);
    console.log(tempMatchArray);
    if(tempMatchArray != null) {
      let response = convertTemp(tempMatchArray[1], tempMatchArray[3]);
      result = `${tempMatchArray[0]} is ${response[0]}${response[1]}`;
    }
    if(result != "") {
      return result;
    }
    

  }
}


function convertTemp(value, measure) {
  let result = [0, ""];
  if(measure == 'C') {
    result[0] = ((value * 1.8) + 32).toFixed(2);
    result[1] = 'F';
  }
  else if(measure == 'F') {
    result[0] = ((value - 32) / 1.8).toFixed(2);
    result[1] = 'C';
  }
  return result;
}



function convertWeight(value, measure) {
  let result = [0, ""];
  if(measure == 'kg' || measure == 'kgs') {
    result[0] = (value * 2.205).toFixed(2);
    if(result[0] > 1) {
      result[1] = 'lbs';
    }
    else {
      result[1] = 'lb';
    }
  }
  else if(measure == 'lb' || measure == 'lbs') {
    result[0] = (value / 2.205).toFixed(2);
    if(result[0] > 1) {
      result[1] = 'kgs';
    }
    else {
      result[1] = 'kg';
    }
  }

  return result;
}
