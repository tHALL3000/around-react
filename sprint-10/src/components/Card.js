function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }

  return props.cards.map(card => (
    <article className="photo-grid__card" key={card._id}>
      <button id="trashcan" className="photo-grid__delete" type="button"></button>
      <img className="photo-grid__picture" src={card.link} onClick={handleClick} alt="Save" />
      <div className="photo-grid__text-block">
        <h2 className="photo-grid__title">{card.name}</h2>
        <div className="photo-grid__likes-container">
          <button className="photo-grid__heart" type="button"></button>
          <p className="photo-grid__heart_counter">{card.likes.length}</p>
        </div>
      </div>
    </article>
  ));
}
export default Card;
