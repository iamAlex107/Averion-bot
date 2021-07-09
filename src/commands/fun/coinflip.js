const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "coinflip",
    aliases: ["cf"],
    description: "Flip a coin to find where it will land",
    usage: "`a!coinflip <choice>`, `a!cf <choice>`",
    run: async(client, message)=>{

        const randomNumber = Math.floor(Math.random() * 2);

        if(message.content === 'a!coinflip h' || message.content === 'a!coinflip heads' || message.content === 'a!cf h' || message.content === 'a!cf heads'){
            if(randomNumber == 0){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You lost !`)
                .setDescription(`The coin flipped on tails side !`)
                .setColor(`#32CD32`)
                .setThumbnail('https://cdn.discordapp.com/attachments/850260577892958209/853953830747504670/coins_tails.png')
                .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)

            }else if(randomNumber == 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You won !`)
                .setDescription(`The coin flipped on heads side`)
                .setColor(`#32CD32`)
                .setThumbnail('https://cdn.discordapp.com/attachments/850260577892958209/853953797012979762/coins_heads.png')
                .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)

            }
        }else if(message.content === 'a!coinflip t' || message.content === 'a!coinflip tails' || message.content === 'a!cf t' || message.content === 'a!cf tails'){
            if(randomNumber == 0){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You won !`)
                .setDescription(`The coin flipped on tails side !`)
                .setColor(`#32CD32`)
                .setThumbnail('https://cdn.discordapp.com/attachments/850260577892958209/853953830747504670/coins_tails.png')
                .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)

            }else if(randomNumber == 1){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You lost !`)
                .setDescription(`The coin flipped on heads side !`)
                .setColor(`#32CD32`)
                .setThumbnail('https://cdn.discordapp.com/attachments/850260577892958209/853953797012979762/coins_heads.png')
                .setFooter(`Made with 💚 by iamAlex#1306`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)

            }
        }else {
            message.channel.send(`<a:crossGif:853559074833301504> **Provide whether you choose heads/h or tails/t**. (a!coinflip <choice>)`)
        }
    }
}