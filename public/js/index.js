const pageAtual = window.location.href;
const caixas = document.getElementsByClassName("caixa");
const ofertas = document.getElementById("ofertas");

for (let caixa of caixas) {
    caixa.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.02)";
    this.style.cursor = "pointer";
    this.children[1].children[0].style.color = "#e0e2f4";
    this.children[1].children[0].style.fontWeight = "400";
  });

  caixa.addEventListener("mouseout", function () {
    this.style.transform = "scale(1)";
    this.children[1].children[0].style.color = "";
    this.children[1].children[0].style.fontWeight = "";
  });
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
