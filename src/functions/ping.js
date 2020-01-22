import { log } from '../helpers/log';

function ping(msg, args) {
    console.log(log(msg));
    msg.channel.send("Pong!");
}

export default {
    name: '!ping',
    description: '> Usage:\n!ping',
    execute: ping,
};