const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "info",
    description: "Shows information about the bot as well as its developer",
    usage: "`a!info`",
    cooldown: 5000,
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle('Info :')


        .addField(`Developer:`, `<a:Arrow:851020973690978324> **Name:** Alex\n<a:Arrow:851020973690978324> **Discord Tag:** iamAlex#1306\n<a:Arrow:851020973690978324> **Description:** Rookie Bot Developer, Gamer and Coder\n<a:Arrow:851020973690978324> **Birthday:** 6th February 2006`)

        .addField(`Bot Info:`, `<a:Arrow:851020973690978324> **Language used:** JavaScript (JS)\n<a:Arrow:851020973690978324> **Ping:** ${client.ws.ping} ms\n<a:Arrow:851020973690978324> **Version:** 2.1.0 \n<a:Arrow:851020973690978324> **Invite Link:** [Invite link](https://discord.com/api/oauth2/authorize?client_id=851725121164541972&permissions=4227329783&scope=bot)\n<a:Arrow:851020973690978324> **GitHub:** [GitHub](https://github.com/iamAlex107/Averion-bot/tree/main)\n<a:Arrow:851020973690978324> **Prefix:** a!`)
        .setColor(`#f54a00`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()


        message.channel.send(embed)
    }
}