import "./index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
	return (
		//  <!DOCTYPE html>
		// <html lang="en">
		// // 	<head>
		// 		<meta charset="UTF-8" />
		// 		<meta
		// 			http-equiv="X-UA-Compatible"
		// 			content="IE=edge"
		// 		/>
		// 		<meta
		// 			name="viewport"
		// 			content="width=device-width, initial-scale=1.0"
		// 		/>
		// 		<meta
		// 			name="description"
		// 			content="Practicum by Yandex Project 4: Javascript"
		// 		/>
		// 		<meta
		// 			name="author"
		// 			content="Tiffany Hall, Front End Dev Student"
		// 		/>
		// <title>
		// 	Project
		// 	4:
		// 	Around
		// 	the
		// 	US
		// </title>
		// </head >
		<>
			<body className="page">
				<Header />
				<Main />
				<Footer />
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

				{/* <div className="overlay overlay_type_edit">
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
				</div> */}
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
				{/* <!-- <script src="../dist/bundle.js"></script> -->
		<!-- <script type="module" src="../src/index.js"></script> --> */}
			</body>
			{/* </html> */}
		</>
	);
}

export default App;
