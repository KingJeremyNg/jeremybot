const Discord = require('discord.js');
const client = new Discord.Client();
client.commands = new Discord.Collection();

// const Kitsu = require("kitsu");
// const kitsuAPI = new Kitsu();

var glob = require('glob');
var path = require('path');
glob.sync('./src/functions/*.js').forEach(function (file) {
    let object = require(path.resolve(file)).default;
    client.commands.set(object.name, object);
});

require('dotenv').config();
var token = process.env.TOKEN;
client.login(token);

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
    client.user.setActivity();
});

client.on("message", async msg => {
    const args = msg.content.split(' ');
    const command = args.shift().toLowerCase();

    if (!client.commands.has(command)) return;

    try {
        client.commands.get(command).execute(msg, args, client);
    }
    catch (error) {
        throw error;
    }
});
