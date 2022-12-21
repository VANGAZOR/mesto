const btnEdit = document.querySelector('.profile__edit-button')
const btnClose = document.querySelector('.popup__exit-button')
const popupOn = document.querySelector('.popup')
const like_btn = document.querySelector('.elements__like-button')
const like_btn_active = document.querySelector('.elements_like-button_active')
const form = document.querySelector('.popup__form')
const nameForm = document.querySelector('.popup__name')
const subNameForm = document.querySelector('.popup__subname')
const title = document.querySelector('.profile__title')
const subTitle = document.querySelector('.profile__subtitle')

function handleFormSubmit (evt) {
    evt.preventDefault() 
    nameValue = nameForm.value
    subNameValue = subNameForm.value
    title.textContent = nameValue
    subTitle.textContent = subNameValue
    popupOn.classList.remove('popup__active')
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

btnEdit.addEventListener('click', function () {
    popupOn.classList.add('popup__active')
    nameForm.value = title.innerHTML
})

btnClose.addEventListener('click', function () {
    popupOn.classList.remove('popup__active')
})

