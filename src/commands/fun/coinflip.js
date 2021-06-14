const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "coinflip",
    aliases: [ 'cf' ],
    run: async(client, message)=>{

        const randomNumber = Math.floor(Math.random() * 2);

        if(randomNumber == 0){
            if(message.content == 'a!conflip head' || 'a!cf head' || 'a!conflip heads' || 'a!cf heads'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You lost !`)
                .setDescription(`The coin flipped on tails side !`)
                .setColor(`#32CD32`)
                .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)
            }else if(message.content == 'a!coinflip tail' || 'a!coinflip tails' || 'a!cf tail' || 'a!cf tails'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You won !`)
                .setDescription(`The coin flipped on tails side`)
                .setColor(`#32CD32`)
                .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)
            }
        }else if(randomNumber == 1){
            if(message.content == 'a!conflip head' || 'a!cf head' || 'a!conflip heads' || 'a!cf heads'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You won !`)
                .setDescription(`The coin flipped on heads side !`)
                .setColor(`#32CD32`)
                .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)
            }else if(message.content == 'a!coinflip tail' || 'a!coinflip tails' || 'a!cf tail' || 'a!cf tails'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You lost !`)
                .setDescription(`The coin flipped on heads side`)
                .setColor(`#32CD32`)
                .setFooter(`Made with 💚 by iamAlex#9999`, message.author.displayAvatarURL({dynamic: true}))
                message.channel.send(embed)
            }
        }
    }
}