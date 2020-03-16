let util = require('util');
const {parse, stringify} = require('flatted/cjs');

module.exports = {
  seeCooldowns: (msg, client, coolDowns, cooldownTime, startTime) => {
    // let timeLeft = null;
    // if (coolDowns[JSON.stringify(cooldownObj)] != undefined) {
    //   timeLeft = Math.ceil(startTime + coolDowns[JSON.stringify(cooldownObj)]._idleStart + coolDowns[JSON.stringify(cooldownObj)]._idleTimeout - Date.now());
    //   console.log(timeLeft);
    // }
    console.log()
    console.log(parse(stringify(coolDowns))['"dadjoke-615687360138575893"']._idleStart);
  }
}