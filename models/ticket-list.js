const Ticket = require("./ticket");

class TicketList {
  constructor() {
    this.lastNumber = 0;

    this.waiters = [];
    this.assigned = [];
  }

  get nextNumber() {
    this.lastNumber++;
    return this.lastNumber;
  }

  // the last 3 for the screen and the next 10 in the list
  get lastThirten() {
    return this.assigned.slice(0, 13);
  }

  createTicket() {
    const newTicket = new Ticket(this.nextNumber);
    this.waiters.push(newTicket);
    return newTicket;
  }

  assignTicket(agent, desktop) {
    if (this.waiters.length === 0) {
      return null;
    }

    // Remember 'shift' deletes the first element of the array and returns that deleted element to the constant
    const nextTicket = this.waiters.shift();

    nextTicket.agent = agent;
    nextTicket.desktop = desktop;

    this.assigned.unshift(nextTicket);

    return nextTicket;
  }
}

module.exports = TicketList;
