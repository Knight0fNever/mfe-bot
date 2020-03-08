const { embedBuilder } = require('../helper');
let local_client = null;

module.exports = {
  bellyrub: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";

    }
    msg.channel.send(embedBuilder(`${msg.author} gave ${targets} a bellyrub!`, msg.author, `RANDOM`, `Bellyrub!`));
  },
  boop: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";

    }
    msg.channel.send(embedBuilder(`${msg.author} booped ${targets} on the nose! BOOP!`, msg.author, `RANDOM`, `Boop!`));
  },
  cuddle: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";

    }
    msg.channel.send(embedBuilder(`${msg.author} cuddled ${targets} from behind! Aww!`, msg.author, `RANDOM`, `Cuddle!`));
  },
  flop: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} flopped on ${targets}'s pecs!`, msg.author, `RANDOM`, `Flop!`));

  },  
  hug: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} wrapped their arms around ${targets}, squeezing tightly!`, msg.author, `RANDOM`, `Hug!`));
  },
  kiss: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} gave ${targets} a big, wet kiss!`, msg.author, `RANDOM`, `Kiss!`));
  },
  lick: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} licked ${targets}!`, msg.author, `RANDOM`, `Lick!`));
  },
  nap: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} decided to take a nap on ${targets}`, msg.author, `RANDOM`, `Nap!`));
  },
  nuzzle: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} nuzzles ${targets} gently. Cute!`, msg.author, `RANDOM`, `Nuzzle!`));
  },
  pat: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} gently pats ${targets}`, msg.author, `RANDOM`, `Pat!`));
  },
  poke: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} pokes ${targets}. Don't make them mad...`, msg.author, `RANDOM`, `Poke!`));
  },
  pounce: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} pounces on ${targets} uwu`, msg.author, `RANDOM`, `Pounce!`, `https://assets.furry.bot/pounce.gif`));
  },
  slap: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} slaps ${targets}.. ouch`, msg.author, `RANDOM`, `Slap!`));
  },
  sniff: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} sniffs ${targets}.. maybe they smell good?`, msg.author, `RANDOM`, `Sniff!`));
  },
  spray: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} sprays ${targets} with a water bottle, yelling "bad fur!"`, msg.author, `RANDOM`, `Spray!`));
  },
  wag: (msg, client) => {
    local_client = client;
    msg.channel.send(embedBuilder(`${msg.author} wags their tail. Aren't they cute? ^^`, msg.author, `RANDOM`, `Wag!`));
  },
  whosagoodboy: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`Yip yip! ${targets} is!`, msg.author, `RANDOM`, `Good Boy!`));
  },
  fuck: (target, msg, client) => {
    local_client = client;
    let targets = "";
    for(let i = 2; i < target.length; i++) {
      targets = targets + target[i] + " ";
    }
    msg.channel.send(embedBuilder(`${msg.author} bends ${targets} over and fucks them! Everyone look away.. or not`, msg.author, `RANDOM`, `Fuck!`));
  },
  pant: (msg, client) => {
    local_client = client;
    msg.channel.send(embedBuilder(`${msg.author} romoves their pant and then donates them to Skorn, the lover of pant`, msg.author, `RANDOM`, `Pant!`));
  }
}

