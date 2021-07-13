const Discord = require('discord.js');
const dig = require('discord-image-generation');
const client = new Discord.Client();

module.exports = {
    name: "slap",
    description: "Slap the targeted User LMAO !!",
    usage: "`a!slap`, `a!slap <@user>`, `a!slap <userID>`",
    run: async(client, message, args) => {
        if (!args[0]){
            let av1 = client.user.displayAvatarURL({ dynamic: false, format: 'png' })
            let av2 = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Batslap().getImage(av1, av2);
            let attach = new Discord.MessageAttachment(img, "batslap.png");
            return message.channel.send(attach)
        }
        
        let userinfoget =
			message.mentions.members.first() ||
			await message.guild.members.fetch(args[0]) ||
			message.guild.member(message.author);


        let target = args[0];
        if (!isNaN(target)){
            target = message.guild.members.cache.get(args[0]);
            let av1 = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let av2 = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Batslap().getImage(av1, av2);
            let attach = new Discord.MessageAttachment(img, "batslap.png")
            message.channel.send(attach)
        }else {
            target = message.mentions.users.first();
            let av1 = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let av2 = target.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Batslap().getImage(av1, av2);
            let attach = new Discord.MessageAttachment(img, "batslap.png")
            message.channel.send(attach)
        }
    }
}