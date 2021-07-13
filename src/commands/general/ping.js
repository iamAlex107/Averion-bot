const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name : 'ping',
    description : 'Returns latency and API ping of the Bot',
    usage: "`a!ping`",
    cooldown: 1000,

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new Discord.MessageEmbed()
        .setTitle('Pong!')
        .setColor('#32CD32')
        .setDescription(`**Bot Latency** is:\n ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\n**API ping** is:\n ${client.ws.ping} ms`)
        .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        await message.channel.send(embed)
        msg.delete()

    }
}