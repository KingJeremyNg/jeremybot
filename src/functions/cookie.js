import { log } from '../helpers/log';

function cookie(msg, args) {
    console.log(log(msg));
    msg.channel.send(":cookie:");
}

export default {
    name: 'cookie',
    description: '> Usage:\njust type cookie',
    execute: cookie,
};