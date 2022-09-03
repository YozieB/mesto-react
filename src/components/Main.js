import { useEffect, useState } from 'react'
import { api } from '../utils/api'
import Card from './Card'

export default function Main({
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
}) {
  const [userName, setUserName] = useState('')
  const [userDescription, setUserDescription] = useState('')
  const [userAvatar, setUserAvatar] = useState('')
  const [cards, setInitialCards] = useState([])
  useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setUserName(user.name)
        setUserDescription(user.about)
        setUserAvatar(user.avatar)
      })
      .catch(error => console.log(`Error: ${error}`))
    api
      .getInitialCards()
      .then(card => {
        setInitialCards(card)
      })
      .catch(error => console.log(`Error: ${error}`))
  }, [])
  return (
    <main>
      <section className='container profile'>
        <picture className='profile__image-wrapper' onClick={onEditAvatar}>
          <img
            className='image profile__image'
            src={`${userAvatar}`}
            alt='Пользователь'
          />
        </picture>
        <div className='profile__info'>
          <div className='profile__name'>
            <h1 className='profile__title'>{userName}</h1>
            <button
              type='button'
              className='profile__edit-btn'
              onClick={onEditProfile}
            ></button>
          </div>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button
          type='button'
          className='profile__add-btn'
          onClick={onAddPlace}
        ></button>
      </section>
      <section className='container gallery'>
        {cards.map(card => (
          <Card key={card._id} card={card} onCardClick={onCardClick} />
        ))}
      </section>
    </main>
  )
}
