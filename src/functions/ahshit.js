import { memeOverlay } from '../helpers/memeOverlay';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function ahshit(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeOverlay(msg.mentions.users.first().avatarURL, './src/imgs/ahshit.png', 4);
        }
        if (array[0].match(regex) != null) {
            return await memeOverlay(array[0], './src/imgs/ahshit.png', 4);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeOverlay(msg.attachments.first().url, './src/imgs/ahshit.png', 4);
        }
    }
    return await memeOverlay(msg.author.avatarURL, './src/imgs/ahshit.png', 4);
}

export { ahshit };