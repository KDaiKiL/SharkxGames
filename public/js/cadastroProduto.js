const inputName = document.querySelector('input#name');
const messageName = document.querySelector('span.messageName');


// name

function nameEvent(event) {
    if(event.target.value.length < 50 || event.target.value.length > 100) {

        inputName.style.border = "3px solid orange"
        inputName.style.backgroundColor = "#FFA53D"
        messageName.innerText = "precisar conter de 50 a 100 caracteres"
        messageName.style.color = "#FFA53D"

    }  else {

        inputName.style.border = "3px solid green"
        inputName.style.backgroundColor = "#66FC65"
        messageName.innerText = "nome valido"
        messageName.style.color = "#66FC65"

    }
    
}

inputName.addEventListener("keyup",nameEvent)

// Price

const priceInput = document.querySelector('input#preco')
const priceMessage = document.querySelector('span.messagePrice')

priceInput.onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890.".indexOf(chr) < 0)
       return false;
 };

function priceEvent(event) {
    if(event.target.value[priceInput.value.length -3] != ".") {  

        priceInput.style.border = "3px solid orange"
        priceInput.style.backgroundColor = "#FFA53D"
        priceMessage.innerText = "aceitamos somente valores com ponto : Ex.( 100.00 )"
        priceMessage.style.color = "#FFA53D"
     
    } else {
        priceInput.style.border = "3px solid green"
        priceInput.style.backgroundColor = "#66FC65"
        priceMessage.innerText = "preço valido"
        priceMessage.style.color = "#66FC65"
    }
}


priceInput.addEventListener('keyup',priceEvent)

// =============================================

//  description

const descriptionInput = document.querySelector('textarea#descricao')
const descriptionMessge = document.querySelector('span.messageDescription')

function descriptionEvent(event) {

    if (event.target.value.length != 0) {

        if(event.target.value.length < 3 || event.target.value.length > 500) {
            descriptionInput.style.border = "3px solid orange"
            descriptionInput.style.backgroundColor = "#FFA53D"
            descriptionMessge.innerText = "descrição inválido , deve conter de 3 a 500 caracterês"
            descriptionMessge.style.color = "#FFA53D"
         
        } else {
            descriptionInput.style.border = "3px solid green"
            descriptionInput.style.backgroundColor = "#66FC65"
            descriptionMessge.innerText = "descrição valido"
            descriptionMessge.style.color = "#66FC65"
        } 

    }
   
    
}


descriptionInput.addEventListener("keyup",descriptionEvent)

// ==============================

// Discount

const discountInput = document.querySelector('input#desconto')
const discountMessage = document.querySelector('span.messageDiscount')

discountInput.onkeypress = function (e) {
    var chr = String.fromCharCode(e.which);
    if ("1234567890.".indexOf(chr) < 0)
       return false;
}

function discountEvent(event) {

 


    if(event.target.value.length > 2 ) {
        discountInput.style.border = "3px solid orange"
        discountInput.style.backgroundColor = "#FFA53D"
        discountMessage.innerText = "desconto inválido , deve conter de 1 a 2 caracteres"
        discountMessage.style.color = "#FFA53D"
    } else {
        discountInput.style.border = "3px solid green"
        discountInput.style.backgroundColor = "#66FC65"
        discountMessage.innerText = "desconto valido"
        discountMessage.style.color = "#66FC65"
    }
}



discountInput.addEventListener("keyup",discountEvent)

// =============================

const btn = document.querySelector('button#btn')


btn.addEventListener("click",function(event) {
    if(inputName.value.length < 50 || inputName.value.length > 100 || priceInput.value[priceInput.value.length -3] != "."||
    descriptionInput.value.length < 3 || descriptionInput.value.length > 500 || discountInput.value.length > 2 ) {

        event.preventDefault()
        Swal.fire({
           icon: 'error',
           title: 'Informações invalidas',
           text: 'as informações não foram preenchidas corretamente',
           footer: 'deseja voltar para <a href="/home">home</a>'
        })

}
})