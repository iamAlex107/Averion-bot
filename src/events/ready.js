const client = require('../../src/index');

client.on('ready', () => {
    console.log(`${client.user.tag} is now online!`);
    client.user.setPresence({ activity: { name: 'a!help | Made by iamAlex#1306', type: "PLAYING" }, status: 'idle' })
})