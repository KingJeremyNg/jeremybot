import { log } from '../helpers/log';

function ping(msg) {
    console.log(log(msg));
    return "Pong!"
}

export { ping };