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




function emailOuvir(event)  {

   if(event.target.value.length < 3) {

      emailInput.style.border = "3px solid orange"
      emailInput.style.backgroundColor = "#FFA53D"
      
   } else {
      if( (emailInput.value[emailInput.value.length - 1] + emailInput.value[emailInput.value.length - 2] + emailInput.value[emailInput.value.length - 3] + emailInput.value[emailInput.value.length - 4] + emailInput.value[emailInput.value.length - 5] + emailInput.value[emailInput.value.length - 6] + emailInput.value[emailInput.value.length - 7] + emailInput.value[emailInput.value.length - 8] + emailInput.value[emailInput.value.length - 9] + emailInput.value[emailInput.value.length - 10]) != 'moc.liamg@') {
         emailInput.style.border = "3px solid orange"
         emailInput.style.backgroundColor = "#FFA53D"
      } else {
         emailInput.style.border = "3px solid green"
         emailInput.style.backgroundColor = "#66FC65"
      }
   }
}





emailInput.addEventListener("keyup",emailOuvir)

// telefone

const tell = document.querySelectorAll('input')[8]

tell.onkeypress = function(e) {
   var chr = String.fromCharCode(e.which);
   if ("1234567890".indexOf(chr) < 0)
     return false;
 };

tell.addEventListener("keyup", function(event) {
   if(event.target.value.length == 1) {
      this.value = '(' + this.value[0]
      if(this.value == '((' || this.value.length == 1) {
         this.value = ''
      }
   }
   if(event.target.value.length == 3) {
      this.value = this.value + ') '
   }
   if(this.value.length == 4) {
      this.value = this.value[0] + this.value[1]
   }
   if(this.value.length == 10) {
      this.value = this.value + ' - '
   }
   if(this.value.length == 12) {
      this.value = this.value[0] + this.value[1] + this.value[2] + this.value[3] + this.value[4] + this.value[5] + this.value[6] + this.value[7] + this.value[8]
   }
   if(this.value.length > 17) {
      this.value = this.value[0] + this.value[1] + this.value[2] + this.value[3] + this.value[4] + this.value[5] + this.value[6] + this.value[7] + this.value[8] + this.value[9] + this.value[10] + this.value[11] + this.value[12] + this.value[13] + this.value[14] + this.value[15] + this.value[16]
   }
})

btn.addEventListener('click', function(event) {
   tell.value = '55' + tell.value[1] + tell.value[2] + tell.value[5] + tell.value[6] + tell.value[7] + tell.value[8] + tell.value[9] + tell.value[13] + tell.value[14] + tell.value[15] + tell.value[16]

   if ( userName.value.length < 3 || nameInput.value.length < 2) { 
    event.preventDefault()

    Swal.fire({
        icon: 'error',
        title: 'Informações invalidas',
        text: 'as informações não foram preenchidas corretamente',
        footer: 'deseja voltar para <a href="/home">home</a>'
      })

    } 
    // if (nameInput.value.length < 2)  {
    //     event.preventDefault()

    //     Swal.fire({
    //         icon: 'error',
    //         title: 'Nome invalido',
    //         text: 'Os caracteres não foram alcançado',
    //         footer: 'desejar voltar para <a href="">home</a>'
    //       })
    // }   
    
    

    

})



