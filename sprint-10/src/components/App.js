import React from 'react';
import './index.css';
import Header from './Header.js';
import Main from './Main.js';
import PopupWithForm from './PopupWithForm.js';
import Footer from './Footer.js';
import PopupWithImage from './PopupwithImage';

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIspProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState(false);

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
    console.log('popup call');
  }

  function handleEditProfileClick() {
    console.log('inside app.js');
    setIspProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick() {
    // document.querySelector('.overlay_type_preview').classList.add('overlay_show');
    setSelectedCard(true);
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIspProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard(false);
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
      />
      <PopupWithForm
        name="profile-avatar"
        title="Change Avatar"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={e => }
      >
        <input
          className="modal__form-control-input modal__form-control-input_profile-picture-url"
          id="avatar"
          type="url"
          name="avatar"
          required
        />
        <span id="avatar-error" className="error-message"></span>
      </PopupWithForm>

      <PopupWithForm
        name="edit-profile"
        title="Edit Profile"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={e => }
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
        <span id="nameProfile-error" className="error-message"></span>

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
        <span id="title-error" className="error-message"></span>
      </PopupWithForm>

      <PopupWithForm
        name="photoModal"
        title="New Place"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        // handleSubmit={e => }
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
        <span id="name-error" className="error-message"></span>

        <input
          className="modal__form-control-input modal__form-control-input_url"
          id="link"
          type="url"
          name="link"
          placeholder="Image link"
          required
        />
        <span id="link-error" className="error-message"></span>
      </PopupWithForm>
      <PopupWithImage name="preview" isOpen={selectedCard} onClose={closeAllPopups} />
      <Footer />
    </div>
  );
}

export default App;
