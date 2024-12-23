class Bola {

//Constructor que crea cada bola
    constructor (x, y) {
        this.x = x
        this.y = y
        this.radio = 5
        this.dirx = (Math.random() * 2) - 1
        this.diry = (Math.random() * 2) - 1
        this.velocidad = 1.5
    }

//Funcion que dibuja cada bola
    dibujar (){
        ctx.beginPath()
        ctx.arc(this.x, this.y, this.radio, 0, 2 * Math.PI)
        ctx.fillStyle = "white";
        ctx.fill()
        ctx.closePath
    }

//Funcion que hace el movimiento de cada bola
    mover(){
        this.x += this.dirx * this.velocidad
        this.y += this.diry * this.velocidad
        if(this.x + this.radio > canvas.width || this.x + this.radio < 5){
            this.dirx *= -1
        }
        if(this.y + this.radio > canvas.height || this.y + this.radio < 5){
            this.diry *= -1
        }
    }
}