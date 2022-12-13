const card = document.querySelector(".card");

for (let i = 0; i < 20; i++) {
	const cardClone = card.cloneNode(true);

	document.querySelector(".wrapper").appendChild(cardClone);
}
