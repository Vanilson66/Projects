let quantidade = 0
const corPadrao = "images/DEGRAU.png"
let corPrimeiroDegrau = "images/DEGRAU.png"
let corUltimoDegrau = "images/DEGRAU.png"



const alterarQuantidade = comando => {
    comando == "aumentar"?
        quantidade++
            :
        quantidade--

    document.querySelector(".quantidade").innerHTML = quantidade
}



const alterarCor = (posicao,cor) => {
    posicao === 1?
        corPrimeiroDegrau = cor
            :
        corUltimoDegrau = cor
}



const criarEscada = () => {
    document.querySelector(".result").innerHTML = ""

    if(quantidade > 0){
        criarDegrau(corPrimeiroDegrau)
    }
    for(let i = 2; i < quantidade; i++){
        criarDegrau(corPadrao)
    }

    if(quantidade > 1){
        criarDegrau(corUltimoDegrau)
    }
}



const criarDegrau = src => {
    img = document.createElement("img")
    img.src = src

    document.querySelector(".result").appendChild(img)    
}