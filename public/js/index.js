const pageAtual = window.location.href;
const caixas = document.getElementsByClassName("caixa");
const names = document.querySelectorAll('.produtoNome')

for(let name of names) {
  if(name.innerText.length > 59) {
    name.innerText = name.innerText[0] + name.innerText[1] + name.innerText[2] + name.innerText[3] + name.innerText[4] + name.innerText[5] + name.innerText[6] + name.innerText[7] + name.innerText[8] + name.innerText[9] + name.innerText[10] + name.innerText[11] + name.innerText[12] + name.innerText[13] + name.innerText[14] + name.innerText[15] + name.innerText[16] + name.innerText[17] + name.innerText[18] + name.innerText[19] + name.innerText[20] + name.innerText[21] + name.innerText[22] + name.innerText[23] + name.innerText[24] + name.innerText[25] + name.innerText[26] + name.innerText[27] + name.innerText[28] + name.innerText[29] + name.innerText[30] + name.innerText[31] + name.innerText[32] + name.innerText[33] + name.innerText[34] + name.innerText[35] + name.innerText[36] + name.innerText[37] + name.innerText[38] + name.innerText[39] + name.innerText[40] + name.innerText[41] + name.innerText[42] + name.innerText[43] + name.innerText[44] + name.innerText[45] + name.innerText[46] + name.innerText[47] + name.innerText[48] + name.innerText[49] + name.innerText[50] + name.innerText[51] + name.innerText[52] + name.innerText[53] + name.innerText[54] + name.innerText[55] + name.innerText[56] + '...'
  }
}

for (let caixa of caixas) {
    caixa.addEventListener("mouseover", function () {
    this.style.transform = "scale(1.02)";
    this.style.cursor = "pointer";
    this.children[1].children[0].style.color = "#e0e2f4";
  });

  caixa.addEventListener("mouseout", function () {
    this.style.transform = "";
    this.children[1].children[0].style.color = "";
  });
}
