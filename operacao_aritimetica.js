function soma(){
    let resp = 0
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let escreva = document.getElementById('escreva')

    resp = num1 + num2

    escreva.innerHTML = 'O resultado é = ' + resp
 
}
function subtrai(){
    let resp = 0
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let escreva = document.getElementById('escreva')

    resp = num1 - num2

    escreva.innerHTML = 'O resultado é = ' + resp
 
}
function multiplicacao(){
    let resp = 0
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let escreva = document.getElementById('escreva')

    resp = num1 * num2

    escreva.innerHTML = 'O resultado é = ' + resp
 
}
function divisao(){
    let resp = 0
    let num1 = Number(document.getElementById('num1').value)
    let num2 = Number(document.getElementById('num2').value)
    let escreva = document.getElementById('escreva')

    resp = num1 / num2

    escreva.innerHTML = 'O resultado é = ' + resp
 
}