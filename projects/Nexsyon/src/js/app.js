let navbar = document.querySelector('nav')
let logo = document.getElementById('logo')
let home = document.getElementById('home')
let capabilities = document.getElementById('capabilities')
let services = document.getElementById('services')
let ourWork = document.getElementById('ourWork')
let aboutUs = document.getElementById('aboutUs')
let contact = document.getElementById('contact')
let firstArrow = document.getElementById('firstArrow')
let secondArrow = document.getElementById('secondArrow')
let thirdArrow = document.getElementById('thirdArrow')
let fourthArrow = document.getElementById('fourthArrow')
let button = document.getElementById('button')
let burger = document.getElementById('burger')
let mobileMenu = document.getElementById('mobileMenu')


window.onscroll = function() {
  if (window.pageYOffset > 0) {
    navbar.classList.add('scrolled')
    home.classList.add('scrolled')
    capabilities.classList.add('scrolled')
    services.classList.add('scrolled')
    ourWork.classList.add('scrolled')
    aboutUs.classList.add('scrolled')
    contact.classList.add('scrolled')
    firstArrow.classList.add('scrolled')
    secondArrow.classList.add('scrolled')
    thirdArrow.classList.add('scrolled')
    fourthArrow.classList.add('scrolled')
    burger.classList.add('scrolled')
    logo.style.cssText = 'color: #000;';
    button.style.cssText = 'color: #fffefe; border: 1px solid #fd5f5f; background-color: #fd5f5f;';
  } else {
    navbar.classList.remove('scrolled')
    home.classList.remove('scrolled')
    capabilities.classList.remove('scrolled')
    services.classList.remove('scrolled')
    ourWork.classList.remove('scrolled')
    aboutUs.classList.remove('scrolled')
    contact.classList.remove('scrolled')
    firstArrow.classList.remove('scrolled')
    secondArrow.classList.remove('scrolled')
    thirdArrow.classList.remove('scrolled')
    fourthArrow.classList.remove('scrolled')
    // button.classList.remove('scrolled')
    burger.classList.remove('scrolled')
    button.style.cssText = 'border: 1px solid #fff; background-color: transparent; color: #fffefe;';
    logo.style.cssText = 'color: #fff;';
  }
}

burger.addEventListener("click", function () {
  if (mobileMenu.style.height === '0%') {
    mobileMenu.style.cssText = 'transition: height 200ms ease 0s; height: 100%;';
    button.style.cssText = 'color: #fffefe; border: 1px solid #fd5f5f; background-color: #fd5f5f;';
    logo.style.cssText = 'color: #000;';
  } else if (mobileMenu.style.height === '100%' && window.pageYOffset > 0) {
     mobileMenu.style.cssText = 'transition: height 200ms ease 0s; height: 0%;';
    button.style.cssText = 'color: #fffefe; border: 1px solid #fd5f5f; background-color: #fd5f5f;';
    logo.style.cssText = 'color: #000;';
  } else if (mobileMenu.style.height === '100%') {
    mobileMenu.style.cssText = 'transition: height 200ms ease 0s; height: 0%;';
    button.style.cssText = 'border: 1px solid #fff; background-color: transparent; color: #fffefe;';
    logo.style.cssText = 'color: #fff;';
  }
});

$('.carousel').carousel({
  interval: false
})