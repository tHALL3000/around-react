import React from "react";
import App from "./App";

function Main() {
	function handleEditAvatarClick() {
		document.querySelector(
			".overlay_type_profile"
		).classList.add(
			"overlay_show"
		);
	}

	function handleEditProfileClick() {
		document.querySelector(
			".overlay_type_edit"
		).classList.add(
			"overlay_show"
		);
	}

	function handleAddPlaceClick() {
		document.querySelector(
			".overlay_type_add"
		).classList.add(
			"overlay_show"
		);
	}

	return (
		<>
			<main className="main-content">
				<section className="profile">
					<button
						onClick={
							handleEditAvatarClick
						}
						className="wrapper"
						id="userPicture"
					>
						<img
							className="profile__picture-rounded"
							src="Save"
							alt="Profile picture"
						/>
					</button>

					<div className="profile__info">
						<div className="profile__inner">
							<h1 className="profile__name"></h1>
							<p className="profile__job"></p>
						</div>
						<button
							onClick={
								handleEditProfileClick
							}
							className="profile__edit"
							id="editButton"
							type="button"
						></button>
					</div>

					<button
						onClick={
							handleAddPlaceClick
						}
						className="photo-add"
						id="addPhoto"
						type="button"
					></button>
				</section>

				<section className="photo-grid">
					<template className="card-template">
						<article
							className="photo-grid__card"
							id="wholeCard"
						>
							<button
								id="trashcan"
								className="photo-grid__delete"
								type="button"
							></button>
							<img
								className="photo-grid__picture"
								src="Save"
								alt="Save"
							/>
							<div className="photo-grid__text-block">
								<h2 className="photo-grid__title"></h2>
								<div className="photo-grid__likes-container">
									<button
										className="photo-grid__heart"
										type="button"
									></button>
									<p className="photo-grid__heart_counter"></p>
								</div>
							</div>
						</article>
					</template>
				</section>
			</main>

			<div
				className="overlay overlay_type_profile"
				id="photoModalProfile"
			>
				<section className="modal modal_profile_picture">
					<button
						className="modal__close-button modal__close-button-profile"
						id="closeButtonProfilePhoto"
						type="button"
					></button>
					<div className="modal__contents">
						<h2 className="modal__text">
							Change
							profile
							picture
						</h2>
						<form
							className="form form_profile-picture"
							id="newPictureUser"
						>
							<div className="modal__form-control">
								<input
									className="modal__form-control-input modal__form-control-input_profile-picture-url"
									id="avatar"
									type="url"
									name="avatar"
									required
								/>
								<span
									id="avatar-error"
									className="error-message"
								></span>
								<button
									id="saveButton"
									className="button button_disabled"
									disabled
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>

			<div className="overlay overlay_type_edit">
				<section className="modal modal_edit_profile">
					<button
						className="modal__close-button"
						id="closeButtonEdit"
						type="button"
					></button>
					<div className="modal__contents">
						<h2 className="modal__text">
							Edit
							Profile
						</h2>
						<form
							className="form form-profile"
							id="profile"
						>
							<div
								className="modal__form-control"
								id="input"
							>
								<input
									className="modal__form-control-input"
									id="nameProfile"
									type="text"
									name="name"
									placeholder="Name"
									required
									minlength="2"
									maxlength="40"
								/>
								<span
									id="nameProfile-error"
									className="error-message"
								></span>

								<input
									className="modal__form-control-input"
									id="title"
									type="text"
									name="title"
									placeholder="Profession"
									required
									minlength="2"
									maxlength="200"
								/>
								<span
									id="title-error"
									className="error-message"
								></span>

								<button
									id="saveButtonProfile"
									className="button"
									disabled
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>

			<div className="overlay overlay_type_delete">
				<section className="modal modal_delete_confirm">
					<button
						className="modal__close-button"
						id="closeButton"
						type="button"
					></button>
					<div className="modal__contents">
						<h2 className="modal__text">
							Are
							you
							sure?
						</h2>
						<form>
							<button
								id="submitDeleteButton"
								className="button"
							>
								Yes.
							</button>
						</form>
					</div>
				</section>
			</div>

			<div
				className="overlay overlay_type_add"
				id="photoModal"
			>
				<section className="modal">
					<button
						className="modal__close-button modal__close-button_add-photo"
						id="closeButtonPhoto"
						type="button"
					></button>
					<div className="modal__contents">
						<h2 className="modal__text">
							New
							Place
						</h2>
						<form
							className="form form_add"
							id="newPicture"
						>
							<div className="modal__form-control">
								<input
									className="modal__form-control-input modal__form-control-input_image"
									id="name"
									type="text"
									name="name"
									placeholder="Title"
									required
									minlength="1"
									maxlength="30"
								/>
								<span
									id="name-error"
									className="error-message"
								></span>

								<input
									className="modal__form-control-input modal__form-control-input_url"
									id="link"
									type="url"
									name="link"
									placeholder="Image link"
									required
								/>
								<span
									id="link-error"
									className="error-message"
								></span>
								<button
									id="saveButtonPicture"
									className="button button_disabled"
									disabled
								>
									Save
								</button>
							</div>
						</form>
					</div>
				</section>
			</div>

			<div className="overlay overlay_type_preview">
				<section className="modal">
					<button
						className="modal__close-button modal__close-button_image"
						id="closeBtn__img-preview"
						type="button"
					></button>
					<div className="modal__photo-container">
						<figure className="modal__figure">
							<img
								className="modal__image"
								src="#"
								alt="Save"
							/>
							<figcaption className="modal__caption"></figcaption>
						</figure>
					</div>
				</section>
			</div>
		</>
	);
}
export default Main;
