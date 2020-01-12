import { memeHalf } from '../helpers/memeHalf';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function wantOneThing(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeHalf(msg.mentions.users.first().avatarURL, './src/imgs/wantOneThing.png', 1);
        }
        if (array[0].match(regex) != null) {
            return await memeHalf(array[0], './src/imgs/wantOneThing.png', 1);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeHalf(msg.attachments.first().url, './src/imgs/wantOneThing.png', 1);
        }
    }
    return await memeHalf(msg.author.avatarURL, './src/imgs/wantOneThing.png', 1);
}

export { wantOneThing };