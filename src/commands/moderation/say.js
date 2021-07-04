const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "say",
    aliases: ["msg"],
    usage: "say <message>",
    run: async(client, message, args) => {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`**You do not have permissions to use this command**`)
        let msg = message.content.slice(message.content.indexOf(args[0]), message.content.length);

        message.channel.send(msg);
        message.delete();
        }
}