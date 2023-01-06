const likeButton = document.querySelector('.elements__like-button')
const likeButtonActive = document.querySelector('.elements__like-button_active')
const form = document.querySelector('.popup__form')
const formAddPic = document.querySelector('.popup_type_add-pic')
const nameForm = document.querySelector('.popup__input_type_name')
const subNameForm = document.querySelector('.popup__input_type_subname')
const title = document.querySelector('.profile__title')
const subTitle = document.querySelector('.profile__subtitle')
const submitPost = document.querySelector('.popup_type_edit-profile-submit')
const picture = document.querySelector('.popup__img')

const popupAddOn = document.querySelector('.popup_type_add')
const popupEditOn = document.querySelector('.popup_type_edit-profile')
const popupPicOn = document.querySelector('.popup_type_pic')
const popupContainerPic = popupPicOn.querySelector('.popup__container-pic')
const popupContainerAdd = popupAddOn.querySelector('.popup__container')
const popupContainerEdit = popupEditOn.querySelector('.popup__container')

const buttonOpenEditPopup = document.querySelector('.profile__edit-button')
const buttonCloseEditPopup = popupContainerEdit.querySelector('.popup__exit-button')
const buttonOpenAddPopup = document.querySelector('.profile__image-button')
const buttonCloseAddPopup = popupContainerAdd.querySelector('.popup__exit-button')
const buttonClosePicPopup = popupContainerPic.querySelector('.popup__exit-button')

const elementsContainer = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template').content
const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true)

const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
  ]; 
  
for (let i = 0; i < initialCards.length; i+=1) {
const elementsContainer = document.querySelector('.elements')
const cardTemplate = document.querySelector('#card-template').content
const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
cardElement.querySelector('.elements__title').textContent = initialCards[i].name
cardElement.querySelector('.elements__image').src = initialCards[i].link
elementsContainer.append(cardElement)
cardElement.querySelector('.elements__image').addEventListener('click', function(e) {
popupPicOn.classList.add('popup_active')
const linkPic = cardElement.querySelector('.elements__image').src
const textPic = cardElement.querySelector('.elements__title').textContent
popupContainerPic.querySelector('.popup__img').src = linkPic
popupContainerPic.querySelector('.popup__img-title').textContent = textPic
})
cardElement.querySelector('.elements__trash-button').addEventListener('click', function(e) {
const item = cardElement.querySelector('.elements__trash-button').closest('.elements__card')
item.remove()
})
cardElement.querySelector('.elements__like-button').addEventListener('click', function (e) { 
e.target.classList.toggle('elements__like-button_active')
e.target.classList.toggle('elements__like-button')}); 
}

const handleFormSubmit = (evt) => {
  evt.preventDefault() 
  title.textContent = nameForm.value
  subTitle.textContent = subNameForm.value
  closeEditPopup()
}
form.addEventListener('submit', handleFormSubmit); 


// const openPopup = (popupType) => {
//   popupType.parentElement.classList.add('popup_active')
// }

// const closePopup = (popupType) => {
//   popupType.parentElement.classList.remove('popup_active')
// }

const openEditPopup = () => {
  popupEditOn.classList.add('popup_active')
  nameForm.value = title.textContent
  subNameForm.value = subTitle.textContent
}

const closeEditPopup = () => {
  popupEditOn.classList.remove('popup_active')
}

buttonOpenEditPopup.addEventListener('click', openEditPopup)
buttonCloseEditPopup.addEventListener('click', closeEditPopup)

const openAddPopup = () => {
  popupAddOn.classList.add('popup_active')
}

const closeAddPopup = () => {
  popupAddOn.classList.remove('popup_active')
}

buttonOpenAddPopup.addEventListener('click', openAddPopup)
buttonCloseAddPopup.addEventListener('click', closeAddPopup)

const addCard = (evt) => {
  evt.preventDefault() 
  const elementsContainer = document.querySelector('.elements')
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = popupAddOn.querySelector('.popup__input_type_name').value
  cardElement.querySelector('.elements__image').src = popupAddOn.querySelector('.popup__input_type_subname').value
  cardElement.querySelector('.elements__trash-button').addEventListener('click', function(e) {
  const item = cardElement.querySelector('.elements__trash-button').closest('.elements__card')
  item.remove()
  })
  cardElement.querySelector('.elements__image').addEventListener('click', function(e) {
  popupPicOn.parentElement.classList.add('popup_active')})
  cardElement.querySelector('.elements__like-button').addEventListener('click', function (e) { 
  e.target.classList.toggle('elements__like-button_active')
  e.target.classList.toggle('elements__like-button')})
  elementsContainer.prepend(cardElement)
  closeAddPopup()
  evt.target.reset()
}

popupAddOn.querySelector('.popup__form').addEventListener('submit', addCard); 

const openCard = () => {
  popupPicOn.classList.add('popup_active')
}

const closeCard = () => {
  popupPicOn.classList.remove('popup_active')
}
picture.addEventListener('click', openCard)
buttonClosePicPopup.addEventListener('click', closeCard)

function placeCard(array) {
  const elementsContainer = document.querySelector('.elements')
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = initialCards[i].name
  cardElement.querySelector('.elements__image').src = initialCards[i].link
  elementsContainer.append(cardElement)
  cardElement.querySelector('.elements__image').addEventListener('click', function(e) {
  popupPicOn.parentElement.classList.add('popup_active')
  const linkPic = cardElement.querySelector('.elements__image').src
  const textPic = cardElement.querySelector('.elements__title').textContent
  popupPicOn.querySelector('.popup__img').src = linkPic
  popupPicOn.querySelector('.popup__img-title').textContent = textPic
  })
  cardElement.querySelector('.elements__trash-button').addEventListener('click', function(e) {
  const item = cardElement.querySelector('.elements__trash-button').closest('.elements__card')
  item.remove()
  })
  cardElement.querySelector('.elements__like-button').addEventListener('click', function (e) { 
  e.target.classList.toggle('elements__like-button_active')
  e.target.classList.toggle('elements__like-button')});
}