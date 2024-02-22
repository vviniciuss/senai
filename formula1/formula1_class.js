class Objeto {
    constructor(x,y,w,h,a){
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.a = a
    }

    desenha_Objeto() {

        des.beginPath()
        des.moveTo(this.x,this.y)
        des.lineTo(this.x+50,this.y)
        des.lineTo(this.x+40,this.y-50)
        des.lineTo(this.x+10,this.y-50)
        des.closePath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.stroke()
        des.fill()

        //desenhando corpo frontal e um retangulo
        des.beginPath()
        des.lineWidth = '5'
        des.strokeStyle = 'black'
        des.fillStyle = this.a
        des.rect(this.x+10,this.y-70,30,20)
        des.closePath()
        des.stroke()
        des.fill()
    }
}



class Carro extends Objeto {
    dirX = 0
    dirY = 0
    pts = 0
    vida = 4
    desenhaCarro(){

    }

    atualizaCarro(){
        this.x += this.dirX
        this.y += this.dirY

        if (this.x <= 2) {
            this.x = 2
        }
        else if (this.x >= 420) {
            this.x = 420
        }
        if (this.y <= 1) {
            this.y = 1
        } else if (this.y >= 700) {
            this.y = 700
        }
    }

   

    point(objeto){
        if((objeto.y > 610) && (objeto.y < 618)){
            return true
        }
    }
    
    colisao(objeto){
        if((this.x < objeto.x + objeto.w) && 
        (this.x + this.w > objeto.x)&&
        (this.y < objeto.y + objeto.h)&&
        (this.y + this.h > objeto.y)){
            
            return true
        }
    }
}

class Carro02 extends Objeto { 
    atualizaCarro02() {
        this.y += 3
        if (this.y >= 700 + this.h) {
            this.y -= 800
            this.x = Math.floor(Math.random() * (416 - 2 + 1) + 2)
        }
    }
    recomeca(){
        this.y = -100
        this.x = Math.floor(Math.random() * ((416 - 2 + 1) + 2))
    }
}


class Estrada extends Objeto {
    desenhaEstrada() {
        des.fillStyle = this.a
        des.fillRect(this.x,this.y,this.w,this.h)
    }

    moveEstrada() {
        this.y += 10
        if (this.y >= 790) {
            this.y = -100
        }
    }
}

class Text {
    desenhaTexto (text, x, y, cor, font) {
       des.fillStyle = cor
       des.lineWidth = '5'
       des.font = font
       des.fillText(text, x, y) 
    }
}