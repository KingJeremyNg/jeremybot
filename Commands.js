const { createCanvas, loadImage } = require("canvas");

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
            default:return `You rolled ${randomInt(1, 6)}`;
        }
    },

    boi: function (msg) {
        console.log(log(msg));
        return ('./boi.png');
    },

    memeOverlay: async function (image1, image2, position) {
        return await loadImage(image1).then(async (image) => {
            canvas = createCanvas(image.width, image.height);
            var ctx = canvas.getContext('2d');
            ctx.drawImage(image, 0, 0, image.width, image.height);

            return await loadImage(image2).then(async (meme) => {
                var scale = Math.min(image.height / meme.height, image.width / meme.width);

                switch(position) {
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
    },

    ahshit: async function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
        array.splice(0, 1);
        
        if (array[0]) {
            if (msg.mentions.users.first()) {
                return await this.memeOverlay(msg.mentions.users.first().avatarURL, './ahshit.png', 4);
            }
            if (array[0].match(/\.(jpeg|jpg|gif|png)$/) != null) {
                return await this.memeOverlay(array[0], './ahshit.png', 4);
            }
        }
        if (msg.attachments.size > 0) {
            if (msg.attachments.first().url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                return await this.memeOverlay(msg.attachments.first().url, './ahshit.png', 4);
            }
        }
        return await this.memeOverlay(msg.author.avatarURL, './ahshit.png', 4);
    },

    memeHalf: async function (image1, image2, position) {
        return await loadImage(image1).then(async (image) => {
            return await loadImage(image2).then(async (meme) => {

                switch(position) {
                    case 1: var scale = image.width / meme.width;
                            canvas = createCanvas(image.width, image.height + meme.height * scale);
                            var ctx = canvas.getContext('2d');
                            ctx.drawImage(image, 0, meme.height * scale, image.width, image.height);
                            ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                            break;
                    case 2: var scale = image.height / meme.height;
                            canvas = createCanvas(image.width + meme.width * scale, image.height);
                            var ctx = canvas.getContext('2d');
                            ctx.drawImage(image, meme.width * scale, 0, image.width, image.height);
                            ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                            break;
                    case 3: var scale = image.width / meme.width;
                            canvas = createCanvas(image.width, image.height + meme.height * scale);
                            var ctx = canvas.getContext('2d');
                            ctx.drawImage(image, 0, 0, image.width, image.height);
                            ctx.drawImage(meme, 0, image.height, meme.width * scale, meme.height * scale);
                            break;
                    case 4: var scale = image.height / meme.height;
                            canvas = createCanvas(image.width + meme.width * scale, image.height);
                            var ctx = canvas.getContext('2d');
                            ctx.drawImage(image, 0, 0, image.width, image.height);
                            ctx.drawImage(meme, image.width, 0, meme.width * scale, meme.height * scale);
                            break;
                }

                return await canvas.toBuffer();
            })
        })
    },

    protect: async function (msg) {
        console.log(log(msg));
        var array = separate(msg.content);
        array.splice(0, 1);

        if (array[0]) {
            if (msg.mentions.users.first()) {
                return await this.memeHalf(msg.mentions.users.first().avatarURL, './protect.png', 3);
            }
            if (array[0].match(/\.(jpeg|jpg|gif|png)$/) != null) {
                return await this.memeHalf(array[0], './protect.png', 3);
            }
        }
        if (msg.attachments.size > 0) {
            if (msg.attachments.first().url.match(/\.(jpeg|jpg|gif|png)$/) != null) {
                return await this.memeHalf(msg.attachments.first().url, './protect.png', 3);
            }
        }
        return await this.memeHalf(msg.author.avatarURL, './protect.png', 3);
    },

}