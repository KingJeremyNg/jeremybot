import { textOverlay } from '../helpers/textOverlay';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';
import { randomInt } from '../helpers/randomInt';

async function mock(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    let string = "";
    let temp = array.join(" ");
    temp = temp.split("");
    for (let char in temp) {
        let random = randomInt(0, 1);
        random ? string += temp[char].toUpperCase() : string += temp[char].toLowerCase();
    }

    return await textOverlay('./src/imgs/mocking-spongebob.png', string, "#FFFFFF", "#000000", 10);
}

export { mock };