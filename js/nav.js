const hamburgerIcon = document.querySelector('.hamburger-icon-mob');
const menuItems = document.querySelector('.menu-items-mob');
hamburgerIcon.addEventListener('click', () => {
hamburgerIcon.classList.toggle('active');
menuItems.classList.toggle('active');
});