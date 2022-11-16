let divdata = document.querySelector(".vitrine")
    function criarVitrine(data){
    
    for (let i=0; i<data.length;i++){
        let produto = data[i]

        let divproduto = document.createElement("div")
        divproduto.classList.add("produto")
        divproduto.id = produto.id

        let divprodutodescription = document.createElement("div")
        divprodutodescription.classList.add("produto-header")
        divdata.appendChild(divproduto)
        
        let tagProduto = document.createElement("h4")
        tagProduto.innerText = produto.tag
        tagProduto.classList.add("tags")
        divprodutodescription.appendChild(tagProduto)
        
        let imgProduto = document.createElement("img")
        imgProduto.src = produto.img
        imgProduto.alt= produto.nameItem
        imgProduto.classList.add("foto")
        divprodutodescription.appendChild(imgProduto)
        
        let nomeProduto = document.createElement("h3")
        nomeProduto.innerText = produto.nameItem
        divprodutodescription.appendChild(nomeProduto)
        divproduto.appendChild(divprodutodescription)

        let precoProduto = document.createElement("h3")
        precoProduto.innerText = "R$" + produto.value.toFixed(2)
        divprodutodescription.appendChild(precoProduto)
            
        let descricaoProduto = document.createElement("p")
        descricaoProduto.innerText = produto.description
        divprodutodescription.appendChild(descricaoProduto)

        let buttonProduto = document.createElement("button")
        buttonProduto.innerText = produto.addCart
        buttonProduto.classList.add("buttonadd")
        buttonProduto.setAttribute("id",produto.id)
        divprodutodescription.appendChild(buttonProduto)
    }return
}criarVitrine(data)

//
//
//
//
//
//
//

let buttonProdutoadd = document.querySelectorAll(".buttonadd");
let ulcarrinho = document.querySelector(".ulcarrinho")
let quantidadeitens = 0 
let totalvalor = 0

    
for (let i=0; i< buttonProdutoadd.length;i++){
    let botao = buttonProdutoadd[i]
    
        botao.addEventListener('click',function(e){
        let idbotao = e.target.id
        let id = parseInt(idbotao)
        let produtocomp = procuraProduto(id)
        let cardCarrinho = criarCardCarrinho(produtocomp) 
         ulcarrinho.appendChild(cardCarrinho)
       
         quantidadeitens++
        
        
        if(quantidadeitens != 0 && quantidadeitens<2){
            let total = document.createElement("p")
            let quantidade = document.createElement("p")
            quantidade.id = "idquantidade"
            total.id = "idtotal" 
            somatorios.appendChild(quantidade)
            somatorios.appendChild(total)
           
            let newDiv= document.querySelector(".novadiv")
            newDiv.remove()
        }
        let teste1= document.querySelector("#idquantidade")
        let teste2= document.querySelector("#idtotal")
        teste1.innerHTML = "Quantidade: " + quantidadeitens 
    
        totalvalor = totalvalor + produtocomp.value
        teste2.innerText = "Total: R$" + totalvalor.toFixed(2)
        
    } 
    )
} 
        let somatorios = document.createElement("div")
        somatorios.classList.add("somat")
       divcarrinho = document.querySelector(".divcarrinho")
      

       somatorios.innerText =""
       
       divcarrinho = document.querySelector(".divcarrinho")
       divcarrinho.appendChild(somatorios)
       divcarrinho.appendChild(somatorios)

      
       divcarrinho = document.querySelector(".divcarrinho")
       
       divcarrinho.appendChild(somatorios)
       
function procuraProduto(id){
    for (let i=0; i< data.length; i++){
        let produto = data[i]
            if(produto.id == id){
                return produto
            }
    }
    
}

function criarCardCarrinho(produtocomp,id){
       procuraProduto(id)
       let li = document.createElement('div')
       li.id = 'li'
       let nProduto = document.createElement('h3')
       let pProduto = document.createElement('p')
       let buttonRem = document.createElement('button')
      
       pProduto.innerHTML = "R$" + produtocomp.value
       
       nProduto.innerHTML = produtocomp.nameItem
       
       buttonRem.innerHTML = "Remover"
       buttonRem.id = "rem" + produtocomp.id
       buttonRem.classList.add("botaoremover")

       buttonRem.addEventListener('click', function(e){
        let li = e.path[1];
        li.remove()
        quantidadeitens--
        quantidade = document.querySelector("#idquantidade")
        quantidade.innerHTML = "quantidade:" + quantidadeitens
        totalvalor = totalvalor - produtocomp.value
        total = document.querySelector("#idtotal")
        total.innerHTML = "total:R$" + totalvalor
        if(quantidadeitens ==0){
            quantidade.remove()
            total.remove()
            let novaDiv = document.createElement("div")
            novaDiv.classList.add("novadiv")
            let novaH = document.createElement("h3")
            let novaP = document.createElement("p")
            novaH.innerText= "Carrinho Vazio"
            novaP.innerText = "Adicione Itens"

            novaDiv.appendChild(novaH)
            novaDiv.appendChild(novaP)
            ulcarrinho.appendChild(novaDiv)
        }
        })

       li.appendChild(nProduto)
       li.appendChild(pProduto)
       li.appendChild(buttonRem)
       return li
    }
    
