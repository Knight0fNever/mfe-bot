const startTime = Date.now();

const jumbo = require('./commands/jumbo');
// const ship = require('./commands/ship');
// const { checkForCooldown, marry } = require('./db/db');
const profile = require('./commands/profile');
const help = require('./commands/help');
const dadjoke = require('./commands/dadjoke');
const define = require('./commands/define');
const avatar = require('./commands/avatar');
const suggest = require('./commands/suggest');
const e621 = require('./commands/e621');
const { seeCooldowns, roles } = require('./commands/admin');
const { bellyrub, boop, cuddle, flop, hug, kiss, lick, nap, nuzzle, pat, poke, pounce, slap, sniff, spray, wag, whosagoodboy, fuck, pant, eatPant, suck, rub, tie, ride, facefuck, holdhands, cum, bonk, knot, eatKneecaps } = require('./commands/actions');
const { stats } = require('./commands/stats');
// const bj = require('./commands/bj/app');

const staffRoldID = '599972688932372482';
const myID = '615687360138575893';

const usedCommandRecently = new Set();
const cooldownTime = 300000;
let coolDowns = {

};

function cooldown(cooldownObj, id, action) {
  if (id != myID) {
    usedCommandRecently.add(cooldownObj);
    coolDowns[cooldownObj] = {
      'userID': id,
      'action': action,
      'timer': setTimeout(() => {
        usedCommandRecently.delete(cooldownObj);
        delete coolDowns[cooldownObj];
      }, cooldownTime)
    };
  }
}

function cooldownNotice(msg, timeLeft) {
  let minutes = Math.floor(timeLeft / 60000);
  let seconds = Math.floor(((timeLeft / 60000) - minutes) * 60);
  msg.reply(`you have ${minutes} minutes and ${seconds} seconds left before you can use this command again.`);
}

module.exports = (commandArray, msg, client) => {
  let cooldownObj = `${commandArray[1].toLowerCase()}-${msg.author.id}`;
  let timeLeft = null;
  if (coolDowns[JSON.stringify(cooldownObj)] != undefined) {
    timeLeft = Math.ceil(startTime + coolDowns[JSON.stringify(cooldownObj)].timer._idleStart + coolDowns[JSON.stringify(cooldownObj)].timer._idleTimeout - Date.now());
  }
  switch (commandArray[1].toLowerCase()) {
    case 'jumbo':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you most give me an emote to jumbo!`);
      }
      else {
        jumbo(commandArray[2], msg, client);
      }
      break;
    case 'dadjoke':
      dadjoke(msg, client);
      break;
    case 'avatar':
      avatar(commandArray[2], msg, client);
      break;
    case 'profile':
      profile(commandArray[2], msg, client);
      break;
    case 'bellyrub':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        bellyrub(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'bellyrub');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'boop':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        boop(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'boop');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'cuddle':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        cuddle(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'cuddle');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'flop':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        flop(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'flop');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'hug':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        hug(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'hug');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'kiss':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        kiss(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'kiss');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'lick':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        lick(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'lick');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'nap':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        nap(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'nap');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'nuzzle':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        nuzzle(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'nuzzle');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'pat':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        pat(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'pat');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'pounce':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        pounce(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'pounce');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'poke':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        poke(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'poke');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'slap':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        slap(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'slap');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'sniff':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        sniff(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'sniff');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'spray':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        spray(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'spray');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'wag':
      wag(msg, client);
      break;
    case 'whosagoodboy':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        whosagoodboy(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'whosagoodboy');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    // case 'marry':
    //   msg.channel.send(`That feature isn't available yet!`);
    //   break;
    case 'help':
      help(msg, commandArray[2]);
      break;
    case 'fuck':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          fuck(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'fuck');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'pant':
      let allowedGuild = '598834691625451522';
      if (msg.guild.id == allowedGuild) {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          pant(commandArray[2], msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'pant');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send("Sorry that command is not available in this server!");
      }
      break;
    case 'eatpant':
      let allowedGuild_EatPant = '598834691625451522';
      let authorizedUser = '250006896369598468';
      if (allowedGuild_EatPant == msg.guild.id) {
        if (commandArray.length <= 2 && msg.author.id == authorizedUser) {
          msg.channel.send(`Sorry, you must include a target of your action!`);
        }
        else if (msg.author.id == authorizedUser) {
          eatPant(commandArray, msg, client);
        }
        else {
          msg.channel.send(`Sorry, you can't eat pant.`);
        }
      }
      else {
        msg.channel.send("Sorry that command is not available in this server!");
      }
      break;
    case 'e621':
      let search_array = commandArray.splice(2, commandArray.length - 2);
      console.log(search_array);
      let search_string = search_array.toString().replace(/,/g, ' ').concat(' order:score');
      e621(search_string, msg, client);
      break;
    case 'yiff':
      let yiff_search_string = " male -diaper -vore order:random";
      e621(yiff_search_string, msg, client);
      break;
    case 'suck':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          suck(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'suck');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'cooldowns':
      if (msg.author.id == '615687360138575893' || msg.member.roles.cache.has(staffRoldID)) {
        seeCooldowns(msg, client, coolDowns, cooldownTime, startTime);
      }
      break;
    case 'roles':
      if (msg.author.id == '615687360138575893' || msg.member.roles.cache.has(staffRoldID)) {
        msg.channel.send("Working...");
        roles(msg, client);
      }
      break;
    // case 'suggest':
    //   suggest(commandArray, msg, client);
    //   break;
    case 'rub':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          rub(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'rub');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'tie':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          tie(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'tie');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'stats':
      stats(msg, client);
      break;
    case 'ride':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          ride(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'ride');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'facefuck':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          facefuck(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'facefuck');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'holdhands':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        holdhands(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'holdhands');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    // case 'bj':
    //   if (commandArray.length <= 2) {
    //     msg.channel.send(`Sorry, you must include a wager!`);
    //   }
    //   else {
    //     bj.startGame(msg.author.id, [1]);
    //   }
    //   break;
    case 'cum':
      if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        cum(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'cum');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'bonk':
      if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        bonk(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj), msg.author.id, 'bonk');
      }
      else {
        cooldownNotice(msg, timeLeft);
      }
      break;
    case 'define':
      define(commandArray, msg, client);
      break;
    case 'knot':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          knot(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj), msg.author.id, 'knot');
        }
        else {
          cooldownNotice(msg, timeLeft);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'eatkneecaps':
      let allowedGuild_EatKneecaps = '598834691625451522';
      let authorizedUserKneecaps = '705252895905284161';
      if (allowedGuild_EatKneecaps == msg.guild.id) {
        if (commandArray.length <= 2 && msg.author.id == authorizedUserKneecaps) {
          msg.channel.send(`Sorry, you must include a target of your action!`);
        }
        else if (msg.author.id == authorizedUserKneecaps) {
          eatKneecaps(commandArray, msg, client);
        }
        else {
          msg.channel.send(`Sorry, you can't eat pant.`);
        }
      }
      else {
        msg.channel.send("Sorry that command is not available in this server!");
      }
      break;
    default:
      console.log("no match");
  }
};