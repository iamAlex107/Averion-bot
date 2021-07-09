const Discord = require('discord.js')
const client = new Discord.Client()
const pms = require('pretty-ms')

module.exports = {
    name: "uptime",
    aliases: ['online'],
    description: "Shows for how long the bot has been online",
    usage: "`a!uptime`, `a!online`",
    cooldown: 1000,
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Uptime`)
        .setDescription(`<a:Arrow:851020973690978324> Bot is online from\n**${pms(client.uptime)}**`)
        .setColor(`YELLOW`)
        .setFooter(`Made with 💛 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
    }
}