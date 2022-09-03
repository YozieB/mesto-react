import React from 'react'
import { api } from '../utils/api'
import Card from './Card'

export default function Main(props) {
  const [userName, setUserName] = React.useState(undefined)
  const [userDescription, setUserDescription] = React.useState(undefined)
  const [userAvatar, setUserAvatar] = React.useState(undefined)
  const [cards, setInitialCards] = React.useState([])
  React.useEffect(() => {
    api.getUserInfo().then(user => {
      setUserName(user.name)
      setUserDescription(user.about)
      setUserAvatar(user.avatar)
    })
    api.getInitialCards().then(card => {
      setInitialCards(card)
    })
  }, [])
  return (
    <main>
      <section className='container profile'>
        <picture
          className='profile__image-wrapper'
          onClick={props.onEditAvatar}
        >
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
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className='profile__about'>{userDescription}</p>
        </div>
        <button
          type='button'
          className='profile__add-btn'
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className='container gallery'>
        {cards.map((card, i) => (
          <Card key={i} card={card} onCardClick={props.onCardClick} />
        ))}
      </section>
    </main>
  )
}
