const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class EndCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "end",
      group: "quidditch",
      memberName: "end",
      description: "Finish a match",
      examples: ["end"],
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    message.channel.send(`C'est la fin du match !`);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: end`);
  }
};
