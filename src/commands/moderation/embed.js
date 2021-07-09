const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "embed",
    description: "Create your own embed message",
    usage: "`a!embed <color> <message>`",
    cooldown: 10000,
    run: async(client, message, args) => {
        const color = args[0];
        const msg = args.slice(1).join(" ");

        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the required permissions: Manage Messages !**`);
        if(!message.guild.me.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:crossGif:853559074833301504> **I do not have permission to send Embed, please check if I have Manage Messages Permission!**`);

        if(!color) return message.channel.send(`<a:crossGif:853559074833301504> **Please provide a color in the form of hex, rgb, etc.**`)
        if(!msg) return message.channel.send(`<a:crossGif:853559074833301504> **Please provide a message that is to be embedded !**`)

        try {
            let emd = new Discord.MessageEmbed()
            .setDescription(msg)
            .setColor(color)
            .setFooter(`By ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true}))
            .setTimestamp()

            message.channel.send(emd)
            message.delete()
        }catch (err){
            message.channel.send(`<a:crossGif:853559074833301504> **There was an error with the command. Please provide valid arguments.**`)
        }

    }
}