export default function Card(props) {
  function handleClick() {
    props.onCardClick(props.card)
  }
  return (
    <div className='card'>
      <button className='card__trash'></button>
      <img
        className='image card__image'
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className='card__info'>
        <h2 className='card__title'>{props.card.name}</h2>
        <div className='card__likes'>
          <button type='button' className='card__heart'></button>
          <div className='card__like-counter'>{props.card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}
