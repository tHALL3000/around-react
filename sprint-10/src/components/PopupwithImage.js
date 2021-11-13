function PopupWithImage(props) {
  return (
    <div className={`overlay overlay_type_${props.name} ${props.card ? 'overlay_show' : ''}`}>
      <section className="modal modal_photo-container">
        <button className="modal__close-button" type="button" onClick={props.onClose}></button>
        <div className="modal__photo-container">
          <figure className="modal__figure">
            <img className="modal__image" src={props.card.link} alt=" " />
            <figcaption className="modal__caption"></figcaption>
          </figure>
        </div>
      </section>
    </div>
  );
}
export default PopupWithImage;
