import { textOverlay } from '../helpers/textOverlay';
import { log } from '../helpers/log';
import { randomInt } from '../helpers/randomInt';

async function mock(msg, args) {
    console.log(log(msg));
    let string = "";
    let temp = args.join(" ");
    temp = temp.split("");
    for (let char in temp) {
        let random = randomInt(0, 1);
        random ? string += temp[char].toUpperCase() : string += temp[char].toLowerCase();
    }

    msg.channel.sendFile(await textOverlay('./src/imgs/mocking-spongebob.png', string, "#FFFFFF", "#000000", 10));
}

export default {
    name: '!mock',
    description: '> Usage:\n!mock [type stuff here]',
    execute: mock,
};