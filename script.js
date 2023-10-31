const hamburger = document.querySelector("#hamburger");
const navbarMenu = document.querySelector("#navbar-menu");

hamburger.addEventListener("click", () => {
	navbarMenu.classList.toggle("active");
	hamburger.classList.toggle("active");
});

document.querySelectorAll(".nav-item").forEach((navItem) => {
  navItem.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navbarMenu.classList.remove("active");
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const decreaseButton = document.querySelector("#decrease");
  const increaseButton = document.querySelector("#increase");
  const quantityInput = document.querySelector("#quantity");

  decreaseButton.addEventListener("click", () => updateQuantity(-1));
  increaseButton.addEventListener("click", () => updateQuantity(1));

  const updateQuantity = (change) => {
    quantityInput.value = Number(quantityInput.value) + change;
  }
});

const tabs = document.querySelectorAll(".tab-btn");
const all_content = document.querySelectorAll(".content");

tabs.forEach((tab, index) => {
  tab.addEventListener('click', (e) => {
    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    all_content.forEach(content => {content.classList.remove('active')})
    all_content[index].classList.add('active')
  });
});

