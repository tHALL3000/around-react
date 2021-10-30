function PopupWithImage() {
	return (
		<div class="overlay overlay_type_preview">
			<section class="modal">
				<button
					class="modal__close-button modal__close-button_image"
					type="button"
				></button>
				<div class="modal__photo-container">
					<figure class="modal__figure">
						<img
							class="modal__image"
							src=" "
							alt=" "
						/>
						<figcaption class="modal__caption"></figcaption>
					</figure>
				</div>
			</section>
		</div>
	);
}
