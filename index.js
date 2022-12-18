let btn = document.querySelector('.profile__edit-button')
let btn_close = document.querySelector('.popup__exit-button')
let popup_cont = document.querySelector('.popup__container')
let main = document.querySelector('.main')
let wrap = document.querySelector('.wrap')
let popup_form = document.querySelector('.popup__form')
let like_btn = document.querySelector('.elements__like-button')
let like_btn_active = document.querySelector('.elements_like-button_active')
let form = document.querySelector('.popup__form')
let nameForm = document.querySelector('.popup__name')
let subNameForm = document.querySelector('.popup__subname')
const title = document.querySelector('.profile__title')
const subTitle = document.querySelector('.profile__subtitle')

function handleFormSubmit (evt) {
    evt.preventDefault() 
    nameValue = nameForm.value
    subNameValue = subNameForm.value
    title.textContent = nameValue
    subTitle.textContent = subNameValue
    wrap.classList.remove('popup')
    popup_cont.classList.remove('popup__container_active')
}
form.addEventListener('submit', handleFormSubmit); 

like_btn.addEventListener('click', function () {
    if (like_btn.classList.value == 'elements__like-button') {
    like_btn.classList.remove('elements__like-button')
    like_btn.classList.add('elements__like-button_active')
    } else {
        like_btn.classList.remove('elements__like-button_active')
        like_btn.classList.add('elements__like-button')
    }
})

btn.addEventListener('click', function () {
    wrap.classList.add('popup')
    popup_cont.classList.add('popup__container_active')
    nameForm.value = title.innerHTML
})

btn_close.addEventListener('click', function () {
    wrap.classList.remove('popup')
    popup_cont.classList.remove('popup__container_active')
})

