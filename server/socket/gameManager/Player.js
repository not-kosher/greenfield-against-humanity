class Player {
  constructor(username, count) {
    this.username = username;
    this.isCzar = false;
    this.points = 0;
    this.cards = [];
    this.playerNum = count;
  }
}

module.exports = Player;
