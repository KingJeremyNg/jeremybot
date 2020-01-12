import { memeHalf } from '../helpers/memeHalf';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function doubt(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeHalf(msg.mentions.users.first().avatarURL, './src/imgs/doubt.png', 3);
        }
        if (array[0].match(regex) != null) {
            return await memeHalf(array[0], './src/imgs/doubt.png', 3);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeHalf(msg.attachments.first().url, './src/imgs/doubt.png', 3);
        }
    }
    return await memeHalf(msg.author.avatarURL, './src/imgs/doubt.png', 3);
}

export { doubt };