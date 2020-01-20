import { log } from '../helpers/log';

function whoami(msg, client) {
    console.log(log(msg));

    let data = client.users.get(msg.author.id);

    let id = data.id;
    let username = data.username;
    let discriminator = data.discriminator;

    return `userID: ${id}\nAccount: ${username}#${discriminator}\n`;
}

export { whoami };