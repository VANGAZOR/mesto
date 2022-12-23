const btnEdit = document.querySelector('.profile__edit-button')
const btnClose = document.querySelector('.popup__exit-button')
const popupOn = document.querySelector('.popup')
// const like_btn = document.querySelector('.elements__like-button')
// const like_btn_active = document.querySelector('.elements_like-button_active')
const form = document.querySelector('.popup__form')
const nameForm = document.querySelector('.popup__input_type_name')
const subNameForm = document.querySelector('.popup__input_type_subname')
const title = document.querySelector('.profile__title')
const subTitle = document.querySelector('.profile__subtitle')

function handleFormSubmit (evt) {
    evt.preventDefault() 
    title.textContent = nameForm.value
    subTitle.textContent = subNameForm.value
    popupOn.classList.remove('popup_active')
}
form.addEventListener('submit', handleFormSubmit); 

// like_btn.addEventListener('click', function () {
//     if (like_btn.classList.value == 'elements__like-button') {
//     like_btn.classList.remove('elements__like-button')
//     like_btn.classList.add('elements__like-button_active')
//     } else {
//         like_btn.classList.remove('elements__like-button_active')
//         like_btn.classList.add('elements__like-button')
//     }
// })

function openPopup() {
    popupOn.classList.add('popup_active')
    nameForm.value = title.textContent
    subNameForm.value = subTitle.textContent
}

function closePopup() {
    popupOn.classList.remove('popup_active')
}

btnEdit.addEventListener('click', openPopup)
btnClose.addEventListener('click', closePopup)