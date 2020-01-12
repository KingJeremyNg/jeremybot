const { createCanvas, loadImage, registerFont } = require("canvas");

async function textOverlay(image1, text, fillColor, borderColor, strokeWidth) {
    return await loadImage(image1).then(async (image) => {
        let textScale = image.height / 10;
        let lineCharacters = parseInt((image.width - image.width / 10) / textScale) * 2;

        let canvas = createCanvas(image.width, image.height);
        let ctx = canvas.getContext('2d');
        ctx.drawImage(image, 0, 0, image.width, image.height);
        ctx.font = `${textScale}px Impact`;
        ctx.textAlign = "center";
        ctx.fillStyle = fillColor;
        ctx.strokeStyle = borderColor;
        ctx.lineWidth = strokeWidth;

        let lines = 1;
        let count = 0;
        let array = text.split(" ");
        while (array.length >= 1) {
            let temp = [];
            let index = 0;
            let characters = 0;

            for (let i = 0; i < array.length; i++) {
                characters += array[i].length;
                if (characters + count <= lineCharacters || array[i].length > lineCharacters) {
                    temp.push(array[i]);
                    index++;
                    count++;
                }
                else {
                    break;
                }
            }

            array = array.slice(index);

            ctx.strokeText(temp.join(" "), image.width / 2, (image.height / 6) * lines);
            ctx.fillText(temp.join(" "), image.width / 2, (image.height / 6) * lines);
            lines++;
        }

        return await canvas.toBuffer();
    })
}

export { textOverlay };