const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class PCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "p",
      group: "quidditch",
      memberName: "p",
      description: "Shoot Poursuiveur",
      examples: ["p"],
      guildOnly: true,
    });
     this.score1 = null;
     this.score2 = null;
  }

  async run(message) {
    message.delete();
    let result = Math.floor(Math.random() * 3) + 1
    if (result === 1) {
        message.channel.send("\nLa balle est cadrée !"); 
    }
    else {
    message.channel.send("\nCe n'est vraiment pas passé loin !");
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: p`);
  }
};