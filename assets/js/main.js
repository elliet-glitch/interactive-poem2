function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const words = document.querySelectorAll(".grid-container div");

function randomize() {

    words.forEach(function(word) {

        let scale = randomNumber(5, 12) / 10;
        let x = randomNumber(-300, 300);
        let y = randomNumber(-250, 250);
        let rotate = randomNumber(-360, 360);

        word.style.transform =
            `translate(${x}px, ${y}px)
             rotate(${rotate}deg)
             scale(${scale})`;

    });

}

document.addEventListener("click", randomize);

let scattered = false;

document.addEventListener("click", () => {

    if (!scattered) {
        randomize();
    } else {
        words.forEach(word => {
            word.style.transform = "translate(0,0) rotate(0deg) scale(1)";
        });
    }

    scattered = !scattered;

});