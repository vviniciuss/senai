let des = document.getElementById('des').getContext('2d')

let carro = new Carro (200,400,30,80,'red')
let carro02 = new Carro02 (400,500,80,80,'blue')
let carro03 = new Carro02 (132,10,80,80,'green')
let carro04 = new Carro02 (328,200,80,80,'yellow')
let carro05 = new Carro02 (651,120,80,80,'orange')
let estradaEsquerda = new Estrada (10,0,10,696,'white')
let estradaDireita = new Estrada (480,0,10,696,'white')
let estradaCentral01 = new Estrada (240,50,10,150,'white')
let estradaCentral02 = new Estrada (240,330,10,150,'white')
let estradaCentral03 = new Estrada (240,650,10,150,'white')

let texto01 = new Text
let texto02 = new Text

let motor = new Audio("./assets/motor.wav")
motor.volume = 0.8
motor.loop = true
motor.play()

let batida = new Audio("./assets/batida.wav")
batida.volume = 0.8
batida.loop = true

document.addEventListener('keydown', (e) => {
    console.log(e.key)
    if (e.key === 'a' || e.key === 'ArrowLeft') {
        carro.dirX -= 10
    }
    else if (e.key === 'd' || e.key === 'ArrowRight') {
        carro.dirX += 10
    }
    else if(e.key === 'w' || e.key === 'ArrowUp') {
        carro.dirY -= 10
    }
    else if (e.key === 's' || e.key === 'ArrowDown') {
        carro.dirY += 10
    }
    })

document.addEventListener('keyup', (e) => {
        if (e.key === 'a' || e.key === 'ArrowLeft') {
            carro.dirX = 0
        }
        else if (e.key === 'd' || e.key === 'ArrowRight') {
            carro.dirX = 0
        }
        else if (e.key === 'w' || e.key === 'ArrowUp') {
            carro.dirY = 0
        } 
        else if (e.key === 's' || e.key === 'ArrowDown') {
            carro.dirY = 0
        }
    })


function pontos(){
    if(carro.point(carro02)){
        carro.pts +=1
    }else if(carro.point(carro03)){
        carro.pts +=1
    }else if(carro.point(carro04)){
        carro.pts +=1
    }else if(carro.point(carro05)){
        carro.pts +=1
    }
}


function colisao(){
    if(carro.colisao(carro02)){
        carro.vida -= 1
        carro02.recomeca()
        batida.play()
    }else if(carro.colisao(carro03)){
        carro.vida -= 1
        carro03.recomeca()
        batida.play()
    }else if(carro.colisao(carro04)){
        carro.vida -= 1
        carro04.recomeca()
        batida.play()
    }else if(carro.colisao(carro05)){
        carro.vida -= 1
        carro05.recomeca()
        batida.play()
    }
}

        
function desenha() {
    texto01.desenhaTexto("Pontos:", 360, 40, 'white', '20px Arial')
    texto01.desenhaTexto(carro.pts, 450, 40, 'white', '20px Arial' )
    texto02.desenhaTexto("Vidas: ", 40, 40, 'white', '20px Arial')
    texto02.desenhaTexto(carro.vida, 120, 40, 'white', '26px Arial')
    estradaEsquerda.desenhaEstrada()
    estradaDireita.desenhaEstrada() 
    estradaCentral01.desenhaEstrada()
    estradaCentral02.desenhaEstrada()
    estradaCentral03.desenhaEstrada()
    carro.desenha_Objeto()
    carro02.desenha_Objeto()
    carro03.desenha_Objeto()
    carro04.desenha_Objeto()
    carro05.desenha_Objeto()
}

function atualiza(){
    motor.play()
    batida.play()
    estradaCentral01.moveEstrada()
    estradaCentral02.moveEstrada()
    estradaCentral03.moveEstrada()
    carro.atualizaCarro()
    carro05.atualizaCarro02()
    carro04.atualizaCarro02()
    carro03.atualizaCarro02()
    carro02.atualizaCarro02()
    pontos()
    colisao()
    recomeca() 
}

function main(){
    des.clearRect(0,0,500,700)
    desenha()
    atualiza()
}

setInterval(main,15)