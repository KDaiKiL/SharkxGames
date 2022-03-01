
// User name

const userName = document.querySelector('input#userName')
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




function emailOuvir(event)  {

   if(event.target.value.length > 3) {

      emailInput.style.border = "3px solid orange"
      emailInput.style.backgroundColor = "#FFA53D"
      

   }
}





emailInput.addEventListener("keyup",emailOuvir)