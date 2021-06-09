const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "info",
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle('Info :')
        .addField(`Developer:`, `<a:Ez_Arrow:851020973690978324> **Name:** Alex\n<a:Ez_Arrow:851020973690978324> **Discord Tag:** iamAlex#9999\n<a:Ez_Arrow:851020973690978324> **Description:** Rookie Bot Developer, Gamer and Coder\n<a:Ez_Arrow:851020973690978324> **Birthday:** 6th February 2006`)
        .addField(`Bot Info:`, `<a:Ez_Arrow:851020973690978324> **Language used:** JavaScript (JS)\n<a:Ez_Arrow:851020973690978324> **Ping:** ${client.ws.ping} ms\n<a:Ez_Arrow:851020973690978324> **Invite Link:** [invite link](https://discord.com/api/oauth2/authorize?client_id=851725121164541972&permissions=4227329783&scope=bot)\n<a:Ez_Arrow:851020973690978324> **Prefix:** a!`)
        .setColor(`#f54a00`)
        .setFooter(`Made with 💚 by iamAlex#9999`)
        .setTimestamp()
        message.channel.send(embed)
    }
}