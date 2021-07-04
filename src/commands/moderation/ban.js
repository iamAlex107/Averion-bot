const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "ban",
    description: "Bans the targeted user",
    usage: "ban <@user> <reason>",
    run: async(client, message, args)=>{
        const target = message.mentions.members.first();
        const reason = args.slice(1).join(" ");

        if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the required permissions: Ban Member !**`);
        if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **I do not have permission to Ban !**`);

        if(!args[0]) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`);
        if(!target) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`);

        if(!reason) return message.channel.send(`<a:crossGif:853559074833301504> **Please Provide a Reason !**`);

        if(target.id === message.author.id) return message.channel.send("<a:crossGif:853559074833301504> **You cannot ban yourself !**");
        if(target.roles.highest.position >= message.member.roles.highest.position) {
            return message.channel.send(`<a:crossGif:853559074833301504> **You cannot ban this user !**`)
        };

        if(target.bannable){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Member was successfully Banned`)
            .setColor(`#ff1100`)
            .setDescription(`<a:Arrow:851020973690978324> **Target:** ${target}\n<a:Arrow:851020973690978324> **Reason:** ${reason}\n<a:Arrow:851020973690978324> **Moderator:** ${message.author.tag}`)
            .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(embed);
            target.ban();
            message.delete();
        }else {
            return message.channel.send(`<a:crossGif:853559074833301504> **I was unable to ban the user !**`)
        }
        return undefined;

    }
}