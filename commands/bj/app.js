let Game = require('./game');

let games = new Set();

const cooldownTime = 300000;
let coolDowns = {};
const myID = '615687360138575893'

// function cooldown(game) {
//   if (game.player.discordID != myID) {
//     games.add(game);
//     console.log(games);
//     coolDowns[game.id] = {
//       'game': game,
//       'timer': setTimeout(() => {
//         games.delete(game);
//         delete coolDowns[game.player.discordID];
//         console.log(`Game ${game.id} timed out!`);
//       }, cooldownTime)
//     }
//   }
// }

function router(discordID, wager) {
  if(games.has(discordID)) {
    // Game exists
  }
}

function resetCooldown(game) {
  if(coolDowns[game.id].timer != undefined) {
    clearTimeout(coolDowns[game.id].timer);
    cooldown(game);
  }
  else {
    cooldown(game);
  }
}

function startGame(discordID, wager) {
  let game = new Game(discordID, wager);
  let gameObj = {
    id: game.id,
    discordID: game.player.discordID,
    cash: game.player.cash
  }
  cooldown(game);
  console.log(games.size);
  // for (item of games.values()) {
  //   console.log(item);
  // }
}

function checkForExistingGame(discordID) {

}

module.exports = {
  startGame: startGame
}