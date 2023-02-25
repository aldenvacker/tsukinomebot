const Commando = require("discord.js-commando");
const Discord = require("discord.js");
const score = require("./score.js");

module.exports = class GCommand extends Commando.Command {
    constructor(client) {
      super(client, {
        name: "g",
        group: "quidditch",
        memberName: "g",
        description: "Keep Gardien",
        examples: ["g"],
        guildOnly: true,
      });
    }
  
    async run(message) {
      message.delete();
      let result = Math.floor(Math.random() * 10) + 1
      if (result === 1) {
          message.channel.send("\nIl se jette sur le côté... Et il l'arrête !");
        }
      else {
      message.channel.send("\nEt ça fait but pour l'équipe adverse !");
      if (message.member.roles.cache.some((role) => role.name === "Team1")) {
        score.addScore2(10)
        console.log("Et voici " + score.getScore2(), "pour la Team2")
      }
      else if (message.member.roles.cache.some((role) => role.name === "Team2")) {
        score.addScore1(10)
        console.log("Et voici " + score.getScore1(), "pour la Team1")
      }
  
      const moment = require("moment");
      const time = moment().format("HH:mm:ss a");
      console.log(`${time} | Command Ran: g`);
    }
  };
}