const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "prefix",
    description: "Shows the bot prefix",
    usage: "`a!prefix`",
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Bot Prefix:`)
        .setDescription(`⇒ My prefix **a!**.\n⇒ Custom prefix are currently under-development !!`)
        .setColor(`#ff008c`)
        .setFooter(`Made with 🤍 by iamAlex#1306`)
        .setTimestamp()

        message.channel.send(embed)
    }
}