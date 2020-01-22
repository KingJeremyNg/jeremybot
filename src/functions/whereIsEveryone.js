import { log } from '../helpers/log';

function whereIsEveryone(msg, args) {
    console.log(log(msg));
    msg.channel.sendFile('./src/gifs/whereIsEveryone.gif');
}

export default {
    name: '!where',
    description: '> Usage:\n!where',
    execute: whereIsEveryone,
};