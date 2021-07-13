const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "link",
    aliases: ['links', 'invite'],
    description: "All links such as Invite Link, GitHub Link are stored here !",
    usage: "`a!link`, `a!links`, `a!invite`",
    cooldown: 1000,
    run: async(client, message) => {
        let embed = new Discord.MessageEmbed()
        .setAuthor(`Links`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`<a:Arrow:851020973690978324> **Invite Link:** [Invite link](https://discord.com/api/oauth2/authorize?client_id=851725121164541972&permissions=4227329783&scope=bot)\n<a:Arrow:851020973690978324> **GitHub:** [GitHub](https://github.com/iamAlex107/Averion-bot/tree/main)\n<a:Arrow:851020973690978324> **GitHub Dev:** [GitHub Dev](https://github.com/iamAlex107/)`)
        .setColor('#00c936')
        .setFooter(`Averion is made with 💚`,)
        .setTimestamp()

        message.channel.send(embed)
    }
}