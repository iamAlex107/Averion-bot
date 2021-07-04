const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "kick",
    description: "Kicks the targeted user",
    usage: "kick <@user> <reason>",
    run: async(client, message, args)=>{
        const target = message.mentions.members.first();
        var reason = args.slice(1).join(" ");

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the required permissions: Kick Member !**`);
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **I do not have permission to Ban !**`);

        if(!args[0]) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`);
        if(!target) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`);

        if(!reason){
            reason = '`None Provided`';
        }

        if(target.id === message.author.id) return message.channel.send("<a:crossGif:853559074833301504> **You cannot kick yourself !**");
        if(target.roles.highest.position >= message.member.roles.highest.position) {
            return message.channel.send(`<a:crossGif:853559074833301504> **You cannot kick this user !**`)
        };

        if(target.bannable){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Member was successfully Kicked`)
            .setColor(`#ff1100`)
            .setDescription(`<a:Arrow:851020973690978324> **Target:** ${target}\n<a:Arrow:851020973690978324> **Reason:** ${reason}\n<a:Arrow:851020973690978324> **Moderator:** ${message.author.tag}`)
            .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(embed);
            target.kick();
            message.delete();
        }else {
            return message.channel.send(`<a:crossGif:853559074833301504> **I was unable to kick the user !**`)
        }
        return undefined;

    }
}