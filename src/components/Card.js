export default function Card({ card, onCardClick }) {
  function handleClick() {
    onCardClick(card)
  }
  return (
    <div className='card'>
      <button className='card__trash'></button>
      <img
        className='image card__image'
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className='card__info'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__likes'>
          <button type='button' className='card__heart'></button>
          <div className='card__like-counter'>{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}
