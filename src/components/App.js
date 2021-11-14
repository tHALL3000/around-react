import React from 'react';
import '../../src/index.css';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup';
// import {api} from '../utils/api';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  //   function handleSubmitProfile(e) {
  //     e.preventDefault();
  // 	  console.log('the submit button was fired');
  // 		api.setProfile(item);
  //   }

  //   function handleSubmitAddCard(e, card) {
  //     e.preventDefault();
  //     console.log('the submit button was fired');
  //     api.addCard(card);
  //   }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }

  return (
    <div className="page">
      <Header />
      <Main
        onEditProfileClick={handleEditProfileClick}
        onAddPlaceClick={handleAddPlaceClick}
        onEditAvatarClick={handleEditAvatarClick}
        onCardClick={handleCardClick}
        onClose={closeAllPopups}
        // onSubmit={handleSubmit}
      />
      <PopupWithForm
        name="profile-avatar"
        title="Change Avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={handleSubmit}
      >
        <input
          className="modal__form-control-input modal__form-control-input_profile-picture-url"
          id="avatar"
          type="url"
          name="avatar"
          required
        />
        <span id="avatar-error" className="error-message" />
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Edit Profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={handleSubmit}
      >
        <input
          className="modal__form-control-input"
          id="nameProfile"
          type="text"
          name="name"
          placeholder="Name"
          required
          minLength="2"
          maxLength="40"
        />
        <span id="nameProfile-error" className="error-message" />

        <input
          className="modal__form-control-input"
          id="title"
          type="text"
          name="title"
          placeholder="Profession"
          required
          minLength="2"
          maxLength="200"
        />
        <span id="title-error" className="error-message" />
      </PopupWithForm>

      <PopupWithForm
        name="photoModal"
        title="New Place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={handleSubmitAddCard}
      >
        <input
          className="modal__form-control-input modal__form-control-input_image"
          id="name"
          type="text"
          name="name"
          placeholder="Title"
          required
          minLength="1"
          maxLength="30"
        />
        <span id="name-error" className="error-message" />

        <input
          className="modal__form-control-input modal__form-control-input_url"
          id="link"
          type="url"
          name="link"
          placeholder="Image link"
          required
        />
        <span id="link-error" className="error-message" />
      </PopupWithForm>
      <ImagePopup name="preview" onClose={closeAllPopups} card={selectedCard} />
      <Footer />
    </div>
  );
}

export default App;
