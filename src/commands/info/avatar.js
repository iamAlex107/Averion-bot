const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: ['av'],
	run: async(client, message, args)=>{

		let userinfoget =
			message.mentions.members.first() ||
			message.guild.members.cache.get(args[0]) ||
			message.guild.member(message.author);

		let msg = await message.channel.send('**Generating avatar** 🍕...');

        target = message.mentions.users.first(); || message.guild.members.cache.get(args[0])

        if (!target)
            target = message.author;
        let avatarURL = target.displayAvatarURL({
            size: 4096,
            dynamic: true	
        });

		const embed = new MessageEmbed()
			.setTitle(`**Avatar of ${target.tag} **`)
            .setImage(avatarURL)
			.setColor(`#00FFFF`)
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
			.setTimestamp();

		message.channel.send(embed);

		msg.delete();
	}
}
