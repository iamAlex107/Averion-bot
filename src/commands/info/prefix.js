const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "prefix",
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Bot Prefix:`)
        .setDescription(`⇒ My prefix **a!**.\n⇒ Custom prefix are currently under-development !!`)
        .setColor(`#ff008c`)
        .setFooter(`Made with 🤍 by iamAlex#9999`)
        .setTimestamp()

        message.channel.send(embed)
    }
}