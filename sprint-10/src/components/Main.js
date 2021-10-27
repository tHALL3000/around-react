import React from "react";

function Main() {
	return (
		<main className="main-content">
			<section className="profile">
				<button
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
						className="profile__edit"
						id="editButton"
						type="button"
					></button>
				</div>
				<button
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
	);
}
export default Main;
