const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class StartMatchCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "start",
      memberName: "start",
      group: "quidditch",
      description: "Start a quidditch match",
      argsType: "multiple",
      clientPermissions: ["SEND_MESSAGES"],
      examples: ["start house1 house2"],
      throttling: {
        usages: 1,
        duration: 3,
      },
      args: [
        {
          key: "house1",
          prompt: "Name of the first house",
          type: "string",
        },
        {
            key: "house2",
            prompt: "Name of the second house",
            type: "string",
          },
      ],
      guildOnly: true,
    });
  }

  async run(message, { house1, house2 }) {
    message.delete();
    message.channel.send(
      `Le match entre les maisons ${house1} et ${house2} commence !`
    );

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: start`);
  }
};

