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
        .setDescription(`**Page 1:** Index\n**Page 2:** Info\n**Page 3:** Fun`)
        .setColor(`#f5f500`)
        .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed1 = new Discord.MessageEmbed()
        .setTitle(`Info :`)
        .setDescription(`<a:Ez_Arrow:851020973690978324> **ping** --> Shows the Bot ping\n<a:Ez_Arrow:851020973690978324> **info** --> Shows bot and developer information\n<a:Ez_Arrow:851020973690978324> **prefix** --> Shows the bot prefix\n<a:Ez_Arrow:851020973690978324> **uptime** --> Shows the uptime of the bot (alias: **online**)\n<a:Ez_Arrow:851020973690978324> **help** --> Shows the help page`)
        .setColor(`#f59b00`)
        .setFooter(`Made with 💚 by iamAlex#9999`,message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let embed2 = new Discord.MessageEmbed()
        .setTitle(`Fun`)
        .setDescription(`<a:Ez_Arrow:851020973690978324> **rps** --> **rps** stands for Rock Paper Scissor\n<a:Ez_Arrow:851020973690978324> **8ball** --> Predict whatever you wish`)
        .setColor(`#f57200`)
        .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        let pages = [embed, embed1, embed2]
        ReactionPages(message, pages, false)
    }
}