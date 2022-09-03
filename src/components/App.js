import { useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'

function App() {
  document.body.classList.add('page')
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }
  return (
    <>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name='card-popup'
        form='place'
        title='Новое место'
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Создать'}
      >
        <label htmlFor='#' className='popup__form-field'>
          <input
            type='text'
            id='popup__input-place'
            className='popup__input popup__input_place'
            name='name'
            placeholder='Название'
            minLength='2'
            maxLength='30'
            required
          />
          <span className='popup__input-place-error popup__error'></span>
        </label>
        <label htmlFor='#' className='popup__form-field'>
          <input
            type='url'
            id='popup__input-link'
            className='popup__input popup__input_link'
            name='link'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='popup__input-link-error popup__error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name='profile-popup'
        form='profile'
        title='Редактировать профиль'
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
        <label className='popup__form-field' htmlFor='#'>
          <input
            type='text'
            id='popup__input-name'
            className='popup__input popup__input_name'
            name='name'
            placeholder='Имя'
            minLength='2'
            maxLength='40'
            required
          />
          <span className='popup__input-name-error popup__error'></span>
        </label>
        <label htmlFor='#' className='popup__form-field'>
          <input
            type='text'
            id='popup__input-job'
            className='popup__input popup__input_job'
            name='job'
            placeholder='Работа'
            minLength='2'
            maxLength='200'
            required
          />
          <span className='popup__input-job-error popup__error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name='avatar-popup'
        form='avatar'
        title='Обновить аватар'
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        buttonText={'Сохранить'}
      >
        <label htmlFor='#' className='popup__form-field'>
          <input
            id='popup__input-avatar-link'
            type='url'
            className='popup__input popup__input_link'
            name='link'
            placeholder='Ссылка на картинку'
            required
          />
          <span className='popup__input-avatar-link-error popup__error'></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        name='remove-popup'
        form='#'
        title='Вы уверены?'
        buttonText={'Да'}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </>
  )
}

export default App
