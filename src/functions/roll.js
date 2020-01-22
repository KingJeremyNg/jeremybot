import { randomInt } from '../helpers/randomInt';
import { log } from '../helpers/log';

function roll(msg, args) {
    console.log(log(msg));

    switch (args.length) {
        case 1:
            if (!isNaN(args[0])) {
                msg.channel.send(`You rolled ${args[0]} dice for ${randomInt(1 * args[0], 6 * args[0])}`);
                return;
            }
        case 2:
            if (!isNaN(args[0]) && !isNaN(args[1])) {
                msg.channel.send(`You rolled a d${args[1]} * ${args[0]} for ${randomInt(1 * args[0], args[0] * args[1])}`);
                return;
            }
        default:
            msg.channel.send(`You rolled ${randomInt(1, 6)}`);
            return;
    }
}

export default {
    name: '!roll',
    description: '> Usage:\nRoll X number of die: !roll [X]\nRoll a Y sided die, X number of times: !roll [X] [Y]',
    execute: roll,
};