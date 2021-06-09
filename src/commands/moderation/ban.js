const Discord = require('discord.js');
const client = new Discord.Client()

module.exports = {
    name: "ban",
    run: async(client, message, args)=>{
        if(message.channel.type === 'dm') return message.channel.send('You cant use this commands in a dm')
        if(message.member.hasPermission('BAN_MEMBERS')) {
          if(message.guild.me.hasPermission('BAN_MEMBERS')) {
       let member = message.mentions.members.first()
       if(!member) return message.channel.send('Please mention someone or give their id to ban')
       let reason = args.slice(1).join(" ")
       if(!reason) reason = 'None Provided'
       let banembed = new Discord.MessageEmbed()
       .setTitle(`<a:CWS_WindowsLoading:850673613321142282> Member was succesfully banned!`)
       .addField('Reason',`${reason}`)
       .addField('Moderator', `${message.author.username}`)
       .addField('Target', `${member}`)
       .setColor('BLUE')
       .setFooter(`Made with 💙 by iamAlex#9999`)
       .setTimestamp()
       message.channel.send(banembed)
       member.ban()
       let embed3 = new Discord.MessageEmbed()
       .setTitle('Guild logs')
       .setDescription(`${member} was banned by ${message.author.username} for ${reason}`)
       message.guild.channels.cache.get('849985748978499605').send(embed3)
     } else {
       message.channel.send('I cant ban members, make sure i have ban members permission')
     }
    }
    }
}