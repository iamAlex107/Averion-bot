const { MessageEmbed } = require('discord.js');

module.exports = {
	name: 'avatar',
	aliases: ['av'],
	run: async(client, message, args)=>{
		if (!args[0]){
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
		}

		let userinfoget =
			message.mentions.members.first() ||
			await message.guild.members.fetch(args[0]) ||
			message.guild.member(message.author);


        let target = args[0];

		let targetCheck = parseInt(target);
		try{
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
				 
			}
		}catch (err){
			message.channel.send(`Please provide a valid user`)
		}
	}
}