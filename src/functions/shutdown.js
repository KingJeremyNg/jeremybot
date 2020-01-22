import { log } from '../helpers/log';

function shutdown(msg, args, client) {
    console.log(log(msg));
    if (msg.author.id == 150955542578331648) {
        msg.channel.send("Shutting Down...").then(m => {
            client.destroy();
            process.exit();
        })
    }
    else {
        msg.channel.send("Only Jeremy can use this command");
    }
}

export default {
    name: '!shutdown',
    description: '> Usage:\nCan only be used by Jeremy',
    execute: shutdown,
};