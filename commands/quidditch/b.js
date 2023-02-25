const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class BCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "b",
      group: "quidditch",
      memberName: "b",
      description: "Shoot Batteur",
      examples: ["b"],
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    let result = Math.floor(Math.random() * 5) + 1
    if (result === 1) {
        message.channel.send("\nMais quel cognard ! L'adversaire en perd la balle !");  
    }
    else {
    message.channel.send("\nC'était un beau lancer mais il ne parviendra pas à toucher l'adversaire !");
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: b`);
  }
};
