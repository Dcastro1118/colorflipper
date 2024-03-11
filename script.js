var changecolor = document.querySelector(".btn");
var colorcode = document.querySelector(".color");
var colors = ["Green", "Blue", "Yellow", "Black", "White", "Pink", "Orange", "Purple", "Gray", "Red", "Lightblue", "Coral"] 

changecolor.onclick = newcolor;

function newcolor() {
    randomnumber = Math.floor(Math.random()*12);
    document.body.style.backgroundColor = colors[randomnumber];
    colorcode.textContent = colors[randomnumber];
    console.log("Se ha cambiado el color de fondo a:", colors[randomnumber]);
}