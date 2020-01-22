import { log } from '../helpers/log';

function help(msg, args) {
    console.log(log(msg));
    msg.channel.send("```COMMANDS: cookie yar !ping !mock !roll !protect boi !ahshit !want !distracted !doubt !team bullshit !where```");
}

export default {
    name: '!help',
    description: '> Usage:\nType !help or !help [command]',
    execute: help,
};

//TODO: dynamic help function