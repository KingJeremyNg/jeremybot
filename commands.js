const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

var urlExpression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
var regex = new RegExp(urlExpression);

function log(msg) {
    return (msg.guild + " | " + msg.author.tag + " | " + msg.content);
};

function separate(string) {
    return string.match(/\S+/g) || []
};

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

function help(msg) {
    console.log(log(msg));
    return "`COMMANDS: cookie yar !ping !mock !roll !protect boi !ahshit !want !distracted !doubt`";
};

function shutdown(msg) {
    console.log(log(msg));
    process.exit();
};

function cookie(msg) {
    console.log(log(msg));
    return ":cookie:";
};

function yar(msg) {
    console.log(log(msg));
    return "Do what you want cause a pirate is free, you are a pirate!\nYarr har fiddle dee dee\nBeing a pirate is alright to be\nDo what you want cause a pirate is free\nYou are a pirate!";
};

function ping(msg) {
    console.log(log(msg));
    return "Pong!"
};

function say(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    return array.join(" ");
};

function mock(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);
    let string = "";
    let temp = array.join(" ");
    temp = temp.split("");
    for (let char in temp) {
        random = randomInt(0, 1);
        random ? string += temp[char].toUpperCase() : string += temp[char].toLowerCase();
    }
    string = msg.author.tag + ": " + string
    return string;
};

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
};

function boi(msg) {
    console.log(log(msg));
    return ('./imgs/boi.png');
};

async function memeOverlay(image1, image2, position) {
    return await loadImage(image1).then(async (image) => {
        canvas = createCanvas(image.width, image.height);
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);

        return await loadImage(image2).then(async (meme) => {
            let scale = Math.min(image.height / meme.height, image.width / meme.width);

            switch (position) {
                case 1: ctx.drawImage(meme, image.width - (meme.width * scale), 0, meme.width * scale, meme.height * scale);
                        break;
                case 2: ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                        break;
                case 3: ctx.drawImage(meme, 0, image.height - (meme.height * scale), meme.width * scale, meme.height * scale);
                        break;
                case 4: ctx.drawImage(meme, image.width - (meme.width * scale), image.height - (meme.height * scale), meme.width * scale, meme.height * scale);
                        break;
            }

            return await canvas.toBuffer();
        })
    })
};

async function ahshit(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeOverlay(msg.mentions.users.first().avatarURL, './imgs/ahshit.png', 4);
        }
        if (array[0].match(regex) != null) {
            return await memeOverlay(array[0], './imgs/ahshit.png', 4);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeOverlay(msg.attachments.first().url, './imgs/ahshit.png', 4);
        }
    }
    return await memeOverlay(msg.author.avatarURL, './imgs/ahshit.png', 4);
};

async function memeHalf(image1, image2, position) {
    return await loadImage(image1).then(async (image) => {
        return await loadImage(image2).then(async (meme) => {
            let scale = 0;
            switch (position) {
                case 1: scale = image.width / meme.width;
                        canvas = createCanvas(image.width, image.height + meme.height * scale);
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, meme.height * scale, image.width, image.height);
                        ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                        break;
                case 2: scale = image.height / meme.height;
                        canvas = createCanvas(image.width + meme.width * scale, image.height);
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, meme.width * scale, 0, image.width, image.height);
                        ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                        break;
                case 3: scale = image.width / meme.width;
                        canvas = createCanvas(image.width, image.height + meme.height * scale);
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0, image.width, image.height);
                        ctx.drawImage(meme, 0, image.height, meme.width * scale, meme.height * scale);
                    break;
                case 4: scale = image.height / meme.height;
                        canvas = createCanvas(image.width + meme.width * scale, image.height);
                        ctx = canvas.getContext('2d');
                        ctx.drawImage(image, 0, 0, image.width, image.height);
                        ctx.drawImage(meme, image.width, 0, meme.width * scale, meme.height * scale);
                        break;
            }

            return await canvas.toBuffer();
        })
    })
};

async function protect(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeHalf(msg.mentions.users.first().avatarURL, './imgs/protect.png', 3);
        }
        if (array[0].match(regex) != null) {
            return await memeHalf(array[0], './imgs/protect.png', 3);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeHalf(msg.attachments.first().url, './imgs/protect.png', 3);
        }
    }
    return await memeHalf(msg.author.avatarURL, './imgs/protect.png', 3);
};

async function wantOneThing(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeHalf(msg.mentions.users.first().avatarURL, './imgs/wantOneThing.png', 1);
        }
        if (array[0].match(regex) != null) {
            return await memeHalf(array[0], './imgs/wantOneThing.png', 1);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeHalf(msg.attachments.first().url, './imgs/wantOneThing.png', 1);
        }
    }
    return await memeHalf(msg.author.avatarURL, './imgs/wantOneThing.png', 1);
};

async function memeWindow(image1, image2, x, y, widthSize) {
    return await loadImage(image1).then(async (image) => {
        return await loadImage(image2).then(async (meme) => {
            let scale = 0;
            if (image.height > meme.height || image.width > meme.width) {
                scale = widthSize / image.width;
            }
            else {
                scale = image.width / widthSize;
            }
            canvas = createCanvas(meme.width, meme.height);
            let ctx = canvas.getContext('2d');
            ctx.drawImage(meme, 0, 0, meme.width, meme.height);
            ctx.drawImage(image, x - ((image.width * scale) / 2), y - ((image.height * scale) / 2), image.width * scale, image.height * scale);
            return await canvas.toBuffer();
        })
    })
};

async function distracted(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeWindow(msg.mentions.users.first().avatarURL, './imgs/distracted.png', 190, 135, 200);
        }
        if (array[0].match(regex) != null) {
            return await memeWindow(array[0], './imgs/distracted.png', 190, 135, 200);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeWindow(msg.attachments.first().url, './imgs/distracted.png', 190, 135, 200);
        }
    }
    return await memeWindow(msg.author.avatarURL, './imgs/distracted.png', 190, 135, 200);
};

async function doubt(msg) {
    console.log(log(msg));
    let array = separate(msg.content);
    array.splice(0, 1);

    if (array[0]) {
        if (msg.mentions.users.first()) {
            return await memeHalf(msg.mentions.users.first().avatarURL, './imgs/doubt.png', 3);
        }
        if (array[0].match(regex) != null) {
            return await memeHalf(array[0], './imgs/doubt.png', 3);
        }
    }
    if (msg.attachments.size > 0) {
        if (msg.attachments.first().url.match(regex) != null) {
            return await memeHalf(msg.attachments.first().url, './imgs/doubt.png', 3);
        }
    }
    return await memeHalf(msg.author.avatarURL, './imgs/doubt.png', 3);
}

module.exports = {
    help: help,
    shutdown: shutdown,
    cookie: cookie,
    yar: yar,
    ping: ping,
    say: say,
    mock: mock,
    roll: roll,
    protect: protect,
    boi: boi,
    ahshit: ahshit,
    wantOneThing: wantOneThing,
    distracted: distracted,
    doubt: doubt,
};