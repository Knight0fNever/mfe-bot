class Player {
  constructor(discordID, wager) {
    this.discordID = discordID;
    this.wager = wager;
    this.cash = 0;
    this.hand = [];
  }
}

module.exports = Player;