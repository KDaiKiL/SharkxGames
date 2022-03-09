const btn = document.querySelector('#botaoDeCadastro')

// User name

const userName = document.querySelector('#userName')
const userNameText = document.querySelector('.userNameText')


function userNameOuvir(event) {

   if (event.target.value.length < 3) {

      userName.style.border = "3px solid orange"
      userName.style.backgroundColor = "#FFA53D"
      userNameText.innerText = "Usuario invalido"
      userNameText.style.color = "#FFA53D"


   } else {
      userName.style.border = "3px solid green"
      userName.style.backgroundColor = "#66FC65"
      userNameText.innerText = "Usuario valido"
      userNameText.style.color = "#66FC65"

   }
}


userName.addEventListener("keyup", userNameOuvir)


// ----------------------------------------------------------------

//Nome

const nameInput = document.querySelector('input#name')
const nameInputText = document.querySelector('.nameInputText')

function NameOuvir(event) {

   if (event.target.value.length < 2) {
      nameInput.style.border = "3px solid orange"
      nameInput.style.backgroundColor = "#FFA53D"
      nameInputText.innerText = "Nome invalido , precisa conter 2 ou mais caracteres"
      nameInputText.style.color = "#FFA53D"


   } else {
      nameInput.style.border = "3px solid green"
      nameInput.style.backgroundColor = "#66FC65"
      nameInputText.innerText = "Nome valido"
      nameInputText.style.color = "#66FC65"

   }


}

nameInput.addEventListener("keyup", NameOuvir)

//-----------------------------------------------


//Sobrenome

const sobrenomeInput = document.querySelector('input#sobrenomeInput')
const sobrenomeInputText = document.querySelector('.sobrenomeInputText')

function sobrenomeOuvir(event) {

   if (event.target.value.length < 6) {
      sobrenomeInput.style.border = "3px solid orange"
      sobrenomeInput.style.backgroundColor = "#FFA53D"
      sobrenomeInputText.innerText = "sobrenome invalido , precisa conter 5 ou mais caracteres"
      sobrenomeInputText.style.color = "#FFA53D"


   } else {
      sobrenomeInput.style.border = "3px solid green"
      sobrenomeInput.style.backgroundColor = "#66FC65"
      sobrenomeInputText.innerText = "Sobrenome valido"
      sobrenomeInputText.style.color = "#66FC65"

   }


}

sobrenomeInput.addEventListener("keyup", sobrenomeOuvir)

//-------------------------------

// E-mail 

const emailInput = document.querySelector('input#emailInput')




function emailOuvir(event) {

   if (event.target.value.length < 3) {

      emailInput.style.border = "3px solid orange"
      emailInput.style.backgroundColor = "#FFA53D"

   } else {
      if ((emailInput.value[emailInput.value.length - 1] + emailInput.value[emailInput.value.length - 2] + emailInput.value[emailInput.value.length - 3] + emailInput.value[emailInput.value.length - 4] + emailInput.value[emailInput.value.length - 5] + emailInput.value[emailInput.value.length - 6] + emailInput.value[emailInput.value.length - 7] + emailInput.value[emailInput.value.length - 8] + emailInput.value[emailInput.value.length - 9] + emailInput.value[emailInput.value.length - 10]) != 'moc.liamg@') {
         emailInput.style.border = "3px solid orange"
         emailInput.style.backgroundColor = "#FFA53D"
      } else {
         emailInput.style.border = "3px solid green"
         emailInput.style.backgroundColor = "#66FC65"
      }
   }
}





emailInput.addEventListener("keyup", emailOuvir)

// telefone

const tell = document.querySelectorAll('input')[8]
const tellText = document.querySelector('span.tellInputText')

tell.onkeypress = function (e) {
   var chr = String.fromCharCode(e.which);
   if ("1234567890".indexOf(chr) < 0)
      return false;
};

tell.addEventListener("keyup", function (event) {

   if (event.target.value.length < 17) {

      if (event.target.value.length == 1) {
         this.value = '(' + this.value[0]
         if (this.value == '((' || this.value.length == 1) {
            this.value = ''
         }
      }
      if (event.target.value.length == 3) {
         this.value = this.value + ') '
      }
      if (this.value.length == 4) {
         this.value = this.value[0] + this.value[1]
      }
      if (this.value.length == 10) {
         this.value = this.value + ' - '
      }
      if (this.value.length == 12) {
         this.value = this.value[0] + this.value[1] + this.value[2] + this.value[3] + this.value[4] + this.value[5] + this.value[6] + this.value[7] + this.value[8]
      }
      if (this.value.length > 17) {
         this.value = this.value[0] + this.value[1] + this.value[2] + this.value[3] + this.value[4] + this.value[5] + this.value[6] + this.value[7] + this.value[8] + this.value[9] + this.value[10] + this.value[11] + this.value[12] + this.value[13] + this.value[14] + this.value[15] + this.value[16]
      }

      if (event.target.value.length < 17) {
         tell.style.border = "3px solid orange"
         tell.style.backgroundColor = "#FFA53D"
         tellText.innerText = "numero invalido"
         tellText.style.color = "#FFA53D"

      }

   } else {
      tell.style.border = "3px solid green"
      tell.style.backgroundColor = "#66FC65"
      tellText.innerText = "telefone valido"
      tellText.style.color = "#66FC65"

   }


})

// senha 

const senhaInput = document.querySelector('input#senha')
const senhaConfirmarInput = document.querySelector('input#senhaConfirmar')
const senhaInputText = document.querySelector('span.senhaInputText')


function senhaOuvir(event) {

   if (event.target.value.length < 4 ) {
      senhaInput.style.border = "3px solid orange"
      senhaInput.style.backgroundColor = "#FFA53D"
      senhaInputText.innerText = "senha invalido , precisa conter 8 ou mais caracteres , é ser igual a confirmar senha"
      senhaInputText.style.color = "#FFA53D"
      


   } else {
      senhaInput.style.border = "3px solid green"
      senhaInput.style.backgroundColor = "#66FC65"
      senhaInputText.innerText = "senha valida"
      senhaInputText.style.color = "#66FC65"
     

   }

}




senhaInput.addEventListener("keyup", senhaOuvir)

// ==========================================


// CPF


const cpfInput = document.querySelector('input#cpfInput')
const cpfInputText = document.querySelector('span.cpfInputText')

cpfInput.onkeypress = function (e) {
   var chr = String.fromCharCode(e.which);
   if ("1234567890".indexOf(chr) < 0)
      return false;
};


function cpfOuvir(event) {

   if (event.target.value.length < 14) {

      if (event.target.value.length == 3) {
         this.value = this.value + "."
      }

      if (event.target.value.length == 7) {
         this.value = this.value + "."
      }

      if (event.target.value.length == 11) {
         this.value = this.value + "-"
      }

      if (event.target.value.length < 14) {
         cpfInput.style.border = "3px solid orange"
         cpfInput.style.backgroundColor = "#FFA53D"
         cpfInputText.innerText = "CPF invalido"
         cpfInputText.style.color = "#FFA53D"
      }

   } else {

      cpfInput.style.border = "3px solid green"
      cpfInput.style.backgroundColor = "#66FC65"
      cpfInputText.innerText = "CPF valido"
      cpfInputText.style.color = "#66FC65"
   }

}



cpfInput.addEventListener("keyup", cpfOuvir)




// ==========================================

// CEP 

const cepInput = document.querySelector('input#cepInput')
const cepInputText = document.querySelector('span.cepInputText')


cepInput.onkeypress = function (e) {
   var chr = String.fromCharCode(e.which);
   if ("1234567890".indexOf(chr) < 0)
      return false;
};

function cepOuvir(event) {

   if (event.target.value.length < 11) {

      if (event.target.value.length == 5) {
         this.value = this.value + " - "
      }
      cepInput.style.border = "3px solid orange"
      cepInput.style.backgroundColor = "#FFA53D"
      cepInputText.innerText = "CEP invalido"
      cepInputText.style.color = "#FFA53D"

   } else {

      cepInput.style.border = "3px solid green"
      cepInput.style.backgroundColor = "#66FC65"
      cepInputText.innerText = "CEP invalido"
      cepInputText.style.color = "#66FC65"
   }

}

cepInput.addEventListener("keyup", cepOuvir)

// ==========================================

// Endereço

const enderecoInput = document.querySelector('input#enderecoInput')
const enderecoInputText = document.querySelector('span.enderecoInputText')

function enderecoOuvir(event) {
   if (event.target.value.length < 8) {

      if (event.target.value.length == 0) {
         this.value = this.value + "Rua: "
      }
      enderecoInput.style.border = "3px solid orange"
      enderecoInput.style.backgroundColor = "#FFA53D"
      enderecoInputText.innerText = "endereço invalido"
      enderecoInputText.style.color = "#FFA53D"

   } else {

      enderecoInput.style.border = "3px solid green"
      enderecoInput.style.backgroundColor = "#66FC65"
      enderecoInputText.innerText = "CEP invalido"
      enderecoInputText.style.color = "#66FC65"
   }
}


enderecoInput.addEventListener('keyup', enderecoOuvir)

// =========================================

// cidade 

const cidadeInput = document.querySelector('input#cidadeInput')
const cidadeInputText = document.querySelector('span.cidadeInputText')

function cidadeOuvir(event) {

   if (event.target.value.length < 2) {
      cidadeInput.style.border = "3px solid orange"
      cidadeInput.style.backgroundColor = "#FFA53D"
      cidadeInputText.innerText = "cidade invalido"
      cidadeInputText.style.color = "#FFA53D"
   } else {
      cidadeInput.style.border = "3px solid green"
      cidadeInput.style.backgroundColor = "#66FC65"
      cidadeInputText.innerText = "cidade valida"
      cidadeInputText.style.color = "#66FC65"
   }
}

cidadeInput.addEventListener("keyup", cidadeOuvir)

// =========================================

// Bairro 

const bairroInput = document.querySelector("input#bairroInput")
const bairroInputText = document.querySelector("span.bairroInputText")

function bairroOuvir(event) {

   if (event.target.value.length < 3) {
      bairroInput.style.border = "3px solid orange"
      bairroInput.style.backgroundColor = "#FFA53D"
      bairroInputText.innerText = "bairro invalido"
      bairroInputText.style.color = "#FFA53D"
   } else {
      bairroInput.style.border = "3px solid green"
      bairroInput.style.backgroundColor = "#66FC65"
      bairroInputText.innerText = "bairro valido"
      bairroInputText.style.color = "#66FC65"
   }
}

bairroInput.addEventListener("keyup", bairroOuvir)

// =========================================

// Referencia 

const referenciaInput = document.querySelector('input#referenciaInput')
const referenciaInputText = document.querySelector('span.referenciaInputText')

function referenciaOuvir(event) {
   if (event.target.value.length < 5) {
      referenciaInput.style.border = "3px solid orange"
      referenciaInput.style.backgroundColor = "#FFA53D"
      referenciaInputText.innerText = "referência invalida"
      referenciaInputText.style.color = "#FFA53D"
   } else {
      referenciaInput.style.border = "3px solid green"
      referenciaInput.style.backgroundColor = "#66FC65"
      referenciaInputText.innerText = "refêrencia valida"
      referenciaInputText.style.color = "#66FC65"
   }
}


referenciaInput.addEventListener("keyup", referenciaOuvir)

// =========================================

// numero

const numeroInput = document.querySelector('input#numeroInput')
const numeroInputText = document.querySelector('span.numeroInputText')

numeroInput.onkeypress = function (e) {
   var chr = String.fromCharCode(e.which);
   if ("1234567890".indexOf(chr) < 0)
      return false;
};

function numeroOuvir(event) {
   if (event.target.value.length < 3 || event.target.value.length >= 5) {
      numeroInput.style.border = "3px solid orange"
      numeroInput.style.backgroundColor = "#FFA53D"
      numeroInputText.innerText = "numero invalido"
      numeroInputText.style.color = "#FFA53D"
   } else {
      numeroInput.style.border = "3px solid green"
      numeroInput.style.backgroundColor = "#66FC65"
      numeroInputText.innerText = "numero valido"
      numeroInputText.style.color = "#66FC65"
   }
}

numeroInput.addEventListener("keyup", numeroOuvir)

// =========================================

// Complemento 

const complementoInput = document.querySelector('input#complementoInput')
const complementoInputText = document.querySelector('span.complementoInputText')

function complementoOuvir(event) {
   if(event.target.value.length < 5) {
      complementoInput.style.border = "3px solid orange"
      complementoInput.style.backgroundColor = "#FFA53D"
      complementoInputText.innerText = "complemento invalido"
      complementoInputText.style.color = "#FFA53D"
   } else {
      complementoInput.style.border = "3px solid green"
      complementoInput.style.backgroundColor = "#66FC65"
      complementoInputText.innerText = "complemento valido"
      complementoInputText.style.color = "#66FC65"
   }
}

complementoInput.addEventListener("keyup",complementoOuvir)

// =========================================

btn.addEventListener('click', function (event) {
   tell.value = '55' + tell.value[1] + tell.value[2] + tell.value[5] + tell.value[6] + tell.value[7] + tell.value[8] + tell.value[9] + tell.value[13] + tell.value[14] + tell.value[15] + tell.value[16]
   
   if (userName.value.length < 3 || nameInput.value.length < 2 || sobrenomeInput.value.length < 6 || tell.value.length < 17
      || emailInput.value.length < 3 || senhaInput.value.length < 4 ||  cpfInput.value.length < 14 || cepInput.value.length < 11 
      || enderecoInput < 8 || cidadeInput < 2 || bairroInput.value < 3 ||
      referenciaInput.value.length < 5 || numeroInput.value.length < 3 || numeroInput.value.length >= 5
   ) {

      event.preventDefault()

      Swal.fire({
         icon: 'error',
         title: 'Informações invalidas',
         text: 'as informações não foram preenchidas corretamente',
         footer: 'deseja voltar para <a href="/home">home</a>'
      })

   }

})