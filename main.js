const Discord = require('discord.js');
const client = new Discord.Client();

// const Kitsu = require("kitsu");
// const kitsuAPI = new Kitsu();

var glob = require('glob');
var path = require('path');
var functions = {};
glob.sync('./src/functions/*.js').forEach(function (file) {
    let object = require(path.resolve(file));
    functions = {
        ...functions,
        ...object,
    };
});

require('dotenv').config();
var token = process.env.TOKEN;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async msg => {
    let line = msg.content.match(/\S+/g) || [];
    let command = String(line[0]).toUpperCase();
    switch (command) {
        case "!HELP":
            msg.channel.send(functions.help(msg));
            break;

        case "!STOP":
            msg.channel.send("Shutting Down...").then(m => {
                functions.shutdown(msg)
                client.user.setStatus('offline');
                client.destroy();
                process.exit();
            })
            break;

        case "COOKIE":
            msg.channel.send(functions.cookie(msg));
            break;

        case "YAR":
            msg.channel.send(functions.yar(msg));
            break;

        case "!PING":
            msg.reply(functions.ping(msg));
            break;

        case "!SAY":
            msg.channel.send(functions.say(msg));
            break;

        case "!MOCK":
            msg.channel.sendFile(await functions.mock(msg));
            break;

        case "!ROLL":
            msg.channel.send(functions.roll(msg));
            break;

        case "!PROTECT":
            msg.channel.sendFile(await functions.protect(msg));
            break;

        case "BOI":
            msg.channel.sendFile(functions.boi(msg));
            break;

        case "!AHSHIT":
            msg.channel.sendFile(await functions.ahshit(msg));
            break;

        case "!WANT":
            msg.channel.sendFile(await functions.wantOneThing(msg));
            break;

        case "!DISTRACTED":
            msg.channel.sendFile(await functions.distracted(msg));
            break;

        case "!DOUBT":
            msg.channel.sendFile(await functions.doubt(msg));
            break;

        case "!TEAM":
            msg.channel.send(functions.team(msg, client));
            break;

        case "BULLSHIT":
            msg.channel.sendFile(functions.bullshit(msg));
        
        case "!WHOAMI":
            msg.channel.send(functions.whoami(msg, client));

        case "!WHERE":
            msg.channel.sendFile(functions.whereIsEveryone(msg));
    }
});

client.login(token);