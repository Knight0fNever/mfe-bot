const { embedBuilder }  = require('../helper');

module.exports = (msg) => {
  let fields = {

  }
  let embed = embedBuilder("Help!", msg.author, 'RANDOM', "Help!", undefined, fields);
}