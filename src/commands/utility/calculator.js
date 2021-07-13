const Discord = require('discord.js');
const client = new Discord.Client();
const math = require('math-expression-evaluator');

module.exports = {
    name: "calculator",
    aliases: ["calc", "math"],
    description: "An inbuilt calculator for the Bot",
    usage: "`a!calculator <math_question>`, `a!calc <question>`, `a!math <question>`",
    cooldown: 5000,
    run: async(client, message, args)=>{
        if (args.length < 1) return message.channel.send(`<a:crossGif:853559074833301504> **Please a provide a question to be solved on the Calculator !**`)

        const question = args.join(' ');
        let answer = math.eval(question);
        if (isNaN(question)){
            let a = 0; // Overriding if to let embed directly executed
        }

        
        let embed = new Discord.MessageEmbed()
        .setTitle("Here is your answer")
        .setColor(`#32F32F`)
        .setDescription(`**Question:**\n${question}\n**Answer:**\n${answer}`)
        .setFooter(`Get help with your math LOL`, message.author.displayAvatarURL({dynamic: true}))
        .setTimestamp()

        message.channel.send(embed)
        
    }
}
// let errorEmbed = new Discord.MessageEmbed()
//             .setTitle(`ERROR`)
//             .setDescription(`Invalid Math Equation`)
//             .setColor(`#32F32F`)
//             .setFooter(`😑`, message.author.displayAvatarURL({dynamic: true}))
//             .setTimestamp()

//             message.channel.send(errorEmbed)