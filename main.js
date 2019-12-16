const Discord = require("discord.js");
const client = new Discord.Client();

// const Kitsu = require("kitsu");
// const kitsuAPI = new Kitsu();

const Commands = require("./commands");

require('dotenv').config();

var token = process.env.TOKEN;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async msg => {
    var line = msg.content.match(/\S+/g) || []
    command = String(line[0]).toUpperCase();
    switch (command) {
        case "!HELP":
            msg.channel.send(Commands.help(msg));
            break;

        case "!STOP":
            msg.channel.send("Shutting Down...").then(m => {
                Commands.shutdown(msg)
                client.user.setStatus('offline');
                client.destroy();
                process.exit();
            })
            break;

        case "COOKIE":
            msg.channel.send(Commands.cookie(msg));
            break;

        case "YAR":
            msg.channel.send(Commands.yar(msg));
            break;

        case "!PING":
            msg.reply(Commands.ping(msg));
            break;

        case "!SAY":
            msg.channel.send(Commands.say(msg));
            break;

        case "!MOCK":
            msg.channel.sendFile(await Commands.mock(msg));
            break;

        case "!ROLL":
            msg.channel.send(Commands.roll(msg));
            break;

        case "!PROTECT":
            msg.channel.sendFile(await Commands.protect(msg));
            break;

        case "BOI":
            msg.channel.sendFile(await Commands.boi(msg));
            break;

        case "!AHSHIT":
            msg.channel.sendFile(await Commands.ahshit(msg));
            break;

        case "!WANT":
            msg.channel.sendFile(await Commands.wantOneThing(msg));
            break;

        case "!DISTRACTED":
            msg.channel.sendFile(await Commands.distracted(msg));
            break;

        case "!DOUBT":
            msg.channel.sendFile(await Commands.doubt(msg));
            break;

        case "!TEAM":
            msg.channel.send(Commands.team(msg, client));
            break;
    }
});

client.login(token);