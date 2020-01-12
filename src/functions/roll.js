import { randomInt } from '../helpers/randomInt';
import { log } from '../helpers/log';
import { separate } from '../helpers/separate';

function roll(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    switch (array.length) {
        case 1: if (!isNaN(array[0])) {
            return `You rolled ${array[0]} dice for ${randomInt(1 * array[0], 6 * array[0])}`;
        }
        case 2: if (!isNaN(array[0]) && !isNaN(array[1])) {
            return `You rolled a d${array[1]} * ${array[0]} for ${randomInt(1 * array[0], array[0] * array[1])}`;
        }
        default: return `You rolled ${randomInt(1, 6)}`;
    }
}

export { roll };