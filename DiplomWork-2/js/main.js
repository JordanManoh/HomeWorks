// document.addEventListener('DOMContentLoaded', function () {
//     const burger = document.querySelector('.burger');

//     burger.addEventListener('click', function (event) {
//         event.preventDefault(); // предотвращаем стандартное действие ссылки

//         // Переключение класса burger--active
//         if (burger.classList.contains('burger--active')) {
//             burger.classList.remove('burger--active');
//         } else {
//             burger.classList.add('burger--active');
//         }
//     });
// });
document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.burger');
    const body = document.querySelector('.body');
    const topContent = document.querySelector('.top__content');
    const adaptiveContent = document.querySelector('.top__adaptive-content');

    burger.addEventListener('click', function (e) {
        e.preventDefault();
        
        // Переключение класса burger--active для burger
        this.classList.toggle('burger--active');

        body.classList.toggle('body-adaptive');
        // Переключение класса burger--active для top__content
        topContent.classList.toggle('top__content-adaptive');

        // Переключение класса burger--active для top__adaptive-content
        adaptiveContent.classList.toggle('top__adaptive-content-adaptive');
    });
});
// Header swiper
const swiper = new Swiper('.header__slider', {
    // Optional parameters
    slidersPerViev: 1,
    loop: true,
    speed: 7000,
    
    // autoplay: {
    //     delay: 3000,
    // },
    // If we need pagination
    pagination: {
        el: '.header__pagination',
    },
});