const jumbo = require('./commands/jumbo');
const help = require('./commands/help');
const dadjoke = require('./commands/dadjoke');
const avatar = require('./commands/avatar');
const e621 = require('./commands/e621');
const { bellyrub, boop, cuddle, flop, hug, kiss, lick, nap, nuzzle, pat, poke, pounce, slap, sniff, spray, wag, whosagoodboy, fuck, pant, eatPant, suck } = require('./commands/actions');


const usedCommandRecently = new Set();
const cooldownTime = 300000;

function cooldown(cooldownObj) {
  usedCommandRecently.add(cooldownObj);
  setTimeout(() => {
    usedCommandRecently.delete(cooldownObj);
  }, cooldownTime)
}

function cooldownNotice(msg) {
  msg.reply(`you can only use this command once every ${cooldownTime / 60000} minutes`);
}

let test = 0;

module.exports = (commandArray, msg, client) => {
  let cooldownObj = {
    'command': commandArray[1].toLowerCase(),
    'userID': msg.author.id
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
      if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        dadjoke(msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'avatar':
      avatar(commandArray[2], msg, client);
      break;
    case 'bellyrub':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        bellyrub(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'boop':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        boop(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'cuddle':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        cuddle(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'flop':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        flop(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'hug':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        hug(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'kiss':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        kiss(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'lick':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        lick(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'nap':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        nap(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'nuzzle':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        nuzzle(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'pat':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        pat(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'pounce':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        pounce(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'poke':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        poke(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'slap':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        slap(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'sniff':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        sniff(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'spray':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        spray(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'wag':
      wag(msg, client);
      break;
    case 'whosagoodboy':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(!usedCommandRecently.has(JSON.stringify(cooldownObj))){
        whosagoodboy(commandArray, msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'marry':
      msg.channel.send(`That feature isn't available yet!`);
      break;
    case 'help':
      help(msg, commandArray[2]);
      break;
    case 'fuck':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if(!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          fuck(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj));
        }
        else {
          cooldownNotice(msg);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'pant':
      if(!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
        pant(commandArray[2], msg, client);
        cooldown(JSON.stringify(cooldownObj));
      }
      else {
        cooldownNotice(msg);
      }
      break;
    case 'eatpant':
      let authorizedUser = '250006896369598468'
      if (commandArray.length <= 2 && msg.author.id == authorizedUser) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.author.id == authorizedUser) {
        eatPant(commandArray, msg, client);
      }
      else {
        msg.channel.send(`Sorry, you can't eat pant.`);
      }
      break;
    case 'e621':
      let search_array = commandArray.splice(2, commandArray.length - 2);
      console.log(search_array);
      e621(search_array, msg, client);
      break;
    case 'suck':
      if (commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if (msg.channel.id != '598847956996718628') {
        if(!usedCommandRecently.has(JSON.stringify(cooldownObj))) {
          suck(commandArray, msg, client);
          cooldown(JSON.stringify(cooldownObj));
        }
        else {
          cooldownNotice(msg);
        }
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    default:
      console.log("no match");
  }
}