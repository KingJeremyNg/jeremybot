import { memeWindow } from '../helpers/memeWindow';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';

let urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
let regex = new RegExp(urlExpression);

async function distracted(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeWindow(msg.mentions.users.first().avatarURL, './src/imgs/distracted.png', 190, 135, 200);
        }
        if (array[0].match(regex) != null) {
            return await memeWindow(array[0], './src/imgs/distracted.png', 190, 135, 200);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeWindow(msg.attachments.first().url, './src/imgs/distracted.png', 190, 135, 200);
        }
    }
    return await memeWindow(msg.author.avatarURL, './src/imgs/distracted.png', 190, 135, 200);
}

export { distracted };