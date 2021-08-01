const Discord = module.require("discord.js");

module.exports = {

	name: "delchannel",
	description: "Delete Channels From your Server",
  category: "<a:TCC_hype:852863775924027392>  Utility",
   aliases: ["dc"],

	run: async(client, message, args) => {
	if (!message.member.hasPermission("MANAGE_CHANNELS")) {
	return message.channel.send("You don't have enough Permissions")
	}
        const fetchedChannel = message.mentions.channels.first();
	if (!fetchedChannel) {
	return message.channel.send("Usage: <prefix> delchannel <channel>")
        }
	fetchedChannel.delete()

	const embed = new Discord.MessageEmbed()
	.setTitle("Channel Updates")
	.setDescription ("<a:cc_gtick:839421891331751956> Sucessfully deleted that channel!")
  
	.setColor("RANDOM");
	
	await message.channel.send(embed);
}
}