import { log } from '../helpers/log';

function say(msg, args) {
    console.log(log(msg));
    msg.channel.send(args.join(" "));
}

export default {
    name: '!say',
    description: '> Usage:\n!say [something]',
    execute: say,
};