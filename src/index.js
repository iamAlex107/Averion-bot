const { Collection, Client, Discord } = require('discord.js');
const client = new Client({
    disableMention: 'everyone'
});
const path = require('path')
const fs = require('fs')
const config = require('./config.json');
module.exports = client;
client.commands = new Collection();
client.prefix = config.prefix;
client.aliases = new Collection();
client.categories = fs.readdirSync(path.resolve('src/commands'));
["command"].forEach(handler => {
    require(path.resolve(`src/handlers/${handler}`))(client);
});
const mongoose = require('mongoose')
mongoose.connect(config.MongoURI, {
 useNewUrlParser: true,
 useUnifiedTopology: true,
 useFindAndModify: false,
}).then(() => {
  console.log('Averion has logged in to MongoDB')
}).catch(err => {
  console.log('MongooseError: ' +  err)
})

client.login(config.token);
