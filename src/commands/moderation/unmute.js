const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "unmute",
    usage: "`a!unmute <@user> <reason>`",
    description: "Unmute the targeted User",
    run: async(client, message, args) => {
        const target = message.mentions.members.first()

        var reason = args.slice(1).join(" ");
        
        const muterole = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted');

        if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the following permissions: Manage Roles`)

        if(!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send(`<a:crossGif:853559074833301504> **I do not have permission to Unmute !**`)
        
        if(!muterole) return message.channel.send(`<a:crossGif:853559074833301504> **This server does not have a __Muted__ Role. Please Create one !**`)

        if(!args[0]) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`)
        if(!target) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`)

        if(!reason){
            reason = '`None Provided`';
        }

        if(!target.roles.cache.some(role => role.name.toLowerCase() === 'muted')) return message.channel.send(`<a:crossGif:853559074833301504> **This User is not Muted !**`)

        if(target.id === message.author.id) return message.channel.send(`<a:crossGif:853559074833301504> **You cannot Unmute yourself !**`)


        try{
            await target.roles.remove(muterole);
            let embed = new Discord.MessageEmbed()
            .setTitle(`Member was successfully Unmuted`)
            .setColor(`#ff1100`)
            .setDescription(`<a:Arrow:851020973690978324> **Target:** ${target}\n<a:Arrow:851020973690978324> **Reason:** ${reason}\n<a:Arrow:851020973690978324> **Moderator:** ${message.author.tag}`)
            .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(embed)
        }catch(err) {
            return message.channel.send(`<a:crossGif:853559074833301504> **I was unable to unmute the user, please check my permissions or keep my role above the MUTED role !**`);
        }

    }
}