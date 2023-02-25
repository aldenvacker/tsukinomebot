const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SpamOwnerCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spamowner",
      aliases: ["sowner"],
      memberName: "spamowner",
      group: "raid",
      description: "Spam pings the owner",
      argsType: "multiple",
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 3,
      },
    });
  }

  async run(message, args) {
    message.delete();

    let text = `||<@${message.guild.owner.id}>||\nGET RAIDED IDIOT $#%@!!!`;

    while (i <= count) {
      message.channel.send(text);
      i += 1;
    }

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spamowner`);
  }
};
