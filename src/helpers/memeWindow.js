const { createCanvas, loadImage } = require("canvas");

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
            let canvas = createCanvas(meme.width, meme.height);
            let ctx = canvas.getContext('2d');
            ctx.drawImage(meme, 0, 0, meme.width, meme.height);
            ctx.drawImage(image, x - ((image.width * scale) / 2), y - ((image.height * scale) / 2), image.width * scale, image.height * scale);
            return await canvas.toBuffer();
        })
    })
}

export { memeWindow };