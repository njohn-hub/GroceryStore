

//search form toggle
let searchForm = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  cart.classList.remove('active');
  login.classList.remove('active');
  menu.classList.remove('active');
};

// cart toggle 
let cart  = document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = () => {
  cart.classList.toggle('active');
  searchForm.classList.remove('active');
  login.classList.remove('active');
  menu.classList.remove('active');
};

// login form toggle 
let login  = document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = () => {
  login.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  menu.classList.remove('active');
};

// navbar menu toggle 
let menu  = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
  menu.classList.toggle('active');
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  login.classList.remove('active');
};

// onscroll remove toggle 
window.onscroll = () => {
  searchForm.classList.remove('active');
  cart.classList.remove('active');
  login.classList.remove('active');
  menu.classList.remove('active');

}