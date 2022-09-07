export default function Card({
  card,
  onCardClick,
  currentUser,
  onCardLike,
  onCardDelete,
}) {
  function handleClick() {
    onCardClick(card)
  }
  function handleLikeClick() {
    onCardLike(card)
  }
  function handleRemoveClick() {
    onCardDelete(card)
  }
  const isOwn = currentUser._id === card.owner._id
  const isLiked = card.likes.some(i => i._id === currentUser._id)
  return (
    <div className='card'>
      {isOwn && (
        <button className='card__trash' onClick={handleRemoveClick}></button>
      )}
      <img
        className='image card__image'
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className='card__info'>
        <h2 className='card__title'>{card.name}</h2>
        <div className='card__likes'>
          <button
            type='button'
            className={
              isLiked ? 'card__heart card__heart_active' : 'card__heart'
            }
            onClick={handleLikeClick}
          ></button>
          <div className='card__like-counter'>{card.likes.length}</div>
        </div>
      </div>
    </div>
  )
}
