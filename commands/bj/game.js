let Player = require('./player');
let Dealer = require('./dealer');
let Cards = require('./cards');
let db = require('./db');

class Game {
  constructor(discordID, wager) {
    this.id = Math.floor(100000 + Math.random() * 900000);
    this.wager = wager;
    this.cards = new Cards();
    this.dealer = new Dealer();
    this.player = new Player(discordID, wager);
    this.new();
  }
  async new() {
    // Checks for existing user in DB. If not found, creates user with 5000 credits.
    await this.checkForExistingUser();
    let dbPlayer = await db.getUser(this.player.discordID);
    this.player.cash = dbPlayer[0].cash;
    // console.log(`Wager: ${this.wager}\nCash: ${this.player.cash}`)
    // console.log(dbPlayer);
    if (this.player.cash < this.wager) {
      // Not enough money to play
      console.log('Not enough money');
    }
    else {
      // Enough money
      console.log('Enough Money');
    }

  }
  async checkForExistingUser() {
    let dbPlayer = await db.getUser(this.player.discordID);
    if (dbPlayer.length < 1) {
      db.createUser(this.player.discordID, 5000);
    }
  }
}

module.exports = Game;