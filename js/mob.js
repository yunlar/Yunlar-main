if (/Mobi/.test(navigator.userAgent) && !/iPad/.test(navigator.userAgent)) {

    const menuElement = document.querySelector('.menu-items');
    const iconElement = document.querySelector('.hamburger-icon');
    const logoElement = document.querySelector('.logo');
    const imageElement = document.querySelector('.hero-image');
    const divElement = document.querySelector('.hero-image');
    const buttonElement = document.querySelector('.hero-image');
  
    menuElement.classList.remove('menu-items');
    menuElement.classList.add('menu-items-mob');
  
    iconElement.classList.remove('hamburger-icon');
    iconElement.classList.add('hamburger-icon-mob');
  
    logoElement.classList.remove('logo');
    logoElement.classList.add('logo-mob');

    imageElement.classList.remove('hero-image');
    imageElement.classList.add('hero-image-mob');

    divElement.classList.remove('hero-div');
    divElement.classList.add('hero-div-mob');

    buttonElement.classList.remove('hero-button');
    buttonElement.classList.add('hero-button-mob');
  }