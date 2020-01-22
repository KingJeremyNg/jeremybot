import { memeWindow } from '../helpers/memeWindow';
import { log } from '../helpers/log';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function distracted(msg, args) {
    console.log(log(msg));

    if (args[0]) {
        if (msg.mentions.users.first()) {
            msg.channel.sendFile(await memeWindow(msg.mentions.users.first().avatarURL, './src/imgs/distracted.png', 190, 135, 200));
        }
        if (args[0].match(regex) != null) {
            msg.channel.sendFile(await memeWindow(args[0], './src/imgs/distracted.png', 190, 135, 200));
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            msg.channel.sendFile(await memeWindow(msg.attachments.first().url, './src/imgs/distracted.png', 190, 135, 200));
        }
    }
    msg.channel.sendFile(await memeWindow(msg.author.avatarURL, './src/imgs/distracted.png', 190, 135, 200));
}

export default {
    name: '!distracted',
    description: '> Usage:\n`!distracted [mention|url|attachment]',
    execute: distracted,
};