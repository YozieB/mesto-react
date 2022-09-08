import React from 'react'
export default function PopupWithForm({
  name,
  isOpen,
  title,
  onClose,
  form,
  children,
  buttonText,
  onSubmit,
}) {
  return (
    <div className={`popup ${name}` + (isOpen ? ' popup_opened' : '')}>
      <div className='popup__container'>
        <p className='popup__title'>{title}</p>
        <button
          type='button'
          onClick={onClose}
          className='popup__close-btn'
        ></button>
        <form
          action='#'
          name={`${form}`}
          className='popup__form'
          onSubmit={onSubmit}
        >
          {children}
          <button className='popup__form-btn' type='submit'>
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  )
}
