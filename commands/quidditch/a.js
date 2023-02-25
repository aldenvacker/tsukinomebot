const Discord = require("discord.js");
const Commando = require("discord.js-commando");
const score = require("./score.js");

module.exports = class ACommand extends Commando.Command {
constructor(client) {
super(client, {
name: "a",
group: "quidditch",
memberName: "a",
description: "Catch Attrapeur",
examples: ["a"],
guildOnly: true,
});
}

async run(message) {
message.delete();
let result = Math.floor(Math.random() * 20) + 1;
if (result === 1) {
message.channel.send("\nLa main à quelques centimètres... ET C'EST FINI ! IL MET FIN AU MATCH !");

if (message.member.roles.cache.some((role) => role.name === "Team1")) {
  score.addScore1(150);
  console.log("Score Team 1 : " + score.getScore1());
} else if (message.member.roles.cache.some((role) => role.name === "Team2")) {
  score.addScore2(150);
  console.log("Score Team 2 : " + score.getScore2());
}
} else {
message.channel.send("\nToujours aucune trace du vif d'or...");
}

const moment = require("moment");
const time = moment().format("HH:mm:ss a");
console.log(`${time} | Command Ran: a`);
}
};