const Hamburger = document.querySelector(".hamburger input");
const nav = document.querySelector(".navbar .navigasi ul");

Hamburger.addEventListener("click", function () {
	nav.classList.toggle("slide");
});
