const { createCanvas, loadImage } = require("canvas");

function log(msg) {
    return (msg.author.tag + " | " + msg.content);
};

function separate(string) {
    return string.match(/\S+/g) || []
};

function randomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

module.exports = {

    cookie: function (msg) {
        console.log(log(msg));
        return ":cookie:";
    },

    yar: function (msg) {
        console.log(log(msg));
        return "YARFILE";
    },

    ping: function (msg) {
        console.log(log(msg));
        return "Pong!"
    },

    say: function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
        array.splice(0, 1);
        return array.join(" ");
    },

    shutdown: function (msg) {
        console.log(log(msg));
        process.exit();
    },

    mock: function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
        array.splice(0, 1);
        var string = "";
        var temp = array.join(" ");
        temp = temp.split("");
        for (var char in temp) {
            random = randomInt(0, 1);
            random ? string += temp[char].toUpperCase() : string += temp[char].toLowerCase();
        }
        return string;
    },

    roll: function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
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
    },

    boi: function (msg) {
        console.log(log(msg));
        return ('./boi.png');
    },

    ahshit: async function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
        array.splice(0, 1);

        return await loadImage(msg.author.avatarURL).then(async (image) => {
            let canvas = createCanvas(image.width, image.height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);

            return await loadImage('./ahshit.png').then(async (meme) => {
                var scale = Math.min(image.height / meme.height, image.width / meme.width);

                ctx.drawImage(meme, image.width - (meme.width * scale), image.height - (meme.height * scale), meme.width * scale, meme.height * scale);
                
                return await canvas.toBuffer();
            })
        })
    },

    protect: function (msg) {

    },

}