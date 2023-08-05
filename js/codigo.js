let img1 = document.getElementById("img01")
let img2 = document.getElementById("img02")
let img3 = document.getElementById("img03")


function reiniciar(){    
    img1.src = "img/wild-animals.png"
    img2.src = ""
    img3.src = ""
    document.getElementById("name0").innerHTML = "Nombre"
    document.getElementById("input2").value = ""
    document.getElementById("name").innerHTML = ""
    document.getElementById("input3").value = ""
    document.getElementById("numLetras").innerHTML = ""
}

var srcImagen
var nombre
var numLetras

function cambio(x){
    switch (x){
        case 1:
            srcImagen = "img/toucan.png"
            nombre = "Tucán"
            numLetras = nombre.length
            break
        case 2:
            srcImagen = "img/cat.png"
            nombre = "Gato"
            numLetras = nombre.length
            break
        case 3:
            srcImagen = "img/fox.png"
            nombre = "Zorro"
            numLetras = nombre.length
            break
        case 4:
            srcImagen = "img/koala.png"
            nombre = "Koala"
            numLetras = nombre.length
            break
        case 5:
            srcImagen = "img/squirrel.png"
            nombre = "Ardilla"
            numLetras = nombre.length
            break
        case 6:
            srcImagen = "img/whale.png"
            nombre = "Ballena"
            numLetras = nombre.length
            break
        default:
            srcImagen = "img/wild-animals.png"
            nombre = "Ingrese un número del 1 al 6"
            numLetras = "Error"
    }
}

function boton(x){
    cambio(x)
    img1.src = srcImagen
    document.getElementById("name0").innerHTML = nombre
}

function buscar(){
    let num1 = parseFloat(document.getElementById("input2").value)
    cambio(num1)
    img2.src = srcImagen
    document.getElementById("name").innerHTML = nombre
}

function contar(){
    let num2 = parseFloat(document.getElementById("input3").value)
    cambio(num2)
    img3.src = srcImagen
    if (numLetras != "Error" ){
        document.getElementById("numLetras").innerHTML = "Su nombre tiene "+numLetras+" letras"
    } else {
        document.getElementById("numLetras").innerHTML = "Ingrese un número del 1 al 6"
    }    
}
