const { createCanvas, loadImage } = require("canvas");

async function memeOverlay(image1, image2, position) {
    return await loadImage(image1).then(async (image) => {
        let canvas = createCanvas(image.width, image.height);
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);

        return await loadImage(image2).then(async (meme) => {
            let scale = Math.min(image.height / meme.height, image.width / meme.width);

            switch (position) {
                case 1:
                    ctx.drawImage(meme, image.width - (meme.width * scale), 0, meme.width * scale, meme.height * scale);
                    break;
                case 2:
                    ctx.drawImage(meme, 0, 0, meme.width * scale, meme.height * scale);
                    break;
                case 3:
                    ctx.drawImage(meme, 0, image.height - (meme.height * scale), meme.width * scale, meme.height * scale);
                    break;
                case 4:
                    ctx.drawImage(meme, image.width - (meme.width * scale), image.height - (meme.height * scale), meme.width * scale, meme.height * scale);
                    break;
            }

            return await canvas.toBuffer();
        })
    })
}

export { memeOverlay };