const form = document.querySelector('#form')
const closeForm = form.querySelector('#close-form')
const openForm = document.querySelector('#open-form')

closeForm.addEventListener('click',()=>{
    form.classList.remove('show-form')
})

openForm.addEventListener('click',()=>{
    form.classList.add('show-form')
})

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault()

    const email = document.getElementById('email')
    const phone = document.getElementById('phone')
    const consent = document.getElementById('consent')
    const emailError = document.getElementById('emailError')
    const phoneError = document.getElementById('phoneError')
    const consentError = document.getElementById('consentError')
    const formGroup = document.getElementById('formGroup')
    const header = this.querySelector('h2')
    const textInfo = this.querySelector('p')

    let isValid = true

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email.value)) {
        emailError.style.display = 'block'
        isValid = false
    } else {
        emailError.style.display = 'none';
    }

    const phoneRegex = /^(\+7|8)[\s(]?\d{3}[)\s]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/
    if (!phoneRegex.test(phone.value)) {
        phoneError.style.display = 'block'
        isValid = false
    } else {
        phoneError.style.display = 'none'
    }

    if (!consent.checked) {
        consentError.style.display = 'block'
        isValid = false
    } else {
        consentError.style.display = 'none'
    }

    if (isValid) {
        formGroup.innerHTML = ''
        header.innerText = 'Спасибо за заявку'
        textInfo.innerText = 'Наши менеджеры свяжутся с вами в течении 5 минут'
    }
})