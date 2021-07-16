const { embedBuilder } = require('../helper');
let local_client = null;

module.exports = {
  bellyrub: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    console.log(msg.content);
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} gave ${targets} a bellyrub!`, msg.author, `RANDOM`, `Bellyrub!`));
  },
  boop: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} booped ${targets} on the nose! BOOP!`, msg.author, `RANDOM`, `Boop!`));
  },
  cuddle: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} cuddled ${targets} from behind! Aww!`, msg.author, `RANDOM`, `Cuddle!`));
  },
  flop: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} flopped on ${targets}'s pecs!`, msg.author, `RANDOM`, `Flop!`));

  },
  hug: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} wrapped their arms around ${targets}, squeezing tightly!`, msg.author, `RANDOM`, `Hug!`));
  },
  kiss: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} gave ${targets} a big, wet kiss!`, msg.author, `RANDOM`, `Kiss!`));
  },
  lick: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} licked ${targets}!`, msg.author, `RANDOM`, `Lick!`));
  },
  nap: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} decided to take a nap on ${targets}`, msg.author, `RANDOM`, `Nap!`));
  },
  nuzzle: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} nuzzles ${targets} gently. Cute!`, msg.author, `RANDOM`, `Nuzzle!`));
  },
  pat: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} gently pats ${targets}`, msg.author, `RANDOM`, `Pat!`));
  },
  poke: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} pokes ${targets}. Don't make them mad...`, msg.author, `RANDOM`, `Poke!`));
  },
  pounce: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} pounces on ${targets} uwu`, msg.author, `RANDOM`, `Pounce!`, `https://assets.furry.bot/pounce.gif`));
  },
  slap: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} slaps ${targets}.. ouch`, msg.author, `RANDOM`, `Slap!`));
  },
  sniff: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} sniffs ${targets}.. maybe they smell good?`, msg.author, `RANDOM`, `Sniff!`));
  },
  spray: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} sprays ${targets} with a water bottle, yelling "bad fur!"`, msg.author, `RANDOM`, `Spray!`));
  },
  wag: (msg, client) => {
    local_client = client;
    msg.channel.send(embedBuilder(`${msg.author} wags their tail. Aren't they cute? ^^`, msg.author, `RANDOM`, `Wag!`));
  },
  whosagoodboy: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`Yip yip! ${targets} is!`, msg.author, `RANDOM`, `Good Boy!`));
  },
  fuck: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (msg.mentions.users.first() != undefined) {
      if (msg.author.id == msg.mentions.users.first().id) {
        msg.channel.send("<:judging:633193950299291658>");
      }
      else {
        msg.channel.send(embedBuilder(`${msg.author} bends ${targets} over and fucks them! Everyone look away.. or not`, msg.author, `RANDOM`, `Fuck!`));
      }
    }
  },
  suck: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (msg.mentions.users.first() != undefined) {
      if (msg.author.id == msg.mentions.users.first().id) {
        msg.channel.send("<:judging:633193950299291658>");
      }
      else {
        msg.channel.send(embedBuilder(`${msg.author} sucks ${targets} hungrily, slightly gagging on their thick cock.`, msg.author, `RANDOM`, `Suck!`));
      }
    }
  },
  pant: (target, msg, client) => {
    local_client = client;
    const user = msg.mentions.users.first();
    if (user == undefined) {
      let embed = embedBuilder(`${msg.author} removes their pant and then donates them to <@!250006896369598468>, the pant eater!`, msg.author, `RANDOM`, `Pant!`);
      msg.channel.send(embed);
    }
    else {
      let embed = embedBuilder(`${msg.author} removes their pant and then gives them to <@${user.id}>!`, msg.author, `RANDOM`, `Pant!`);
      msg.channel.send(embed);
    }
  },
  eatPant: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} sneaks up behind ${targets} and steals their pant, quickly eating them in 1 big chomp.`, msg.author, `RANDOM`, `Eat Pant!`));
  },
  rub: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} rubs ${targets} with both hands!`, msg.author, `RANDOM`, `Rub!`));
  },
  tie: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} ties ${targets} to the bed with thick rope! They couldn't get away if they tried..`, msg.author, `RANDOM`, `Tie!`));
  },
  ride: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (msg.mentions.users.first() != undefined) {
      if (msg.author.id == msg.mentions.users.first().id) {
        msg.channel.send("<:judging:633193950299291658>");
      }
      else {
        msg.channel.send(embedBuilder(`${msg.author} holds ${targets} down and straddles their hips. Reaching back and gripping the throbbing cock, ${msg.author} presses it against their eager hole and sits back; taking the full length of ${targets}'s member in one, fluid motion.`, msg.author, `RANDOM`, `Ride!`));
      }
    }
  },
  facefuck: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (msg.mentions.users.first() != undefined) {
      if (msg.author.id == msg.mentions.users.first().id) {
        msg.channel.send("<:judging:633193950299291658>");
      }
      else {
        msg.channel.send(embedBuilder(`${msg.author} forces ${targets} onto their knees as they eagerly open their maw. Grabbing the back of ${targets}'s head, ${msg.author} thrusts their throbbing member into their mouth with little mercy. ${targets} is only able to choke and gargle as their throat is violated repeatedly.`, msg.author, `RANDOM`, `Face Fuck!`));
      }
    }
  },
  holdhands: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} reaches over to ${targets}, brushing their hand with the back of their own. Slowly, they interlock fingers as they stare deeply into each other's eyes.`, msg.author, `RANDOM`, `Holds Hands!`, `https://cdn.discordapp.com/emojis/670335536136847360.gif?v=1`));
  },
  cum: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (targets == "") {
      let embed = embedBuilder(`${msg.author} grits their teeth and their body shivers with pleasure as they uncontrollably splurt all over the floor, leaving it a slimy mess.`, msg.author, `RANDOM`, `Cumshot`);
      msg.channel.send(embed);
    }
    else {
      let embed = embedBuilder(`${msg.author} grits their teeth and their body shivers as they uncontrollably splurt all over ${targets}; now marked with their seed.`, msg.author, `RANDOM`, `Cumshot`);
      msg.channel.send(embed);
    }
  },
  bonk: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (targets == "") {
      let embed = embedBuilder(`${msg.author} bonked themselves on the head. Ouch!`, msg.author, `RANDOM`, `Bonk!`, 'https://media1.tenor.com/images/d9b79552094d5036f686f194d006d8d4/tenor.gif');
      msg.channel.send(embed);
    }
    else {
      let embed = embedBuilder(`${msg.author} used a rubber hammer on ${targets}. B O N K`, msg.author, `RANDOM`, `Bonk!`, 'https://media1.tenor.com/images/d9b79552094d5036f686f194d006d8d4/tenor.gif');
      msg.channel.send(embed);
    }
  },
  knot: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    if (msg.mentions.users.first() != undefined) {
      if (msg.author.id == msg.mentions.users.first().id) {
        msg.channel.send("<:judging:633193950299291658>");
      }
      else {
        msg.channel.send(embedBuilder(`Unbearably close to an intense climax, ${msg.author} pops his knot into ${targets}. The walls of ${targets}'s insides clamp tightly in response to the sudden entry of the large, swollen member, which is enough to push ${msg.author} over the edge. ${msg.author} shoots enough thick, warm cum to coat ${targets}'s guts.`, msg.author, `RANDOM`, `Knot!`));
      }
    }
  },
  eatKneecaps: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for (let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    targets = targets.trim();
    msg.channel.send(embedBuilder(`${msg.author} sinks his claws into ${targets}'s knees. Gouging out their kneecaps and tearing apart the ligaments as he rips the kneecaps off its socket`, msg.author, `RANDOM`, `Kneecap Vore!`, `https://media1.tenor.com/images/17d0bd720086dbdc1f9e5d9bc52784a5/tenor.gif?itemid=12205637`));
  }
};

