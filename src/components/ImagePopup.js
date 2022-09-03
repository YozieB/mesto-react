export default function ImagePopup({ card, onClose }) {
  return (
    <div className={`popup image-popup ${card !== null ? 'popup_opened' : ''}`}>
      <div className='popup__container popup__container_image'>
        <button
          type='button'
          className='popup__close-btn'
          onClick={onClose}
        ></button>
        <img
          className='popup__image-pic'
          src={card !== null ? card.link : ''}
          alt={card !== null ? card.name : ''}
        />
        <div className='popup__image-title'>
          {card !== null ? card.name : ''}
        </div>
      </div>
    </div>
  )
}
