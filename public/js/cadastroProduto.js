const inputName = document.querySelector('input#name');
const messageName = document.querySelector('span.messageName');


// name

function nameEvent(event) {
    if(event.target.value.length < 20 || event.target.value.length > 20) {

        inputName.style.border = "3px solid orange"
        inputName.style.backgroundColor = "#FFA53D"
        messageName.innerText = "precisar conter 20 caracteres"
        messageName.style.color = "#FFA53D"

    }  else {

        inputName.style.border = "3px solid green"
        inputName.style.backgroundColor = "#66FC65"
        messageName.innerText = "nome valido"
        messageName.style.color = "#66FC65"

    }
    
}

// Price

const priceInput = document.querySelector('input#preco')
const priceMessage = document.querySelector('span.messagePrice')



priceInput.addEventListener('keyup',)



inputName.addEventListener("keyup",nameEvent)