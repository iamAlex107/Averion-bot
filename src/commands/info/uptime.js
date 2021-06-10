const Discord = require('discord.js')
const client = new Discord.Client()
const pms = require('pretty-ms')

module.exports = {
    name: "uptime",
    aliases: ['online'],
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Uptime`)
        .setDescription(`Bot is online from\n**${pms(client.uptime)}**`)
        .setColor(`YELLOW`)
        .setFooter(`Made with 💛 by iamAlex#9999`)
        message.channel.send(embed)
    }
}