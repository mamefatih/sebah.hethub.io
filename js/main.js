document.addEventListener('DOMContentLoaded', function () {
    let search = document.querySelector('.search-box');
    let searchIcon = document.querySelector('#search-icon');
    let navbar = document.querySelector('.navbar');
    let menuIcon = document.querySelector('#menu-icon');
    let header = document.querySelector('header');

    searchIcon.onclick = () => {
        search.classList.toggle('active');
        navbar.classList.remove('active')
    }

    menuIcon.onclick = () => {
        navbar.classList.toggle('active');
        search.classList.remove('active')
    }
    window.onscroll = () =>{
        navbar.classList.remove('active')
        search.classList.remove('active')
    }

    window.addEventListener('scroll', () => {
        header.classList.toggle('Shadow', window.scrollY > 0);
    });
});
