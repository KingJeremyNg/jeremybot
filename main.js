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
    switch(command) {
        case "COOKIE":      msg.channel.send(Commands.cookie(msg));
                            break;

        case "YAR":         msg.channel.send(Commands.yar(msg));
                            break;

        case "!PING":       msg.reply(Commands.ping(msg));
                            break;

        case "!SAY":        msg.channel.send(Commands.say(msg));
                            break;

        case "!MOCK":       msg.channel.send(Commands.mock(msg));
                            msg.delete(2000);
                            break;

        case "!ROLL":       msg.channel.send(Commands.roll(msg));
                            break;

        case "!PROTECT":    msg.channel.sendFile(await Commands.protect(msg));
                            break;

        case "BOI":         msg.channel.sendFile(await Commands.boi(msg));
                            break;
        
        case "!AHSHIT":     msg.channel.sendFile(await Commands.ahshit(msg));
                            break;
        
        case "!WANT":       msg.channel.sendFile(await Commands.wantOneThing(msg));
                            break;
        
        case "!DISTRACTED": msg.channel.sendFile(await Commands.distracted(msg));
                            break;
    }
    
    if (msg.content.startsWith("<@490537758419582976> stop")) {
        client.user.setPresence({status: 'offline'});
        Commands.shutdown(msg);
    }

    if (msg.content.startsWith("<@490537758419582976>")) {
        msg.channel.send(Commands.help(msg));
    }
});

client.login(token);