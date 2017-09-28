class Player {
  constructor(username) {
    this.username = username;
    this.isCzar = false;
    this.points = 0;
    this.cards = [];
    this.poopTime = undefined;
  }

  toggleCzar() {
    this.isCzar = !this.isCzar;
  }

  addPoint() {
    this.points++;
  }
}

module.exports = Player;
