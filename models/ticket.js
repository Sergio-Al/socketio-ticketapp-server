const { v4: uuidV4 } = require("uuid");

class Ticket {
  cosntructor(number) {
    this.id = uuidV4();
    this.number = number;
    this.desktop = null;
    this.agent = null;
  }
}

module.exports = Ticket;
