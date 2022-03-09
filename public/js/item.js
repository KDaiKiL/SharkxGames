const img = document.getElementById('files')
const image = document.querySelector('label img')
const labelImg = document.querySelector('label')
const body = document.querySelector('body')
const btn = document.querySelector('form button')

window.addEventListener('load', () => {
    if(img.value != '') {
        image.src = '/images/blue-shark-logo.png'
        labelImg.innerHTML += `<span>Sua imagem foi exportada!</span>`
    }
})

img.addEventListener('change', function() {
    if(img.value != '') {
        image.src = '/images/blue-shark-logo.png'
        labelImg.innerHTML += `<span>Sua imagem foi exportada!</span>`
    }
})

btn.addEventListener('click', function(event) {
    
})