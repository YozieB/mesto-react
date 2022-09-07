import PopupWithForm from './PopupWithForm'
import { useState, useEffect } from 'react'
export default function AddPlacePopup({ isOpen, onClose, onAddCardPlace }) {
  const [cardName, setCardName] = useState('')
  const [cardLink, setCardLink] = useState('')
  function handleChangeCardName(e) {
    setCardName(e.target.value)
  }
  function handleChangeCardLink(e) {
    setCardLink(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    onAddCardPlace({
      name: cardName,
      link: cardLink,
    })
  }
  useEffect(() => {
    setCardLink('')
    setCardName('')
  }, [isOpen])
  return (
    <PopupWithForm
      name='card-popup'
      form='place'
      title='Новое место'
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
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
          value={cardName || ''}
          onChange={handleChangeCardName}
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
          value={cardLink || ''}
          onChange={handleChangeCardLink}
        />
        <span className='popup__input-link-error popup__error'></span>
      </label>
    </PopupWithForm>
  )
}
