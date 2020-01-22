import { log } from '../helpers/log';

function boi(msg, args) {
    console.log(log(msg));
    msg.channel.sendFile('./src/imgs/boi.png');
}

export default {
    name: 'boi',
    description: '>Usage:\njust type boi',
    execute: boi,
};