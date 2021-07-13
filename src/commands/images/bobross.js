const Discord = require('discord.js');
const dig = require('discord-image-generation');
const client = new Discord.Client()

module.exports = {
    name: "bobross",
    usage: "`a!bobross`, `a!bobross <@user>`, `a!bobross <userID>`",
    description: "Display a User's Avatar in BobRoss's painting !",
    run: async(client, message, args) => {
        if (!args[0]){
            let av = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Bobross().getImage(av);
            let attach = new Discord.MessageAttachment(img, "bobross.png");
            return message.channel.send(attach)
        }
        
        let userinfoget =
			message.mentions.members.first() ||
			await message.guild.members.fetch(args[0]) ||
			message.guild.member(message.author);


        let target = args[0];
        if (!isNaN(target)){
            target = message.guild.members.cache.get(args[0]);
            let av = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Bobross().getImage(av);
            let attach = new Discord.MessageAttachment(img, "bobross.png")
            message.channel.send(attach)
        }else {
            target = message.mentions.users.first();
            let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Bobross().getImage(av);
            let attach = new Discord.MessageAttachment(img, "bobross.png")
            message.channel.send(attach)
        }
    }
}