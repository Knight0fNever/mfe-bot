class Cards {
  constructor() {
    this.suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
    this.values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
    this.deck = new Array();
  }
  createDeck() {
    this.deck = new Array();
    for (var i = 0; i < this.values.length; i++) {
      for (var x = 0; x < this.suits.length; x++) {
        var weight = parseInt(this.values[i]);
        if (this.values[i] == "J" || this.values[i] == "Q" || this.values[i] == "K")
          weight = 10;
        if (this.values[i] == "A")
          weight = 11;
        var card = { Value: this.values[i], Suit: this.suits[x], Weight: weight };
        deck.push(card);
      }
    }
  }
}

module.exports = Cards;