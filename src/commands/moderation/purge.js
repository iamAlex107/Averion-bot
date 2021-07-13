const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "purge",
    aliases: ["prune"],
    description: "Delete the amount of messages you want in an instant",
    usage: "`a!purge <amount>`",
    cooldown: 10000,
    run: async(client, message, args)=>{
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the required permissions: Manage Messages !**`);
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **I do not have permission to Purge Messages !**`);

        const amount = parseInt(args[0]) + 1;

        if(isNaN(amount)){
            return message.channel.send(`<a:crossGif:853559074833301504> **That isn't a valid Number**`)
        }else if(amount <= 1 || amount > 100){
            return message.channel.send(`<a:crossGif:853559074833301504> **The amount needs to be below 100**`)
        }

        message.channel.bulkDelete(amount, true).then(deletedMessages =>{
            var botMessages = deletedMessages.filter(m => m.author.bot);
            var userPins = deletedMessages.filter(m => m.pinned);

            let embed = new Discord.MessageEmbed()
            .setTitle(`Messages Purged Successfully`)
            .setColor(`#8cff00`)
            .setDescription(`<a:Arrow:851020973690978324> **Total Messages Purged:** ${deletedMessages.size - 1}\n<a:Arrow:851020973690978324> **Bot Messages Purged:** ${botMessages.size} \n<a:Arrow:851020973690978324> **User Pins Purged:** ${userPins.size}`)
            .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(embed).then(msg => {
                msg.delete({ timeout: 10000 })
            })
        }).catch(err => {
            message.channel.send(`**There was an error trying to Purge the Messages**`)
        })

    }
}