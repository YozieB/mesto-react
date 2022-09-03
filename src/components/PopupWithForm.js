import React from 'react'
export default function PopupWithForm(props) {
  return (
    <div
      className={`popup ${props.name}` + (props.isOpen ? ' popup_opened' : '')}
    >
      <div className='popup__container'>
        <p className='popup__title'>{props.title}</p>
        <button
          type='button'
          onClick={props.onClose}
          className='popup__close-btn'
        ></button>
        <form
          action='#'
          name={`${props.form}`}
          className='popup__form'
          noValidate
        >
          {props.children}
        </form>
      </div>
    </div>
  )
}
