class Api {
  constructor({baseUrl, headers}) {
    this.url = baseUrl;
    this.headers = headers;
  }

  _checkResReturnJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this.url}/cards`, {
      headers: this.headers,
    }).then(res => this._checkResReturnJson(res));
  }
  getAppInfo() {
    return Promise.all([this.getInitialCards(), this.getProfile()]);
  }

  getProfile() {
    return fetch(`${this.url}/users/me`, {
      method: 'GET',
      headers: this.headers,
    }).then(res => this._checkResReturnJson(res));
  }

  /**
   *
   * Takes item, and PATCH request
   * {name, title}
   */
  setProfile(item) {
    return fetch(`${this.url}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        name: item.name,
        about: item.title, //this needs to stay title//
      }),
    }).then(res => this._checkResReturnJson(res));
  }

  addCard(card) {
    return fetch(`${this.url}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify({
        link: card.link,
        name: card.name,
      }),
    }).then(res => this._checkResReturnJson(res));
  }

  cardLikesAdd(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: 'PUT',
      headers: this.headers,
    }).then(res => this._checkResReturnJson(res));
  }

  cardRemoveLike(cardId) {
    return fetch(`${this.url}/cards/likes/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(res => this._checkResReturnJson(res));
  }
  updateCardStatus(cardId, liked) {
    if (liked) {
      return this.cardRemoveLike(cardId);
    } else return this.cardLikesAdd(cardId);
  }

  deleteCard(cardId) {
    return fetch(`${this.url}/cards/${cardId}`, {
      method: 'DELETE',
      headers: this.headers,
    });
  }

  updateProfilePicture(avatar) {
    return fetch(`${this.url}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify({
        avatar: avatar,
      }),
    }).then(res => this._checkResReturnJson(res));
  }
}
export let api = new Api({
  baseUrl: 'https://around.nomoreparties.co/v1/group-11',
  headers: {
    authorization: 'f1a3823e-fb3e-4cac-8943-fd9e95cc434f',
    'Content-Type': 'application/json',
  },
});
