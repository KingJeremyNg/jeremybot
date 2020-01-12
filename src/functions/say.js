import { log } from '../helpers/log';

function say(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    return array.join(" ");
}

export { say };