//Creación canvas
const canvas = document.querySelector("#canvas")
const ctx = canvas.getContext("2d")

canvas.width = innerWidth - 15
canvas.height = innerHeight - 16

//Creación Array de bolas
let bolas = []

//Llamamos a la funcion animar para que haga toda la animación
animar()

//Declaramos la funcion animar que primero limpia todo el canvas, después tenemos la función de unir la bolas
//por líneas si se cumple que la distancia entre bolas es menor a ej 200 unidades, y llamamos las dos
//funciones de Bola.js
function animar(){
    
    ctx.clearRect(0,0,canvas.width,canvas.height)

    bolas.forEach(bola => {

        bolas.forEach(bolaT => {
            let dx = bolaT.x - bola.x
            let dy = bolaT.y - bola.y
            let dt = Math.sqrt(dx ** 2 + dy ** 2)
            ctx.beginPath()
            ctx.moveTo(bola.x, bola.y)
            ctx.lineTo(bolaT.x, bolaT.y)
            ctx.strokeStyle = "rgb(70, 70, 70)"
            if(dt < 200){
                ctx.stroke()
            }
            ctx.closePath()
        })

        bola.dibujar()
        bola.mover()        
    });

//Esta funcion sirve para que ejecute la función animar por cada frame del ordenador
    requestAnimationFrame(animar)
}

//Boton para el evento
const btn = document.querySelector("#boton")

btn.addEventListener("click", aparecerBolas)

//Por cada click en el boton se va a ejecutar todo lo de esta función(van a aparecer más bolas)
function aparecerBolas (){
    for(let i=0; i<20; i++){
        bolas.push(new Bola(canvas.width/2, canvas.height/2))
    }
}