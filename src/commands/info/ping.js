const { MessageEmbed } = require('discord.js')
module.exports = {
    name : 'ping',
    category : 'info',
    description : 'Returns latency and API ping',

    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */

    run : async(client, message, args) => {
        const msg = await message.channel.send(`🏓 Pinging...`)
        const embed = new MessageEmbed()
            .setTitle('Pong!')
            .setColor('#32CD32')
            .setDescription(`**Bot Latency** is:\n ${Math.floor(msg.createdTimestamp - message.createdTimestamp)} ms\n**API ping** is:\n ${client.ws.ping} ms`)
            .setFooter(`Made with 💙 by iamAlex#9999`)
            .setTimestamp()
            await message.channel.send(embed)
            msg.delete()

    }
}