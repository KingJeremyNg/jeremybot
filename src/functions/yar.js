import { log } from '../helpers/log';

function yar(msg, args) {
    console.log(log(msg));
    msg.channel.send("Do what you want cause a pirate is free, you are a pirate!\nYarr har fiddle dee dee\nBeing a pirate is alright to be\nDo what you want cause a pirate is free\nYou are a pirate!");
}

export default {
    name: 'yar',
    description: '> Usage:\njust type yar',
    execute: yar,
};