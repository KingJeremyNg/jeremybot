import { log } from '../helpers/log';

function whoami(msg, args, client) {
    console.log(log(msg));

    let data = client.users.get(msg.author.id);

    let id = data.id;
    let username = data.username;
    let discriminator = data.discriminator;

    msg.channel.send(`userID: ${id}\nAccount: ${username}#${discriminator}\n`);
}

export default {
    name: '!whoami',
    description: '> Usage:\n!whoami',
    execute: whoami,
};