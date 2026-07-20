const pixels = document.querySelectorAll(".pixel");


console.log("Quiet Pixels loaded");
console.log(pixels.length + " pixels found");



pixels.forEach(pixel => {


    pixel.addEventListener("click", function(){


        const x = (Math.random() - 0.5) * 600;

        const y = Math.random() * 600 + 100;

        const rotation = Math.random() * 720;



        this.style.transform =
        `translate(${x}px, ${y}px) rotate(${rotation}deg)`;


        this.classList.add("fallen");



        document.body.classList.add("glitch");


        setTimeout(()=>{

            document.body.classList.remove("glitch");

        },150);



    });


});



// double click restores the dream

document.body.addEventListener("dblclick", ()=>{


    pixels.forEach((pixel,index)=>{


        setTimeout(()=>{


            pixel.style.transform =
            "translate(0,0) rotate(0deg)";


            pixel.classList.remove("fallen");


        }, index * 100);



    });


});
let broken = 0;

pixels.forEach(pixel => {

    pixel.addEventListener("click", () => {

        broken++;

        if (broken === pixels.length) {

            document.body.style.background = "#000";

        }

    });

});