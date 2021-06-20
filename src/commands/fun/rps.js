const Discord = require('discord.js')
const client = new Discord.Client()

module.exports = {
    name: "rps",
    run: async(client, message)=>{
        const botChoice = Math.floor(Math.random() * 3);
        if(botChoice == 0){
            if(message.content === 'a!rps rock'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`This is a tie !!`)
                .setDescription(`The bot chose **Rock**\nYou also chose **Rock**\nThus it is a **Tie** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps paper'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !!`)
                .setDescription(`The bot chose **Rock**\nYou chose **Paper**\nThus you **Win** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps scissors'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !!`)
                .setDescription(`The bot chose **Rock**\nYou chose **Scissors**\nThus you **Lose** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else{
                let embed = new Discord.MessageEmbed()
                .setTitle(`Define your option`)
                .setDescription(`Provide whether you choose **Rock** or **Paper** or **Scissors** in the form a!rps <choice>`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }
        }else if(botChoice === 1){
            if(message.content === 'a!rps rock'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !!`)
                .setDescription(`The bot chose **Paper**\nYou chose **Rock**\nThus you **Lose** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps paper'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`This is a tie !!`)
                .setDescription(`The bot chose **Paper**\nYou also chose **Paper**\nThus it is **Tie** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps scissors'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !!`)
                .setDescription(`The bot chose **Paper**\nYou chose **Scissors**\nThus you **Win** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else{
                let embed = new Discord.MessageEmbed()
                .setTitle(`Define your option`)
                .setDescription(`Provide whether you choose **Rock** or **Paper** or **Scissors** in the form a!rps <choice>`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }
        }else{
            if(message.content === 'a!rps rock'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Win !!`)
                .setDescription(`The bot chose **Scissors**\nYou chose **Rock**\nThus you **Win** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps paper'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`You Lose !!`)
                .setDescription(`The bot chose **Scissors**\nYou chose **Paper**\nThus you **Lose** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else if(message.content === 'a!rps scissors'){
                let embed = new Discord.MessageEmbed()
                .setTitle(`This is tie !!`)
                .setDescription(`The bot chose **Scissors**\nYou also chose **Scissors**\nThus it is **Tie** !`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }else{
                let embed = new Discord.MessageEmbed()
                .setTitle(`Define your option`)
                .setDescription(`Provide whether you choose **Rock** or **Paper** or **Scissors** in the form a!rps <choice>`)
                .setColor(`#e04c4c`)
                .setFooter(`Made with 💖 by iamAlex#1306`)
                .setTimestamp()
                message.channel.send(embed)
            }
        }
    }
}