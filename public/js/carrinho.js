const carrinhos = document.getElementsByClassName('caixaDoCarrinho')

for(let carrinho of carrinhos) {
    carrinho.addEventListener('mouseover', function() {
        this.children[2].children[0].style.cssText = "font-size: 14px; transition: all 0.08s"
        this.children[2].children[1].style.cssText = "font-size: 29px; transition: all 0.08s"
    })
    
    carrinho.addEventListener('mouseout', function() {
        this.style.filter = ""
        this.style.transform = ""
        this.children[2].children[0].style.fontSize = ""
        this.children[2].children[1].style.fontSize = ""
    })
}
