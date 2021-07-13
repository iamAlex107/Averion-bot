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
        .addField(`General Info:`, `**Averion** is multifunctional Discord Bot created by iamAlex#1306. It is currently under development and consist of a whole range of Commands.\n**Tip:** Use \`a!help\` to get a list of Commands !`)

        .addField(`Bot Info:`, `<a:Arrow:851020973690978324> **Name:** ${client.user.tag} (${client.user.id})\n<a:Arrow:851020973690978324> **Created On:** ${client.user.createdAt}\n<a:Arrow:851020973690978324> **Language used:** [JavaScript](https://www.javascript.com)\n<a:Arrow:851020973690978324> **Prefix:** a!`)

        .addField(`Developer:`, `<a:Arrow:851020973690978324> **Name:** iamAlex#1306 ( <@!720990078981111888> )\n<a:Arrow:851020973690978324> **Description:** Rookie Bot Developer, Gamer and Coder\n<a:Arrow:851020973690978324> **Birthday:** 6th February 2006`)

        .addField(`Stats:`, `<a:Arrow:851020973690978324> **Ping:** \`${client.ws.ping} ms\`\n<a:Arrow:851020973690978324> **Bot Version:** \`2.1.0\`\n<a:Arrow:851020973690978324> **NodeJS Version:** \`v14.17.0\`\n<a:Arrow:851020973690978324> **discord.js Version:** \`v12.5.3\``)

        .addField(`Links:`, `[Invite link](https://discord.com/api/oauth2/authorize?client_id=851725121164541972&permissions=4227329783&scope=bot) • [GitHub](https://github.com/iamAlex107/Averion-bot/tree/main) • [GitHub Dev](https://github.com/iamAlex107/)`)

        .setImage(`https://media.discordapp.net/attachments/862521425931010118/862521493283012628/Bot-Banner.png`)
        .setColor(`#f54a00`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()


        message.channel.send(embed)
    }
}