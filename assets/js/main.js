const pixels = document.querySelectorAll(".pixel");


pixels.forEach(pixel => {

    pixel.addEventListener("click", () => {

        const x = (Math.random() - 0.5) * 500;
        const y = Math.random() * 400 + 50;
        const rotation = Math.random() * 360;

        pixel.style.transform =
            `translate(${x}px, ${y}px) rotate(${rotation}deg)`;

        pixel.style.opacity = "0";

    });

});


// slowly rebuild the pixels

document.body.addEventListener("dblclick", () => {

    pixels.forEach((pixel, index) => {

        setTimeout(() => {

            pixel.style.transform =
                "translate(0,0) rotate(0deg)";

            pixel.style.opacity = "1";

        }, index * 50);

    });

});