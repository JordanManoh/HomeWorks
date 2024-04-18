// Header swiper
const swiper = new Swiper('.header__slider', {
    // Optional parameters
    slidersPerViev: 1,
    loop: true,
    speed: 7000,
    
    autoplay: {
        delay: 3000,
    },
    // If we need pagination
    pagination: {
        el: '.header__pagination',
    },
});