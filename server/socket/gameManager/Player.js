class Player {
  constructor(username, count) {
    this.username = username;
    this.isCzar = false;
    this.points = 0;
    this.cards = [];
    this.poopTime = count;
  }

  toggleCzar() {
    this.isCzar = !this.isCzar;
  }

  addPoint() {
    this.points++;
  }
}

module.exports = Player;
