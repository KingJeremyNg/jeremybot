import { memeOverlay } from '../helpers/memeOverlay';
import { log } from '../helpers/log';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function ahshit(msg, args) {
    console.log(log(msg));

    if (args[0]) {
        if (msg.mentions.users.first()) {
            msg.channel.sendFile(await memeOverlay(msg.mentions.users.first().avatarURL, './src/imgs/ahshit.png', 4));
            return;
        }
        if (args[0].match(regex) != null) {
            msg.channel.sendFile(await memeOverlay(args[0], './src/imgs/ahshit.png', 4));
            return;
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            msg.channel.sendFile(await memeOverlay(msg.attachments.first().url, './src/imgs/ahshit.png', 4));
            return;
        }
    }
    msg.channel.sendFile(await memeOverlay(msg.author.avatarURL, './src/imgs/ahshit.png', 4));
}

export default {
    name: '!ahshit',
    description: '> Usage:\n`!ahshit [mention|url|attachment]`',
    execute: ahshit,
};