const request = require('node-superfetch');
const Color = "RANDOM";
const Discord = require("discord.js");
const roasts = require('../../JSON/roast.json');

module.exports = {
  name: "cuddle",
  category: "<a:DanceAmongStick:852842898881642496> Fun",
  description: "cuddlegif",
  usage: "cuddle <user> ",
  run: async (client, message, args) => {
    let roast = roasts.roast[Math.floor((Math.random() * roasts.roast.length))];

   
   const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.member;
    const Embed = new Discord.MessageEmbed()
    .setColor(Color)
    .setTitle(`${message.author.username} cuddle ${Member.user.username}`)
    .setImage(encodeURI
    (`https://purrbot.site/img/sfw/cuddle/gif/cuddle_${roast}.gif`))
    .setTimestamp();

    return message.channel.send(Embed);
  }
};