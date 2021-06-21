const discord = require("discord.js");

module.exports = {
  name: "ban",
  category: "moderation",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **I cannot ban this user !**`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send(`<a:crossGif:853559074833301504> **You don't have the required permissions: Ban Member !**`)
    
    if(target === message.author) return message.channel.send("**You cannot ban yourself !**")

    if(!args[0]) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`)

    if(!reason) return message.channel.send(`<a:crossGif:853559074833301504> **Please Provide a Reason !**`)
    
    if(!target) return message.channel.send(`<a:crossGif:853559074833301504> **Please Mention a User !**`)
    
    if(target.roles.highest.position >= message.member.roles.highest.position) {
      return message.channel.send(`<a:crossGif:853559074833301504> **This user has a role higher than me !**`)
    }
    
    
    if(target.bannable) {
      let embed = new discord.MessageEmbed()
      .setTitle(`Member was successfully banned`)
      .setColor("#00ffff")
      .addField('<a:Arrow:851020973690978324> Target',`${target}`)
      .addField('<a:Arrow:851020973690978324> Reason',`${reason}`)
      .addField('<a:Arrow:851020973690978324> Moderator',`${message.author.tag}`)
      .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      
      message.channel.send(embed)
      
      target.ban()
      
      message.delete()
      
    } else {
      return message.channel.send(`<a:crossGif:853559074833301504> **I was unable to ban the user !**`)
    }
    return undefined
  }
};