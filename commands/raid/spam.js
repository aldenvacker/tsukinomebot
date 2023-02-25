const Discord = require("discord.js");
const Commando = require("discord.js-commando");

module.exports = class SpamTextEveryone extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spam",
      group: "raid",
      memberName: "spam",
      description: "Spams a text",
      argsType: "multiple",
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 3,
      },
    });
  }

  async run(message) {
    await message.delete();

    let content = "LOL! Your PP: 8==D";
    let i = 1;
    while (i <= count) {
      message.channel.send(content);
      i += 1;
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spam`);
  }
};
