const { MessageEmbed, DiscordAPIError } = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: ['av'],
	run: async(client, message, args)=>{

		let userinfoget =
			message.mentions.members.first() ||
			await message.guild.members.fetch(args[0]) ||
			message.guild.member(message.author);

		let msg = await message.channel.send('**Generating avatar** 🍕...');

        let target = args[0];

		try {
			let targetCheck = parseInt(target);
			if(!isNaN(targetCheck)){
				let targetID = message.guild.members.cache.get(`${target}`);
				let avatarURL = targetID.user.displayAvatarURL({
					size: 4096,
					dynamic: true
				});
				const embed = new MessageEmbed()
				.setTitle(`**Avatar of ${targetID.user.tag} **`)
				.setImage(avatarURL)
				.setColor(`#00FFFF`)
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
				.setTimestamp();

				message.channel.send(embed);
				msg.delete();
			}else {
				let targetMention = message.mentions.users.first();
				let avatarURL = targetMention.displayAvatarURL({
					size: 4096,
					dynamic: true
				});
				const embed = new MessageEmbed()
				.setTitle(`**Avatar of ${targetMention.tag} **`)
				.setImage(avatarURL)
				.setColor(`#00FFFF`)
				.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
				.setTimestamp();

				message.channel.send(embed);
				msg.delete();
			}
		} catch (err) {
			let avatarURL = message.author.displayAvatarURL({
				size: 4096,
				dynamic: true
			});
			const embed = new MessageEmbed()
			.setTitle(`**Avatar of ${message.author.tag} **`)
			.setImage(avatarURL)
			.setColor(`#00FFFF`)
			.setFooter(`Requested by ${message.author.tag}`, message.author.displayAvatarURL({dynamic: true}))
			.setTimestamp();

			message.channel.send(embed);
			console.log(err)
			msg.delete();
		}



	}
}
