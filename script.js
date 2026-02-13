const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

// 2️⃣ Set size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function drawMultilineText({
    ctx,
    text,
    canvasWidth,
    canvasHeight,
    font = "bold 120px Arial",
    color = "white",
    lineHeight = 140,
    align = "center",
    verticalAlign = "middle"
}) {
    ctx.save();

    ctx.font = font;
    ctx.fillStyle = color;
    ctx.textAlign = align;
    ctx.textBaseline = "middle";

    const lines = text.split("\n");
    const totalHeight = lines.length * lineHeight;

    let startY;

    // căn dọc
    if (verticalAlign === "middle") {
        startY = canvasHeight / 2 - totalHeight / 2 + lineHeight / 2;
    } else if (verticalAlign === "top") {
        startY = lineHeight / 2;
    } else {
        startY = canvasHeight - totalHeight + lineHeight / 2;
    }

    // vẽ từng dòng
    lines.forEach((line, i) => {
        ctx.fillText(
            line,
            canvasWidth / 2,
            startY + i * lineHeight
        );
    });

    ctx.restore();

    return {
        lines,
        totalHeight
    };
}
const text = "ANH YÊU EM\nVALENTINE 14.02 💕";

drawMultilineText({
    ctx: ctx,
    text: text,
    canvasWidth: canvas.width,
    canvasHeight: canvas.height,
    font: "bold 120px Arial",
    lineHeight: 150
});
