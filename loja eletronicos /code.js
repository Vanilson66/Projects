"use strict";
let idNoCarrinho = []
let itensNoCarrinho = []
let ePrimeiro = true

const fazerGet = async () => {
    //pega a div onde será adicionado os elementos
    let place = document.getElementsByClassName("container")[0]
   

    //Retorna um objeto com o nome e a url
    const obg = await fetch("https://exercicio.herokuapp.com/ ")
    const obgJson = await obg.json()
    criarCard(obgJson)

}

const criarCard = (dados)=>{


    //Faz um loop pegando as infos
    dados.forEach((elemento, index) => {

        
        //Cria os elementos do card
        let container = document.querySelector('.container');
        let card = document.createElement("div");

        let nomeDoProduto = document.createElement('h3');
        nomeDoProduto.innerHTML = elemento.title;

        let img = document.createElement("img");
        img.src = elemento.image;

        let descricao   = document.createElement("p");
        descricao.innerHTML = elemento.description;

        let valor = document.createElement('p');
        valor.innerHTML = elemento.price;

        let adicionarCarrinho = document.createElement("button");
        adicionarCarrinho.innerHTML = "Adicionar ao Carrinho"
        adicionarCarrinho.classList.add("addBtn") 

        card.appendChild(nomeDoProduto);
        card.appendChild(descricao);
        card.appendChild(valor)
        card.appendChild(img);
        card.appendChild(adicionarCarrinho)

        container.appendChild(card);  
        
        
    })

    adicionarCarrinho(dados)
}

const criarItemNoCarrinho = dados => {
    let itensContainer  = document.querySelector('.itens')

    let linha = document.createElement('div')
    linha.classList.add('linha')

    let quantidadeDeItem = document.createElement('div')
    quantidadeDeItem.classList.add('quantidadeItem')

    let img = document.createElement('img')
    img.src = dados.image

    let pT = document.createElement('p')
    pT.innerHTML = 'Quantidade'

    let btnAdd = document.createElement('button')
    btnAdd.classList.add('add')
    btnAdd.innerHTML = "+"

    let pQ = document.createElement('p')
    pQ.classList.add('pQ')
    pQ.innerHTML = dados.qntSelect

    let btnRemove = document.createElement('button')
    btnRemove.classList.add('remove')
    btnRemove.innerHTML = "-"


    quantidadeDeItem.appendChild(pT)
    quantidadeDeItem.appendChild(btnAdd)
    quantidadeDeItem.appendChild(pQ)
    quantidadeDeItem.appendChild(btnRemove)

    linha.appendChild(img)
    linha.appendChild(quantidadeDeItem)

    itensContainer.appendChild(linha)
}


const atualizarItemNoCarrinho = (dados, posicao) =>{
    let item = document.querySelectorAll('.pQ')
    item[posicao ].innerHTML = dados.qntSelect
}


const verificaCarrinho = (dados) => {
    let itensContainer  = document.querySelector('.itens')
    if(!ePrimeiro){
        if(idNoCarrinho.includes(dados.id)){
            dados.qntSelect++
            atualizarItemNoCarrinho(dados, idNoCarrinho.indexOf(dados.id))
        }else{
            dados.qntSelect++
            criarItemNoCarrinho(dados)
            idNoCarrinho.push(dados.id)
        }
    }else{
        itensNoCarrinho.push(dados)
        dados.qntSelect++
        criarItemNoCarrinho(dados)
        ePrimeiro = false
        idNoCarrinho.push(dados.id)
    }
}


const adicionarCarrinho = (dados) => {
    let btnAdicionarCarrinho = document.querySelectorAll('.addBtn')
    btnAdicionarCarrinho.forEach((button, index)=>{
        button.addEventListener('click', ()=>{
            verificaCarrinho(dados[index])
            
        })
    })
}

const atualizaQuantidade = quantidade => {
    let dQuantidade = document.querySelector('#quantidade')
    dQuantidade.innerHTML = ""
    dQuantidade.innerHTML = quantidade

    (itensNoCarrinho)
}
fazerGet()