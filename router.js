const jumbo = require('./commands/jumbo');
const help = require('./commands/help');
const dadjoke = require('./commands/dadjoke');
const avatar = require('./commands/avatar');
const { bellyrub, boop, cuddle, flop, hug, kiss, lick, nap, nuzzle, pat, poke, pounce, slap, sniff, spray, wag, whosagoodboy, fuck, pant, eatPant } = require('./commands/actions');

module.exports = (commandArray, msg, client) => {
  switch(commandArray[1].toLowerCase()) {
    case 'jumbo':
      if(commandArray.length <= 2) {
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
    case 'bellyrub':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        bellyrub(commandArray, msg, client);
      }
      break;
    case 'boop':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        boop(commandArray, msg, client);
      }
      break;
    case 'cuddle':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        cuddle(commandArray, msg, client);
      }
      break;
    case 'flop':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        flop(commandArray, msg, client);
      }
      break;
    case 'hug':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        hug(commandArray, msg, client);
      }
      break;
    case 'kiss':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        kiss(commandArray, msg, client);
      }
      break;
    case 'lick':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        lick(commandArray, msg, client);
      }
      break;
    case 'nap':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        nap(commandArray, msg, client);
      }
      break;
    case 'nuzzle':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        nuzzle(commandArray, msg, client);
      }
      break;
    case 'pat':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        pat(commandArray, msg, client);
      }
      break;
    case 'pounce':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        pounce(commandArray, msg, client);
      }
      break;
    case 'poke':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        poke(commandArray, msg, client);
      }
      break;
    case 'slap':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        slap(commandArray, msg, client);
      }
      break;
    case 'sniff':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        sniff(commandArray, msg, client);
      }
      break;
    case 'spray':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        spray(commandArray, msg, client);
      }
      break;
    case 'wag':
      wag(msg, client);
      break;
    case 'whosagoodboy':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else {
        whosagoodboy(commandArray, msg, client);
      }
      break;
    case 'marry':
      msg.channel.send(`That feature isn't available yet!`);
      break;
    case 'help':
      msg.channel.send(`Help is coming soon!`);
      break;
    case 'fuck':
      if(commandArray.length <= 2) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(msg.channel.id != '598847956996718628') {
        fuck(commandArray, msg, client);
      }
      else {
        msg.channel.send(`This can't be done in the SFW-Chat!`);
      }
      break;
    case 'pant':
      pant(msg, client);
      break;
    case 'eatpant':
      let authorizedUser = '250006896369598468'
      if(commandArray.length <= 2 && msg.author.id == authorizedUser) {
        msg.channel.send(`Sorry, you must include a target of your action!`);
      }
      else if(msg.author.id == authorizedUser) {
        eatPant(commandArray, msg, client);
      }
      else {
        msg.channel.send(`Sorry, you can't eat pant.`);
      }
      break;
    default:
      console.log("no match");
  }
}