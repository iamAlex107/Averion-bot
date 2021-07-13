const Discord = require('discord.js');
const { user } = require(`../..`)
const client = new Discord.Client();


module.exports = {
    name: "8ball",
    desciption: "Predict your questions while using this command",
    usage: "`a!8ball <question>`",
    cooldown: 5000,

    run: async(client, message, args)=>{
        const answer = [
            'It is certain.',
            'It is decidedly so.',
            'Without a doubt.',
            'Yes - definitely.',
            'You may rely on it.',
            'As I see it, yes.',
            'Most likely.',
            'Outlook good.',
            'Signs point to yes.',
            'Better not tell you now.',
            'Reply hazy, try again.',
            'Ask again later.',
            'Cannot predict now.',
            'Concentrate and ask again.',
            `Don't count on it.`,
            'My reply is no.',
            'My sources say no.',
            'Outlook not so good.',
            'Very doubtful.',
            'You are dumb dude !!'
        ]
        
        const question = args.join(' ');

        if(!question){
            message.channel.reply(`**Please provide a valid question !**`)
        }

        let embed = new Discord.MessageEmbed()
        .setTitle(`Asked by ${ message.author.username}`)
        .setDescription(`**Question asked:** ${question}\n**What I think of:** ${answer[Math.floor(Math.random() * answer.length)]}`)
        .setColor(`#00FFFF`)
        .setFooter(`Made with 💙 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()
        message.channel.send(embed);
    }
}