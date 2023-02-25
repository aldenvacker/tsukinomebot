const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SecretHelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "help",
      group: "misc",
      memberName: "help",
      description: "Sends a list of available command",
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor("Help Command")
      .setFooter("Help")
      .addFields(
        {
          name: "`.help`",
          value: "Montre la liste des commandes disponibles",
        },
        {
          name: "`.p`",
          value: "Commande de poursuiveur",
        },
        {
          name: "`.b`",
          value: "Commande de batteur",
        },
        {
          name: "`.g`",
          value: "Commande de gardien",
        },
        {
          name: "`.a`",
          value: "Commande d'attrapeur",
        }
      );
    message.channel.send(embed);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
