import PopupWithForm from './PopupWithForm'
import { useState, useContext, useEffect } from 'react'
import { CurrentUserContext } from '../context/CurrentUserContext'
export default function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {
  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const currentUser = useContext(CurrentUserContext)
  useEffect(() => {
    setName(currentUser.name)
    setDescription(currentUser.about)
  }, [currentUser, isOpen])

  function handleChangeName(e) {
    setName(e.target.value)
  }
  function handleChangeDescription(e) {
    setDescription(e.target.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
    onUpdateUser({
      name: name,
      about: description,
    })
  }
  return (
    <PopupWithForm
      name='profile-popup'
      form='profile'
      title='Редактировать профиль'
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Сохранить'}
      onSubmit={handleSubmit}
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
          onChange={handleChangeName}
          value={name || ''}
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
          onChange={handleChangeDescription}
          value={description || ''}
        />
        <span className='popup__input-job-error popup__error'></span>
      </label>
    </PopupWithForm>
  )
}
