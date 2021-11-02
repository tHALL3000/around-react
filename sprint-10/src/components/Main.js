import React from "react";
import App from "./App";

function Main(props) {
	return (
		<>
			<main className="main-content">
				<section className="profile">
					<button
						type="button"
						onClick={
							props.onEditAvatarClick
						}
						className="wrapper "
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
								props.onEditProfileClick
							}
							className="profile__edit"
							id="editButton"
							type="button"
						></button>
					</div>

					<button
						onClick={
							props.onAddPlaceClick
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

			<div className="overlay overlay_type_delete">
				<section className="modal modal_delete_confirm">
					<button
						onClick={
							props.onCloseAllPopups
						}
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

			<div className="overlay overlay_type_preview">
				<section className="modal">
					<button
						onClick={
							props.onCloseAllPopups
						}
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
