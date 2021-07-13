const Discord = require('discord.js');

module.exports = {
    name: "enlarge",
    description: "Enlarge your Favorite Emoji",
    usage: "`a!enlarge <emoji>`",
    cooldown: 5000,
    run: async(client, message, args) => {
        let emoji = args[0];
        
        if(!emoji) return message.channel.send(`<a:crossGif:853559074833301504> **Please provide a Emoji to be Enlarged !**`)

        let custom = Discord.Util.parseEmoji(emoji);

        if(!custom.id) return message.channel.send(`<a:crossGif:853559074833301504> **That is not a Emoji, Dude !!**`)

        
        let embed = new Discord.MessageEmbed()
        .setTitle(`Emoji Enlarged !!`)
        .setImage(`https://cdn.discordapp.com/emojis/${custom.id}.${custom.animated ? "gif" : "png"}`)
        .setColor(`#ffdd00`)
        .setFooter(`UwU`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        message.channel.send(embed);

    }
}