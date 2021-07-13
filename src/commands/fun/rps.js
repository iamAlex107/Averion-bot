const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "rps",
    usage: "`a!rps <choice>`",
    description: "RPS stands for Rock Paper Scissors. Play it against the Bot",
    cooldown: 5000,
    run: async(client, message, args)=>{
        if(!args[0]){
            let embed = new Discord.MessageEmbed()
            .setTitle(`Error`)
            .setDescription(`Please provide a choice in the Command in the form of \`a!rps <choice>\`\n**Choice's are:** Rock, Paper and Scissors\n**Examples:**\n\`a!rps Rock\`\n\`a!rps scissors\`\n\`a!rps PAPER\``)
            .setColor(`#fbff00`)
            .setFooter(`Made with 💛 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            return message.channel.send(embed)
        }

        const botChoice = Math.floor(Math.random() * 3);
        const choice = args[0].toLowerCase();


        if (choice == 'rock'){
            if (botChoice === 0){
                let embed = new Discord.MessageEmbed()
                .setTitle(`It's a Tie !`)
                .setDescription(`The Bot chose \`rock\`\nYou chose \`rock\`\nThus it is a **Tie**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else if(botChoice === 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !`)
                .setDescription(`The Bot chose \`paper\`\nYou chose \`rock\`\nThus it is a **Lose**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else {
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !`)
                .setDescription(`The Bot chose \`scissors\`\nYou chose \`rock\`\nThus it is a **Win**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }
        }else if (choice == 'paper'){
            if (botChoice === 0){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !`)
                .setDescription(`The Bot chose \`rock\`\nYou chose \`paper\`\nThus it is a **Win**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else if (botChoice === 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`It's a Tie !`)
                .setDescription(`The Bot chose \`paper\`\nYou chose \`paper\`\nThus it is a **Tie**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else {
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !`)
                .setDescription(`The Bot chose \`scissors\`\nYou chose \`paper\`\nThus it is a **Loss**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }
        }else if (choice == 'scissors' || choice == 'scissor'){
            if (botChoice === 0){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !`)
                .setDescription(`The Bot chose \`rock\`\nYou chose \`scissors\`\nThus it is a **Loss**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else if(botChoice === 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !`)
                .setDescription(`The Bot chose \`paper\`\nYou chose \`scissors\`\nThus it is a **Win**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }else {
                let embed = new Discord.MessageEmbed()
                .setTitle(`It's a Tie !`)
                .setDescription(`The Bot chose \`scissors\`\nYou chose \`scissors\`\nThus it is a **Tie**`)
                .setColor(`#fbff00`)
                .setFooter(`Thanks for playing ${message.author.tag}`, message.author.displayAvatarURL({ dynamic: true }))

                message.channel.send(embed)
            }
        }else {
            return message.channel.send(`<a:crossGif:853559074833301504> I couldn't convert \`${choice}\` into a Choice !`)
        }
        
    }
}