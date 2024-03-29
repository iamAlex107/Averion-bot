const Discord = require('discord.js');
const dig = require('discord-image-generation');
const client = new Discord.Client();

module.exports = {
    name: "wanted",
    description: "Create a Wanted Poster of yours or the Targeted User",
    usage: "`a!wanted`, `a!wanted <@user>`, `a!wanted <userID>`",
    run: async(client, message, args) => {
        if (!args[0]){
            let av = message.author.displayAvatarURL({ dynamic: false, format: 'png' });
            let currency = `$`;
            let img = await new dig.Wanted().getImage(av, currency);
            let attach = new Discord.MessageAttachment(img, "wanted.png");
            return message.channel.send(attach)
        }
        
        let userinfoget =
			message.mentions.members.first() ||
			await message.guild.members.fetch(args[0]) ||
			message.guild.member(message.author);


        let target = args[0];
        if (!isNaN(target)){
            target = message.guild.members.cache.get(args[0]);
            let currency = `$`;
            let av = target.user.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Wanted().getImage(av, currency);
            let attach = new Discord.MessageAttachment(img, "wanted.png")
            message.channel.send(attach)
        }else {
            target = message.mentions.users.first();
            let currency = `$`;
            let av = target.displayAvatarURL({ dynamic: false, format: 'png' });
            let img = await new dig.Wanted().getImage(av, currency);
            let attach = new Discord.MessageAttachment(img, "wanted.png")
            message.channel.send(attach)
        }
    }
}