import { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import ImagePopup from './ImagePopup'
import Main from './Main'
import PopupWithForm from './PopupWithForm'
import { api } from '../utils/api'
import { CurrentUserContext } from '../context/CurrentUserContext'
import EditProfilePopup from './EditProfilePopup'
import EditAvatarPopup from './EditAvatarPopup'
import AddPlacePopup from './AddPlacePopup'

function App() {
  document.body.classList.add('page')
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [currentUser, setCurrentUser] = useState('')
  const [cards, setInitialCards] = useState([])

  useEffect(() => {
    api
      .getUserInfo()
      .then(user => {
        setCurrentUser(user)
      })
      .catch(error => console.log(`Error: ${error}`))
    api
      .getInitialCards()
      .then(card => {
        setInitialCards(card)
        console.log(card)
      })
      .catch(error => console.log(`Error: ${error}`))
  }, [])
  function handleEditAvatarClick() {
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick() {
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick() {
    setAddPlacePopupOpen(true)
  }
  function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
  }
  function handleCardClick(card) {
    setSelectedCard(card)
  }
  function handleUpdateUser(user) {
    api.setUserInfo(user.name, user.about).then(result => {
      setCurrentUser(result)
      closeAllPopups()
    })
  }
  function handleUpdateAvatar(avatar) {
    api.updateAvatar(avatar.avatar).then(result => {
      setCurrentUser(result)
      closeAllPopups()
    })
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id)

    api.changeLikeCardStatus(card._id, !isLiked).then(newCard => {
      setInitialCards(state =>
        state.map(c => (c._id === card._id ? newCard : c))
      )
    })
  }

  function handleCardDelete(card) {
    api.removeCard(card._id).then(() => {
      setInitialCards(state => state.filter(c => c._id !== card._id))
    })
  }

  function handleAddPlaceSubmit(card) {
    api.addCard(card.name, card.link).then(card => {
      console.log(card)
      setInitialCards([card, ...cards])
      closeAllPopups()
    })
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onCardLike={handleCardLike}
        cards={cards}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <EditProfilePopup
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <AddPlacePopup
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddCardPlace={handleAddPlaceSubmit}
      />
      <EditAvatarPopup
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <PopupWithForm
        name='remove-popup'
        form='#'
        title='Вы уверены?'
        buttonText={'Да'}
      />
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </CurrentUserContext.Provider>
  )
}

export default App
