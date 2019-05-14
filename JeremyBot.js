const Discord = require("discord.js");
const client = new Discord.Client();

const Kitsu = require("kitsu");
const kitsuAPI = new Kitsu();

const Commands = require("./Commands");

var token = process.env.TOKEN;

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on("message", async msg => {
    var line = msg.content.match(/\S+/g) || []
    command = String(line[0]).toUpperCase();
    switch(command) {
        case "COOKIE":  msg.channel.send(Commands.cookie(msg));
                        break;

        case "YAR":     msg.channel.send(Commands.yar(msg));
                        break;

        case "!PING":   msg.reply(Commands.ping(msg));
                        break;

        case "!SAY":    msg.channel.send(Commands.say(msg));
                        break;

        case "!MOCK":   msg.channel.send(Commands.mock(msg));
                        msg.delete(5000);
                        break;

        case "!ROLL":   msg.channel.send(Commands.roll(msg));
                        break;

        case "!PROTECT":msg.channel.sendFile(Commands.protect(msg));
                        break;

        case "BOI":     msg.channel.sendFile(Commands.boi(msg));
                        break;
        
        case "!AHSHIT": let buffer = await Commands.ahshit(msg);
                        msg.channel.sendFile(buffer);
                        break;

        case "!HELP":   break;

        case "!QUIT":   client.user.setPresence({status: 'offline'});
                        Commands.shutdown(msg);
    }
});

client.login(token);