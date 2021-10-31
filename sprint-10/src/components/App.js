import React from "react";
import "./index.css";
import Header from "./Header.js";
import Main from "./Main.js";
import Footer from "./Footer.js";

function App() {
	const [
		isEditAvatarPopupOpen,
		setIsEditAvatarPopupOpen,
	] = React.useState(false);
	const [
		isEditProfilePopupOpen,
		setIspProfilePopupOpen,
	] = React.useState(false);
	const [
		isAddPlacePopupOpen,
		setIsAddPlacePopupOpen,
	] = React.useState(false);

	function handleEditAvatarClick() {
		setIsEditAvatarPopupOpen(
			true
		);
	}

	function handleEditProfileClick() {
		setIspProfilePopupOpen(
			true
		);
	}

	function handleAddPlaceClick() {
		setIsAddPlacePopupOpen(
			true
		);
	}

	function handleCardClick() {
		document.querySelector(
			".overlay_type_preview"
		).classList.add(
			"overlay_show"
		);
	}

	return (
		<>
			<body className="page">
				<Header />
				<Main
					onEditProfileClick={
						handleEditProfileClick
					}
					onAddPlaceClick={
						handleAddPlaceClick
					}
					onEditAvatarClick={
						handleEditAvatarClick
					}
					onCardClick={
						handleCardClick
					}
				/>

				<Footer />
			</body>
		</>
	);
}

export default App;
