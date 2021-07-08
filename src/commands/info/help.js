const Discord = require('discord.js');
const { user } = require('../..');
const client = new Discord.Client();
const { ReactionPages } = require('reconlx')

module.exports = {
    name: "help",
    aliases: 'Help',
    run: async(client, message)=>{
        let embed = new Discord.MessageEmbed()
        .setTitle(`Hey ${message.author.username}! Here are the commands :`)
        .setDescription(`**Page 1:** Index\n**Page 2:** Info\n**Page 3:** Fun\n**Page 4:** Moderation\n**Page 5:** Commands in Development`)
        .setColor(`#f5f500`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed1 = new Discord.MessageEmbed()
        .setTitle(`Info :`)
        .setDescription(`<a:Arrow:851020973690978324> **ping** --> Shows the Bot ping\n<a:Arrow:851020973690978324> **info** --> Shows bot and developer information\n<a:Arrow:851020973690978324> **prefix** --> Shows the bot prefix\n<a:Arrow:851020973690978324> **uptime** --> Shows the uptime of the bot (alias: **online**)\n<a:Arrow:851020973690978324> **serverinfo** --> Shows Guild information (alias: **si**, **guildinfo**)\n<a:Arrow:851020973690978324> **avatar** --> Shows the avatar of the user (alias: **av**)\n<a:Arrow:851020973690978324> **enlarge** --> Enlarges your favorite Emoji\n<a:Arrow:851020973690978324> **help** --> Shows the help page`)
        .setColor(`#f59b00`)
        .setFooter(`Made with 💚 by iamAlex#1306`,message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed2 = new Discord.MessageEmbed()
        .setTitle(`Fun`)
        .setDescription(`<a:Arrow:851020973690978324> **rps** --> **rps** stands for Rock Paper Scissor\n<a:Arrow:851020973690978324> **8ball** --> Predict whatever you wish\n<a:Arrow:851020973690978324> **coinflip** --> Flip a coin to find your luck (alias: **cf**) !!\n<a:Arrow:851020973690978324> **calculator** --> Yes, it is a calcutor!! (alias: **calc**, **math**)`)
        .setColor(`#f57200`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed3 = new Discord.MessageEmbed()
        .setTitle(`Moderation`)
        .setDescription(`<a:Arrow:851020973690978324> **ban** --> Ban's the targeted User !\n<a:Arrow:851020973690978324> **kick** --> Kick's the targeted User !\n<a:Arrow:851020973690978324> **mute** --> Mute's the targeted User !\n<a:Arrow:851020973690978324> **unmute** --> Unmute's the targeted User !\n<a:Arrow:851020973690978324> **say** --> Send's the provided message! (alias: **msg**)\n<a:Arrow:851020973690978324> **purge** --> Delete the amount of messages you want (alias: **prune**)`)
        .setColor(`#f54a00`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed4 = new Discord.MessageEmbed()
        .setTitle(`In Development`)
        .setDescription(`<a:Arrow:851020973690978324> **spam** --> Spam's the provided message 5 times (Usable by only **iamAlex#1306**)`)
        .setColor(`#f52900`)
        .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let pages = [embed, embed1, embed2, embed3, embed4]
        ReactionPages(message, pages, false)
    }
}