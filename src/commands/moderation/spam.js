const Discord = require('discord.js');
const client = new Discord.Client({
    disableMentions: 'everyone'
});

module.exports = {
    name: "spam",
    description: "Spams the given Message",
    usage: "`a!spam <message>`",
    cooldown: 30000,
    run: async(client, message, args) => {
        if (message.author.id === `720990078981111888` || message.author.id === `777236834064531467`){
            let msg = message.content.slice(message.content.indexOf(args[0]), message.content.length);

            message.channel.send(msg);
            message.channel.send(msg);
            message.channel.send(msg);
            message.channel.send(msg);
            message.channel.send(msg);
            message.delete();
        }else {
            message.channel.send(`<a:crossGif:853559074833301504> **Sorry This command is not Available for you !**`)
        }
    }
}