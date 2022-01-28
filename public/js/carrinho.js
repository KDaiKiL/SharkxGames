const carrinhos = document.getElementsByClassName('caixaDoCarrinho')
const ofertas = document.getElementById("ofertas");

for( let carrinho of carrinhos) {
    carrinho.addEventListener('mouseover', function() {
        this.style.boxShadow = "3px 4px 4px rgb(26 28 47)"
        this.style.cursor = "pointer"
        this.style.transform = "scale(1.02)"
        this.children[2].children[0].style.fontSize = "17px"
        this.children[2].children[1].style.fontSize = "32px"
    })
    
    carrinho.addEventListener('mouseout', function() {
        this.style.boxShadow = ""
        this.style.transform = ""
        this.children[2].children[0].style.fontSize = ""
        this.children[2].children[1].style.fontSize = ""
    })
}

ofertas.addEventListener("mouseover", function () {
    this.classList.add("btnHeader");
    this.style.cursor = "pointer";
  });
  ofertas.addEventListener("click", function () {
      
      if (window.location.href != "http://localhost:3000/home") {
          window.location.replace("http://localhost:3000/home");
    }
    
      if(window.location.href == "http://localhost:3000/home") {
          window.scroll({
              top: 800,
              behavior: "smooth",
          })
    }
  });
  
