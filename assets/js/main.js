const pixels = document.querySelectorAll(".pixel");

console.log("main.js connected!");
console.log(pixels.length + " pixels found");


pixels.forEach(pixel => {

    pixel.addEventListener("click", function () {

        const x = (Math.random() - 0.5) * 600;
        const y = Math.random() * 500 + 50;
        const rotation = Math.random() * 720;

        this.style.transform =
            `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        this.style.opacity = "0.2";

    });

});


// double click restores the pixels

document.body.addEventListener("dblclick", () => {

    pixels.forEach((pixel, index) => {

        setTimeout(() => {

            pixel.style.transform =
                "translate(0,0) rotate(0deg)";

            pixel.style.opacity = "1";

        }, index * 80);

    });

});