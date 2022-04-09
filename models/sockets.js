const TicketList = require("./ticket-list");

class Sockets {
  constructor(io) {
    this.io = io;

    // Create the instance of ticketList
    this.ticketList = new TicketList();

    this.socketEvents();
  }

  socketEvents() {
    // On connection
    this.io.on("connection", (socket) => {
      console.log("A new client");

      socket.on("request-ticket", (_, callback) => {
        const newTicket = this.ticketList.createTicket();
        callback(newTicket);
      });
    });
  }
}

module.exports = Sockets;
