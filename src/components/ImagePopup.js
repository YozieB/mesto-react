export default function ImagePopup(props) {
  return (
    <div className={'popup image-popup' + (props.card ? ' popup_opened' : '')}>
      <div className='popup__container popup__container_image'>
        <button
          type='button'
          className='popup__close-btn'
          onClick={props.onClose}
        ></button>
        <img
          className='popup__image-pic'
          src={props.card.link}
          alt={props.card.name}
        />
        <div className='popup__image-title'>{props.card.name}</div>
      </div>
    </div>
  )
}
