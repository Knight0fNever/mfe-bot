const helper = require('../helper');

let functions = {
  bellyrub: (msg, args) => {
    console.log(args);
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {
      msg.channel.createMessage("Sorry, you must include a target for this action.")
    }
    else {
      msg.channel.createMessage(embedBuilder(`${msg.author.mention} gave ${targets} a bellyrub!`, msg.author, `Bellyrub!`)); 
    }
  },
  boop: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} booped ${targets} on the nose! BOOP!`, msg.author, `Boop!`));
  },
  cuddle: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} cuddled ${targets} from behind! Aww!`, msg.author, `Cuddle!`));
  },
  flop: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} flopped on ${targets}'s pecs!`, msg.author, `Flop!`));

  },
  hug: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} wrapped their arms around ${targets}, squeezing tightly!`, msg.author, `Hug!`));
  },
  kiss: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} gave ${targets} a big, wet kiss!`, msg.author, `Kiss!`));
  },
  lick: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} licked ${targets}!`, msg.author, `Lick!`));
  },
  nap: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} decided to take a nap on ${targets}`, msg.author, `Nap!`));
  },
  nuzzle: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} nuzzles ${targets} gently. Cute!`, msg.author, `Nuzzle!`));
  },
  pat: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} gently pats ${targets}`, msg.author, `Pat!`));
  },
  poke: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} pokes ${targets}. Don't make them mad...`, msg.author, `Poke!`));
  },
  pounce: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} pounces on ${targets} uwu`, msg.author, `Pounce!`, `https://assets.furry.bot/pounce.gif`));
  },
  slap: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} slaps ${targets}.. ouch`, msg.author, `Slap!`));
  },
  sniff: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} sniffs ${targets}.. maybe they smell good?`, msg.author, `Sniff!`));
  },
  spray: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} sprays ${targets} with a water bottle, yelling "bad fur!"`, msg.author, `Spray!`));
  },
  wag: (msg) => {
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} wags their tail. Aren't they cute? ^^`, msg.author, `Wag!`));
  },
  whosagoodboy: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`Yip yip! ${targets} is!`, msg.author, `Good Boy!`));
  },
  fuck: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    if (msg.mentions[0] != undefined) {
      if (msg.author.id == msg.mentions[0].id) {
        msg.channel.createMessage("<:judging:633193950299291658>");
      }
      else {
        msg.channel.createMessage(embedBuilder(`${msg.author.mention} bends ${targets} over and fucks them! Everyone look away.. or not`, msg.author, `Fuck!`));
      }
    }
  },
  suck: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    if (msg.mentions[0] != undefined) {
      if (msg.author.id == msg.mentions[0].id) {
        msg.channel.createMessage("<:judging:633193950299291658>");
      }
      else {
        msg.channel.createMessage(embedBuilder(`${msg.author.mention} sucks ${targets} hungrily, slightly gagging on their thick cock.`, msg.author, `Suck!`));
      }
    }
  },
  pant: (msg) => {
    const user = msg.mentions[0];
    if (user == undefined) {
      let embed = embedBuilder(`${msg.author.mention} removes their pant and then donates them to <@!250006896369598468>, the pant eater!`, msg.author, `Pant!`)
      msg.channel.createMessage(embed);
    }
    else {
      let embed = embedBuilder(`${msg.author.mention} removes their pant and then gives them to <@${user.id}>!`, msg.author, `Pant!`)
      msg.channel.createMessage(embed);
    }
  },
  eatPant: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} sneaks up behind ${targets} and steals their pant, quickly eating them in 1 big chomp.`, msg.author, `Eat Pant!`));
  },
  rub: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} rubs ${targets} with both hands!`, msg.author, `Rub!`));
  },
  tie: (msg, args) => {
    let targets = "";
    for (let i = 0; i < args.length; i++) {
      targets = targets + args[i] + " ";
    }
    targets = targets.trim();
    if(args.length == 0) {

    }
    else {
      
    }
    msg.channel.createMessage(embedBuilder(`${msg.author.mention} ties ${targets} to the bed with thick rope! They couldn't get away if they tried..`, msg.author, `Tie!`));
  }
}

module.exports = {
  bellyrub: {
    "name": "bellyrub",
    "command": functions.bellyrub,
    "options": {
      description: "bellyrub",
      fullDescription: "Give someone a bellyrub!",
      usage: "<@username>"
    }
  },
  boop: {
    "name": "boop",
    "command": functions.boop,
    "options": {
      description: "boop",
      fullDescription: "Give someone a boop!",
      usage: "<@username>"
    }
  },
  cuddle: {
    "name": "cuddle",
    "command": functions.cuddle,
    "options": {
      description: "cuddle",
      fullDescription: "Cuddle someone!",
      usage: "<@username>"
    }
  },
  flop: {
    "name": "flop",
    "command": functions.flop,
    "options": {
      description: "flop",
      fullDescription: "Flop on someone!",
      usage: "<@username>"
    }
  },
  hug: {
    "name": "hug",
    "command": functions.hug,
    "options": {
      description: "hug",
      fullDescription: "Hug someone you care about!",
      usage: "<@username>"
    }
  },
  kiss: {
    "name": "kiss",
    "command": functions.kiss,
    "options": {
      description: "kiss",
      fullDescription: "Kiss someone!",
      usage: "<@username>"
    }
  },
  lick: {
    "name": "lick",
    "command": functions.lick,
    "options": {
      description: "lick",
      fullDescription: "Lick someone!",
      usage: "<@username>"
    }
  },
  nap: {
    "name": "nap",
    "command": functions.nap,
    "options": {
      description: "boop",
      fullDescription: "Take a nap on someone!",
      usage: "<@username>"
    }
  },
  nuzzle: {
    "name": "nuzzle",
    "command": functions.nuzzle,
    "options": {
      description: "nuzzle",
      fullDescription: "Nuzzle against someone!",
      usage: "<@username>"
    }
  },
  pat: {
    "name": "pat",
    "command": functions.pat,
    "options": {
      description: "pat",
      fullDescription: "Pat someone!",
      usage: "<@username>"
    }
  },
  poke: {
    "name": "poke",
    "command": functions.poke,
    "options": {
      description: "poke",
      fullDescription: "Poke someone!",
      usage: "<@username>"
    }
  },
  pounce: {
    "name": "pounce",
    "command": functions.pounce,
    "options": {
      description: "pounce",
      fullDescription: "Pounce on someone!",
      usage: "<@username>"
    }
  },
  slap: {
    "name": "slap",
    "command": functions.slap,
    "options": {
      description: "slap",
      fullDescription: "Slap someone!",
      usage: "<@username>"
    }
  },
  sniff: {
    "name": "sniff",
    "command": functions.sniff,
    "options": {
      description: "sniff",
      fullDescription: "Sniffs someone!",
      usage: "<@username>"
    }
  },
  spray: {
    "name": "spray",
    "command": functions.spray,
    "options": {
      description: "spray",
      fullDescription: "Spray a bad fur!",
      usage: "<@username>"
    }
  },
  wag:{
    "name": "wag",
    "command": functions.wag,
    "options": {
      description: "wag",
      fullDescription: "Wag your tail!",
      usage: ""
    }
  },
  whosagoodboy: {
    "name": "whosagoodboy",
    "command": functions.whosagoodboy,
    "options": {
      description: "whosagoodboy",
      fullDescription: "Ask the bot who a good boy is!",
      usage: "<@username>"
    }
  },
  fuck: {
    "name": "fuck",
    "command": functions.fuck,
    "options": {
      description: "fuck",
      fullDescription: "Fuck someone!",
      usage: "<@username>"
    }
  },
  suck: {
    "name": "suck",
    "command": functions.suck,
    "options": {
      description: "suck",
      fullDescription: "Suck someone off!",
      usage: "<@username>"
    }
  },
  pant: {
    "name": "pant",
    "command": functions.pant,
    "options": {
      description: "pant",
      fullDescription: "Donate your pant to someone",
      usage: "<@username>"
    }
  },
  eatPant: {
    "name": "eatPant",
    "command": functions.eatPant,
    "options": {
      description: "eatPant",
      fullDescription: "Skorn eats the pant",
      usage: "<@username>"
    }
  },
  rub: {
    "name": "rub",
    "command": functions.rub,
    "options": {
      description: "rub",
      fullDescription: "Give someone a rub!",
      usage: "<@username>"
    }
  },
  tie: {
    "name": "tie",
    "command": functions.tie,
    "options": {
      description: "tie",
      fullDescription: "Tie someone up!",
      usage: "<@username>"
    }
  }
}

function embedBuilder(description, author, title, image) {

  let response = {};

  if(image == undefined) {
    response = {
      "embed": {
        "title": title,
        "description": description,
        "color": helper.getRandomColor(),
        "author": {
          "name": `${author.username}#${author.discriminator}`,
          "icon_url": author.avatarURL
        }
      }
    }
  }
  else {
    response = {
      "embed": {
        "title": title,
        "image": `${image}`,
        "description": description,
        "color": helper.getRandomColor(),
        "author": {
          "name": `${author.username}#${author.discriminator}`,
          "icon_url": author.avatarURL
        }
      }
    }
  }

  return response;
}