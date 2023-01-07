const likeButton = document.querySelector('.elements__like-button')
const likeButtonActive = document.querySelector('.elements__like-button_active')


const formAddPic = document.querySelector('.popup_type_add-pic')
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
const formAdd = popupContainerAdd.querySelector('.popup__form')
const formProfile = popupContainerEdit.querySelector('.popup__form')
const nameForm = formProfile.querySelector('.popup__input_type_name')
const subNameForm = formProfile.querySelector('.popup__input_type_subname')

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

const handleEditFormSubmit = (evt) => {
  evt.preventDefault() 
  title.textContent = nameForm.value
  subTitle.textContent = subNameForm.value
  closePopup(popupEditOn)
}


const openPopup = (popupType) => {
  popupType.classList.add('popup_active')
}

const closePopup = (popupType) => {
  popupType.classList.remove('popup_active')
}

const addCard = (evt) => {
  evt.preventDefault() 
  const elementsContainer = document.querySelector('.elements')
  const cardTemplate = document.querySelector('#card-template').content
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  const name = popupAddOn.querySelector('.popup__input_type_name').value
  const link = popupAddOn.querySelector('.popup__input_type_subname').value
  renderCard(elementsContainer, createCard(name, link), true)
  closePopup(popupAddOn)
  evt.target.reset()
}

const deleteCard = (evt) => {
  evt.target.closest('.elements__card').remove()
}

const maximizeCard = (evt) => {
  popupPicOn.classList.add('popup_active')
  const linkPic = evt.target.closest('.elements__card').querySelector('.elements__image').src
  const textPic = evt.target.closest('.elements__card').querySelector('.elements__title').textContent
  const altPic = evt.target.closest('.elements__card').querySelector('.elements__image').alt
  popupContainerPic.querySelector('.popup__img').src = linkPic
  popupContainerPic.querySelector('.popup__img-title').textContent = textPic
  popupContainerPic.querySelector('.popup__img').alt = altPic
}

const likeCard = (evt) => {
  evt.target.classList.toggle('elements__like-button_active')
  evt.target.classList.toggle('elements__like-button')
}


const createCard = (name, link) => {
  const cardTemplate = document.querySelector('#card-template').content;
  const cardElement = cardTemplate.querySelector('.elements__card').cloneNode(true);
  cardElement.querySelector('.elements__title').textContent = name;
  cardElement.querySelector('.elements__image').src = link;
  cardElement.querySelector('.elements__image').addEventListener('click', maximizeCard)
  cardElement.querySelector('.elements__trash-button').addEventListener('click', deleteCard)
  cardElement.querySelector('.elements__like-button').addEventListener('click', likeCard); 
  return cardElement
}

const renderCard = (container, card, direction=false) => {
  direction === false ? container.append(card) : container.prepend(card)
}

initialCards.forEach( item => renderCard(elementsContainer, createCard(item.name, item.link)))

picture.addEventListener('click', () => {openPopup(popupPicOn)})
buttonClosePicPopup.addEventListener('click', () => {closePopup(popupPicOn)})
buttonOpenAddPopup.addEventListener('click', () => {openPopup(popupAddOn)})
buttonCloseAddPopup.addEventListener('click', () => {closePopup(popupAddOn)})
buttonOpenEditPopup.addEventListener('click', () => {openPopup(popupEditOn)})
buttonCloseEditPopup.addEventListener('click', () => {closePopup(popupEditOn)})
formAdd.addEventListener('submit', addCard); 
formProfile.addEventListener('submit', handleEditFormSubmit); 