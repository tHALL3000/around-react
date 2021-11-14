import React from 'react';
import {api} from '../utils/api';
import Card from './Card';

function Main(props) {
  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getProfile().then(res => {
      setUserName(res.name);
      setUserDescription(res.about);
    });
  }, [userName]);

  React.useEffect(() => {
    api.getProfile().then(res => {
      setUserAvatar(res.avatar);
    });
  }, [userAvatar]);

  React.useEffect(() => {
    api.getInitialCards().then(res => {
      setCards(res);
    });
  }, [userName]);

  return (
    <div className="page">
      <main className="main-content">
        <section className="profile">
          <button
            type="button"
            onClick={props.onEditAvatarClick}
            className="wrapper"
            id="userPicture"
          >
            <img className="profile__picture-rounded" src={userAvatar} alt="Profile round" />
          </button>

          <div className="profile__info">
            <div className="profile__inner">
              <h1 className="profile__name">{userName}</h1>
              <p className="profile__job">{userDescription}</p>
            </div>
            <button
              onClick={props.onEditProfileClick}
              className="profile__edit"
              id="editButton"
              type="button"
            ></button>
          </div>

          <button
            onClick={props.onAddPlaceClick}
            className="photo-add"
            id="addPhoto"
            type="button"
          ></button>
        </section>
        <ul className="photo-grid">
          <Card cards={cards} onCardClick={props.onCardClick} />
        </ul>
      </main>

      {/* <div className="overlay overlay_type_delete">
        <section className="modal modal_delete_confirm">
          <button
            onClick={props.onCloseAllPopups}
            className="modal__close-button"
            id="closeButton"
            type="button"
          ></button>
          <div className="modal__contents">
            <h2 className="modal__text">Are you sure?</h2>
            <form>
              <button id="submitDeleteButton" className="button">
                Yes.
              </button>
            </form>
          </div>
        </section>
      </div>

      <div className="overlay overlay_type_preview">
        <section className="modal">
          <button
            onClick={props.onCloseAllPopups}
            className="modal__close-button modal__close-button_image"
            id="closeBtn__img-preview"
            type="button"
          ></button>
          <div className="modal__photo-container">
            <figure className="modal__figure">
              <img className="modal__image" src="#" alt="Save" />
              <figcaption className="modal__caption"></figcaption>
            </figure>
          </div>
        </section>
      </div> */}
    </div>
  );
}
export default Main;
