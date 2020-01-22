import { log } from '../helpers/log';

function bullshit(msg, args) {
    console.log(log(msg));
    msg.channel.sendFile('./src/imgs/bullshit.png');
}

export default {
    name: 'bullshit',
    description: '> Usage:\njust type bullshit',
    execute: bullshit,
};