const Discord = require('discord.js');
const client = new Discord.Client();

module.exports = {
    name: "serverinfo",
    aliases: ["guildinfo", "si"],
    run: async(client, message)=>{
        guild = message.guild;
        const members = message.guild.members.cache;
        const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
        const emojis = message.guild.emojis.cache;

        const msg = await message.channel.send(`🏓 Fetching Data...`);

        const embed = new Discord.MessageEmbed()
        .setTitle(`Server Information !`)
        .addField('**General Info**', [
            `**<a:Arrow:851020973690978324> Name:** ${message.guild.name}`,
            `**<a:Arrow:851020973690978324> ID:** ${message.guild.id}`,
            `**<a:Arrow:851020973690978324> Owner:** <@!${message.guild.ownerID}> (\`${message.guild.ownerID}\`)`,
            `**<a:Arrow:851020973690978324> Voice Region:** ${message.guild.region}`
        ])
        .addField('**Server Statistics**', [
            `**<a:Arrow:851020973690978324> Members:** ${message.guild.memberCount}`,
            `**<a:Arrow:851020973690978324> Channels:** ${message.guild.channels.cache.size}`,
            `**<a:Arrow:851020973690978324> Emojis:** ${emojis.size}`,
            `**<a:Arrow:851020973690978324> Roles:** ${roles.length}`
        ])
        .addField('**Miscellaneous**', [
            `**<a:Arrow:851020973690978324> Boosts:** ${message.guild.premiumTier ? `Level ${message.guild.premiumTier}` : 'Level 0'} with ${message.guild.premiumSubscriptionCount || '0'} boosts`,
            `**<a:Arrow:851020973690978324> Explicit Filter:** ${message.guild.explicitContentFilter}`,
            `**<a:Arrow:851020973690978324> Verification Level:** ${message.guild.verificationLevel}`,
            `**<a:Arrow:851020973690978324> Features Unlocked:** ${message.guild.features || 'Nothing has been unlocked yet'}`
        ])
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setColor(`#00FFFF`)
        .setFooter(`Made with 💛 by iamAlex#1306`, message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp()

        await message.channel.send(embed);
        msg.delete();
    }
}