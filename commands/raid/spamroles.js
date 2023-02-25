const Commando = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class SpamRoles extends Commando.Command {
  constructor(client) {
    super(client, {
      name: "spamroles",
      description: "Spams a lot of roles",
      memberName: "spamroles",
      group: "raid",
      guildOnly: true,
      argsType: "multiple",
      clientPermissions: ["MANAGE_ROLES"],
      throttling: {
        usages: 1,
        duration: 5,
      },
    });
  }

  async run(message, args) {
    message.delete();

    let count = Math.round(args[0]);

    //Rainbow Colors :wink:
    let colors = [
      "#EE82EE",
      "#4B0082",
      "#0183fa",
      "#01d801",
      "#f7e501",
      "#fe8801",
      "#ff0000",
    ];
    let colorCount = 0;
    let msg1;
    await message.channel.send(`Creating ${count} role/s...`).then((m) => {
      msg1 = m;
    });

    //Role creation loop
    for (let i = 1; i <= count; i++) {
      setTimeout(() => {
        message.guild.roles
          .create({
            data: {
              name: "💣SERVER NUKER💣",
              color: colors[colorCount],
            },
          })
          .catch(console.error);
        colorCount++;
        if (colorCount === 7) {
          colorCount = 0;
        }
      }, 1000);
    }

    await msg1.edit("Done");
    setTimeout(() => {
      msg1.delete();
    }, 5000);

    const moment = require("moment");
    const time = moment().format("HH:mm:ss a");
    console.log(`${time} | Command Ran: spamroles`);
  }
};
