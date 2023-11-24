let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');


// open and close menu 
menu.onclick = function () {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
};
// show shadowe move scroll window 
window.onscroll = function () {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active');
    };

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
};

// show shadow on lode 
window.onload = function () {

    if (window.scrollY > 0) {
        document.querySelector('.header').classList.add('active');
    }else {
        document.querySelector('.header').classList.remove('active');
    };

};

// swiper 
var swiper = new Swiper(".team-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabcursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
    },
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    breakpoints: {
    0: {
        slidesPerView: 1,
    },
    768: {
        slidesPerView: 2,
    },
    991: {
        slidesPerView: 3,
    },
    },
});