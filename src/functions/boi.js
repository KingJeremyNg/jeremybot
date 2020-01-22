import { log } from '../helpers/log';

function boi(msg, args) {
    console.log(log(msg));
    // return ('./src/imgs/boi.png');
    msg.channel.sendFile('./src/imgs/boi.png');
}

export default {
    name: 'boi',
    description: '>Usage:\njust type boi',
    execute: boi,
};