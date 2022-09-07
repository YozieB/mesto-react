import PopupWithForm from './PopupWithForm'
import { useRef, useEffect } from 'react'
export default function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {
  const avatarRef = useRef('')
  function handleSubmit(e) {
    e.preventDefault()
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    })
  }
  useEffect(() => {
    avatarRef.current.value = ''
  }, [isOpen])
  return (
    <PopupWithForm
      name='avatar-popup'
      form='avatar'
      title='Обновить аватар'
      buttonText={'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <label htmlFor='#' className='popup__form-field'>
        <input
          ref={avatarRef}
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
  )
}
