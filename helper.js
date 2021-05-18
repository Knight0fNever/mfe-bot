const { MessageEmbed } = require('discord.js');

module.exports = {

  embedBuilder: (description, author, color, title, image, fields) => {
    let response = new MessageEmbed()
      .setTitle(title)
      .setColor(color)
      .setAuthor(author.tag, author.avatarURL())
      .setDescription(description);
    if (image != undefined) {
      response.setImage(image);
    }
    if (fields != undefined) {
      response.addFields(fields);
    }

    return response;
  },
  makeid: (length) => {
    let result = '';
    let characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
  },
  checkForMeasure: (msg, client) => {
    let result = "";
    let response = "";
    let urlRegex = new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()!@:%_\+.~#?&\/\/=]*)/, 'gm');
    let weightRegEx = new RegExp(/([\d.]+)(\s+)?(lbs?|kgs?)/, 'gi');
    // let tempRegEx = new RegExp(/((-?)[\d.]+)(C|F)/, 'gi');
    let tempRegEx = new RegExp(/((-?)([\d][.]?)+)(C|F)/, 'gi');
    let feet_inchesRegEx = new RegExp(/(?:(?<feet>\d+['])(?<inches>\d{1,2}["]{0,1}){0,1})/, 'gmi');
    let metersRegEx = new RegExp(/(?<meters>\d{0,10}[.]?\d+)(?<measure>m|cm)/, 'gmi');

    const urlMatchArray = urlRegex.exec(msg.content);
    if (urlMatchArray != null) {
      return;
    }

    const feet_inchesMatchArray = [...msg.content.matchAll(feet_inchesRegEx)];
    // console.log(feet_inchesMatchArray);
    if (feet_inchesMatchArray != null) {
      if (feet_inchesMatchArray.length != 0) {
        let inchesArray = [];
        feet_inchesMatchArray.forEach(entry => {
          // console.log(entry);
          let feet = parseInt(entry['groups'].feet.substring(0, entry['groups'].feet.indexOf(`'`)));
          let inches = 0;
          if (entry['groups'].inches != undefined) {
            if (entry['groups'].inches.indexOf(`"`) == -1) {
              inches = parseInt(entry['groups'].inches);
            }
            else {
              inches = parseInt(entry['groups'].inches.substring(0, entry['groups'].inches.indexOf(`"`)));
            }

          }
          inchesArray.push({
            original: entry[0],
            feet: feet,
            inches: inches
          });
        });

        let convertedArray = convertFeetToCm(inchesArray);
        let resultString = '';

        convertedArray.forEach((entry, index) => {
          if (index == convertedArray.length - 1 && convertedArray.length > 1) {
            resultString += 'and ';
          }
          resultString += `\`${entry.original}\` is \`${entry.meters}m\``;
          if (index != convertedArray.length - 1) {
            resultString += ', ';
          }
        });

        return resultString;
      }

    }

    const metersMatchArray = [...msg.content.matchAll(metersRegEx)];
    // console.log(metersMatchArray);
    if (metersMatchArray != null) {
      if (metersMatchArray.length > 0) {
        let metersArray = [];
        metersMatchArray.forEach(entry => {
          // console.log(entry[1].indexOf(' '));
          if (entry[1].indexOf(' ') < 0) {
            metersArray.push({
              original: entry[0],
              index: entry['index'],
              msg: entry['input'],
              inputLength: entry[1],
              inputUnit: entry[2]
            });
          }
        });

        // console.log(metersArray);
        let convertedMetricArray = convertMetricLength(metersArray);
        // console.log(convertedMetricArray);

        let feetResultString = '';
        convertedMetricArray.forEach((entry, index) => {
          if (index == convertedMetricArray.length - 1 && convertedMetricArray.length > 1) {
            feetResultString += 'and ';
          }
          feetResultString += `\`${entry.original}\` is \`${entry.feet}'${entry.inches}"\``;
          if (index != convertedMetricArray.length - 1) {
            feetResultString += ', ';
          }
        });


        if (feetResultString == '') {
          return undefined;
        }
        else {
          return feetResultString;
        }
      }
    }

    const weightMatchArray = weightRegEx.exec(msg.content);
    // console.log(weightMatchArray);
    if (weightMatchArray != null) {
      response = convertWeight(weightMatchArray[1], weightMatchArray[3]);
      result = `${weightMatchArray[0]} is ${response[0]} ${response[1]}`;
    }
    if (result != "") {
      return result;
    }

    const tempMatchArray = tempRegEx.exec(msg.content);
    // console.log(tempMatchArray);
    if (tempMatchArray != null && !msg.content.toLowerCase().includes(".com")) {
      //console.log(tempMatchArray[1]);

      response = convertTemp(tempMatchArray[1], tempMatchArray[4]);
      result = `${tempMatchArray[0]} is ${response[0]}${response[1]}`;

    }
    if (result != "") {
      return result;
    }


  }
};

function convertMetricLength(metricArray) {
  let convertedMetricArray = [];
  metricArray.forEach((entry, index) => {
    // console.log(inEmote(entry));
    if (!inEmote(entry.msg, entry.index)) {
      convertedMetricArray.push(entry);
      if ((convertedMetricArray[index].inputUnit.toLowerCase()) == 'm') {
        // Meters to inches
        convertedMetricArray[index].totalInches = parseFloat((entry.inputLength * 39.37).toFixed(2));
      }
      else if ((convertedMetricArray[index].inputUnit.toLowerCase()) == 'cm') {
        //Centimeters to inches
        convertedMetricArray[index].totalInches = parseFloat((entry.inputLength / 2.54).toFixed(2));
      }

      convertedMetricArray[index].feet = Math.round(Math.floor(entry.totalInches / 12));
      convertedMetricArray[index].inches = Math.round(parseFloat((entry.totalInches % 12).toFixed(2)));
    }
  });

  return convertedMetricArray;
}

function convertFeetToCm(inchesArray) {

  // console.log(inchesArray);

  inchesArray.forEach(entry => {
    let feetInches = entry.feet * 12;
    let totalInches = feetInches + entry.inches;
    entry.totalInches = totalInches;
    entry.centimeters = (totalInches * 2.54).toFixed(2);
    entry.meters = (entry.centimeters / 100).toFixed(2);
  });

  return inchesArray;
}

function inEmote(msg, measureIndex) {
  // console.log(entryObj);
  const emoteRegExp = new RegExp(/<?(a)?:?(?<name>\w{2,32}):(?<id>\d{17,19})>?/, 'gim');
  const emoteMatchArray = [...msg.matchAll(emoteRegExp)];
  let emoteArray = [];
  let result = false;
  emoteMatchArray.forEach(entry => {
    // console.log(entry);
    emoteArray.push({
      start: entry["index"],
      end: entry["index"] + entry[0].length
    });
    if (measureIndex >= entry["index"] && measureIndex <= (entry["index"] + entry[0].length)) {
      result = true;
    }
    else {
      result = false;
    }
  });
  return result;
}


function convertTemp(value, measure) {
  let result = [0, ""];
  if (measure.toUpperCase() == 'C') {
    result[0] = ((value * 1.8) + 32).toFixed(2);
    result[1] = 'F';
  }
  else if (measure.toUpperCase() == 'F') {
    result[0] = ((value - 32) / 1.8).toFixed(2);
    result[1] = 'C';
  }
  return result;
}



function convertWeight(value, measure) {
  let result = [0, ""];
  if (measure == 'kg' || measure == 'kgs') {
    result[0] = (value * 2.205).toFixed(2);
    if (result[0] > 1) {
      result[1] = 'lbs';
    }
    else {
      result[1] = 'lb';
    }
  }
  else if (measure == 'lb' || measure == 'lbs') {
    result[0] = (value / 2.205).toFixed(2);
    if (result[0] > 1) {
      result[1] = 'kgs';
    }
    else {
      result[1] = 'kg';
    }
  }

  return result;
}
