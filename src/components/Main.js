import { useContext } from 'react'
import Card from './Card'
import { CurrentUserContext } from '../context/CurrentUserContext'

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onCardDelete,
  onCardLike,
  cards,
}) {
  const currentUser = useContext(CurrentUserContext)

  return (
    <main>
      <section className='container profile'>
        <picture className='profile__image-wrapper' onClick={onEditAvatar}>
          <img
            className='image profile__image'
            src={`${currentUser.avatar}`}
            alt='Пользователь'
          />
        </picture>
        <div className='profile__info'>
          <div className='profile__name'>
            <h1 className='profile__title'>{currentUser.name}</h1>
            <button
              type='button'
              className='profile__edit-btn'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__about'>{currentUser.about}</p>
        </div>
        <button
          type='button'
          className='profile__add-btn'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='container gallery'>
        {cards.map(card => (
          <Card
            key={card._id}
            card={card}
            onCardClick={onCardClick}
            currentUser={currentUser}
            onCardLike={onCardLike}
            onCardDelete={onCardDelete}
          />
        ))}
      </section>
    </main>
  )
}
