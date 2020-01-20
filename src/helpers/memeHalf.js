const { createCanvas, loadImage } = require("canvas");

async function memeHalf(image1, image2, position) {
    return await loadImage(image1).then(async (image) => {
        return await loadImage(image2).then(async (meme) => {
            let scale = 0;
            let canvas = createCanvas(0, 0);
            let ctx = canvas.getContext('2d');

            switch (position) {

                case 1:
                    scale = image.width / meme.width;
                    canvas = createCanvas(image.width, image.height + meme.height * scale);
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, meme.height * scale, image.width, image.height);
                    ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                    break;
                case 2:
                    scale = image.height / meme.height;
                    canvas = createCanvas(image.width + meme.width * scale, image.height);
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(image, meme.width * scale, 0, image.width, image.height);
                    ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                    break;
                case 3:
                    scale = image.width / meme.width;
                    canvas = createCanvas(image.width, image.height + meme.height * scale);
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0, image.width, image.height);
                    ctx.drawImage(meme, 0, image.height, meme.width * scale, meme.height * scale);
                    break;
                case 4:
                    scale = image.height / meme.height;
                    canvas = createCanvas(image.width + meme.width * scale, image.height);
                    ctx = canvas.getContext('2d');
                    ctx.drawImage(image, 0, 0, image.width, image.height);
                    ctx.drawImage(meme, image.width, 0, meme.width * scale, meme.height * scale);
                    break;
            }

            return await canvas.toBuffer();
        })
    })
}

export { memeHalf };