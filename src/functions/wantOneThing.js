import { memeHalf } from '../helpers/memeHalf';
import { log } from '../helpers/log';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function wantOneThing(msg, args) {
    console.log(log(msg));

    if (args[0]) {
        if (msg.mentions.users.first()) {
            msg.channel.sendFile(await memeHalf(msg.mentions.users.first().avatarURL, './src/imgs/wantOneThing.png', 1));
            return;
        }
        if (args[0].match(regex) != null) {
            msg.channel.sendFile(await memeHalf(args[0], './src/imgs/wantOneThing.png', 1));
            return;
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            msg.channel.sendFile(await memeHalf(msg.attachments.first().url, './src/imgs/wantOneThing.png', 1));
            return;
        }
    }
    msg.channel.sendFile(await memeHalf(msg.author.avatarURL, './src/imgs/wantOneThing.png', 1));
}

export default {
    name: '!want',
    description: '> Usage:\n`!want [mention|url|attachment]',
    execute: wantOneThing,
};