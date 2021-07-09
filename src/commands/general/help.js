const Discord = require('discord.js');
const client = new Discord.Client();
const ms = require('ms');

module.exports = {
    name: "help",
    description: "Shows all the commands",
    usage: "`a!help`, `a!help <command_name>`, `a!help --all`",
    run: async(client, message, args) => {
        const { commands } = message.client;

        // Main help framework starts here :
        if (!args[0]) {
            let helpEmbed = new Discord.MessageEmbed()
            .setTitle('Help')
            .setThumbnail('https://cdn.discordapp.com/attachments/862521425931010118/862957892168056862/Help.png')
            .addField(`Interface Info:`, 'These are the commands which are currently in **Averion**. Try using `a!help <command>` to find information about a particular command.\n**Tip:** Use `a!help --all` to get the list of commands in DM sent by Averion.')
            .addField(`📕 General:`, '`help`, `info`, `prefix`, `ping`, `serverinfo`, `uptime`, `avatar`, `enlarge`')
            .addField(`🛠 Moderation`, '`ban`, `kick`, `mute`, `unmute`, `purge`, `say`, `embed`')
            .addField(`🎨 Fun`, '`rps`, `coinflip`, `calculator`, `8ball`')
            .addField(`👑 Owner Only`, '`spam`')
            .setColor(`#006eff`)
            .setFooter(`Made with 💛 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
            .setTimestamp()

            message.channel.send(helpEmbed)
            return;
        }

        // Dm help framework starts here:
        if (args[0] === '--all') {
            message.author.send(`**General:**\n\n**• help** --> Shows the help page\n**• info** --> Shows information on the bot as well as the Dev\n**• prefix** --> Shows the bot prefix\n**• ping** --> Shows Bot Latency and API Ping\n**• serverinfo** --> Shows information about the current Guild (alias: **si**)\n**• uptime** --> Show's for how long the bot has been online (alias: **online**)\n**• avatar** --> Shows the avatar of the particular User (alias: **av**)\n**• enlarge** --> Enlarges your favorite Emoji\n\n**Moderation:**\n\n**• ban** --> Ban's the targeted User\n**• kick** --> Kick's the targeted User\n**• mute** --> Mute's the targeted User\n**• unmute** --> Unmute's the targeted User\n**• purge** --> Delete's the amount of messages you want (alias: **prune**)\n**• say** --> Send a message directly through Averion\n**• embed** --> Send a custom embed directly through the Bot.\n\n**Fun:**\n\n**• rps** --> Play Rock Paper Scissors with the bot\n**• coinflip** --> Flip a coin and find where it lands (alias: **cf**)\n**• calculator** --> An integrated calculator in Averion (alias: **calc**, **math**)\n**• 8ball** --> Predict your question\n\n**Owner Only:**\n\n**• spam** --> Spam's a particular message (can only be used by my Developer)`);
            message.channel.send(`📚 I have sent you a DM with all my Commands <@!${message.author.id}> !`)
            return;
        }

        // Command Helper starts here:
        const name = args[0].toLowerCase();
		const command = commands.get(name) || commands.find(c => c.aliases && c.aliases.includes(name));

		if (!command) {
			return message.reply('that\'s not a valid command!');
		}
		let aliases = command.aliases;
		if (!aliases) {
			output = `None Provided`
		} else {
			output = command.aliases.join(', ');
		}
		let usage = command.usage;
		if (!usage) {
			output1 = ` `
		} else {
			output1 = command.usage;
		}
        let desc = command.description;
        if(!desc) {
            output2 = `None Provided`;
        }  else {
            output2 = command.description;
        }
        let cd = command.cooldown;
        if (!cd) {
            output3 = `No Cooldown`;
        }else {
            vr = parseInt(cd)
            if (!isNaN(vr)){
                output3 = vr/1000 + ' seconds'
            }
        }
        

        let commandEmbed = new Discord.MessageEmbed()
        .setTitle(`Information about ${command.name}`)
        .setDescription(`<a:Arrow:851020973690978324> **Aliases:** \`${output}\`\n<a:Arrow:851020973690978324> **Description:** \`${output2}\`\n<a:Arrow:851020973690978324> **Usage:** ${output1}\n<a:Arrow:851020973690978324> **Cooldown:** \`${output3}\``)
		.setFooter(`Made with 💛 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
		.setColor(`#006eff`)
        .setTimestamp()

        message.channel.send(commandEmbed)

    }
}