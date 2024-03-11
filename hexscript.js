var changecolor = document.querySelector(".btn");
var colorcode = document.querySelector(".color");


changecolor.onclick = newcolor;

function newcolor() {
    ramdomcolor = "#" + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = ramdomcolor;
    colorcode.textContent = ramdomcolor;
    console.log("Se ha cambiado el color de fondo a:", ramdomcolor);
}