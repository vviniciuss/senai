function calcula(){
    let preco_tomate = 5.32 
    let preco_cebola = 3.32
    let preco_aipim = 2.87 
    let preco_batata = 4.43 
    let preco_cenoura = 3.59 
    let preco_chuchu = 1.79 
    let total = 0.0

    let res = document.getElementById('res') 

   
    let qtde_tomate = Number(document.getElementById('qtde_tomate').value)
    console.log(qtde_tomate)
    let qtde_cebola = Number(document.getElementById('qtde_cebola').value)
    console.log(qtde_cebola)
    let qtde_aipim = Number(document.getElementById('qtde_aipim').value)
    console.log(qtde_aipim)
    let qtde_batata = Number(document.getElementById('qtde_batata').value)
    console.log(qtde_batata)
    let qtde_cenoura = Number(document.getElementById('qtde_cenoura').value)
    console.log(qtde_cenoura)
    let qtde_chuchu = Number(document.getElementById('qtde_chuchu').value)
    console.log(qtde_chuchu)

    if((qtde_tomate!=0)&&(qtde_tomate!=0)&&(qtde_cebola!=0)&&(qtde_aipim!=0)&&(qtde_batata!=0)&&(qtde_cenoura!=0)&&(qtde_chuchu!=0)){
        total = total = (preco_tomate*qtde_tomate) + (preco_cebola*qtde_cebola) + (preco_aipim*qtde_aipim) + (preco_batata*qtde_batata) + (preco_cenoura*qtde_cenoura) + (preco_chuchu*qtde_chuc1hu)
    }else{
        console.log('a quantidade de produto não foi didgitada')
    }
    
    console.log(total)
    res.innerHTML = 'A soma total é R$ ' +  total.toFixed(2)
    res.style.color = 'blue'
    res.style.fontSize = '20px'
}