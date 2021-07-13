const Discord = require('discord.js');
const dig = require('discord-image-generation');
const client = new Discord.Client();

module.exports = {
    name: "triggered",
    aliases: ["trigger"],
    description: "Turn the targeted User or your own Avatar into a Triggered Image !",
    usage: "`a!triggered`, `a!triggered <@user>`, `a!trigger`",
    run: async(client, message, args) => {
        if (!args[0]){
            let av = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Triggered().getImage(av);
            let attach = new Discord.MessageAttachment(img, "triggered.gif");
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
            let img = await new dig.Triggered().getImage(av);
            let attach = new Discord.MessageAttachment(img, "triggered.gif")
            message.channel.send(attach)
        }else {
            target = message.mentions.users.first();
            let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Triggered().getImage(av);
            let attach = new Discord.MessageAttachment(img, "triggered.gif")
            message.channel.send(attach)
        }
    }
}