document.addEventListener('DOMContentLoaded', function () {
    const burger = document.querySelector('.top__burger');
    const body = document.querySelector('.body');
    const topContent = document.querySelector('.top__content');
    const adaptiveContent = document.querySelector('.top__adaptive-content');
    const menuLinks = document.querySelectorAll('.top__adaptive-content a'); 

    burger.addEventListener('click', function (e) {
        e.preventDefault();       
        this.classList.toggle('burger--active');
        body.classList.toggle('body-adaptive');       
        topContent.classList.toggle('top__content-adaptive');
        adaptiveContent.classList.toggle('top__adaptive-content-adaptive');
    });
    menuLinks.forEach(link => {
        link.addEventListener('click', function () {
            burger.classList.remove('burger--active');
            body.classList.remove('body-adaptive');
            topContent.classList.remove('top__content-adaptive');
            adaptiveContent.classList.remove('top__adaptive-content-adaptive');
        });
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const openButtons = document.querySelectorAll('.modal__opened'); // Изменение для выбора всех кнопок открытия
    const closeButtons = document.querySelectorAll('.modal__closed');
    const modal = document.querySelector('.modal');
    const modalPosition = document.querySelector('.modal__position');
    const body = document.querySelector('body');

    const closeModal = () => {
        console.log('Закрытие модального окна');
        body.classList.remove('body__modal-opened');
    };

    if (openButtons.length > 0) {
        openButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('Открытие модального окна');
                body.classList.add('body__modal-opened');
            });
        });
    } else {
        console.log('Кнопки открытия модального окна не найдены');
    }

    if (closeButtons.length > 0) {
        closeButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                event.preventDefault();
                console.log('клик');
                closeModal();
            });
        });
    } else {
        console.log('Кнопки закрытия модального окна не найдены');
    }

    if (modalPosition) {
        modalPosition.addEventListener('click', (event) => {
            if (event.target === modalPosition) {
                console.log('Клик по фону модального окна');
                closeModal();
            }
        });
    } else {
        console.log('Контейнер модального окна не найден');
    }

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            console.log('Нажата клавиша Escape');
            closeModal();
        }
    });
});

// Header swiper
new Swiper('.header__slider', {
    // Optional parameters
    slidersPerViev: 1,
    loop: true,
    speed: 7000,

    autoplay: {
        delay: 3000,
    },

    pagination: {
        el: '.header__pagination',
    },
});
new Swiper('.universities__slider', {
    slidesPerView: 4,
    spaceBetween: 20,

    on: {
        init: function () {
            var swiper = this;
            // Получаем текущее количество видимых слайдов
            var slidesPerView = swiper.params.slidesPerView;
            // Получаем индекс первого активного слайда
            var activeIndex = swiper.activeIndex;
            // Получаем все слайды
            var slides = swiper.slides;
            // Добавляем класс к видимым слайдам
            for (var i = activeIndex; i < activeIndex + slidesPerView; i++) {
                slides[i].classList.add('university-active-slide');
            }
        },
        slideChange: function () {
            var swiper = this;
            // Удаляем предыдущий класс с предыдущих активных слайдов
            document.querySelectorAll('.swiper-slide').forEach(function (slide) {
                slide.classList.remove('university-active-slide');
            });
            // Получаем текущее количество видимых слайдов
            var slidesPerView = swiper.params.slidesPerView;
            // Получаем индекс первого активного слайда
            var activeIndex = swiper.realIndex;
            // Получаем все слайды
            var slides = swiper.slides;
            // Добавляем класс к текущим видимым слайдам
            for (var i = activeIndex; i < activeIndex + slidesPerView; i++) {
                slides[i].classList.add('university-active-slide');
            }
        }
    },
    // If we need pagination
    pagination: {
        el: '.universities__pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.universities__nav-next',
        prevEl: '.universities__nav-prev',
    },
    breakpoints: {
        1201: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        901: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        101: {
            slidesPerView: 1,
            spaceBetween: 10,
        }
    }
});


new Swiper('.testimonials__slider', {
    slidesPerView: 3,
    spaceBetween: 20,

    // If we need pagination
    pagination: {
        el: '.testimonials__pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.testimonials__nav-next',
        prevEl: '.testimonials__nav-prev',
    },
    breakpoints: {
        1201: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        901: {
            slidesPerView: 3,
            spaceBetween: 9,
        },
        701: {
            slidesPerView: 2,
            spaceBetween: 9,
        },
        101: {
            slidesPerView: 1,
            spaceBetween: 9,
        }
    }
});
new Swiper('.photos__slider', {
    slidesPerView: 4,
    spaceBetween: 20,

    on: {
        init: function () {
            var swiper = this;
            // Получаем текущее количество видимых слайдов
            var slidesPerView = swiper.params.slidesPerView;
            // Получаем индекс первого активного слайда
            var activeIndex = swiper.activeIndex;
            // Получаем все слайды
            var slides = swiper.slides;
            // Добавляем класс к видимым слайдам
            for (var i = activeIndex; i < activeIndex + slidesPerView; i++) {
                slides[i].classList.add('photos-active-slide');
            }
        },
        slideChange: function () {
            var swiper = this;
            // Удаляем предыдущий класс с предыдущих активных слайдов
            document.querySelectorAll('.photos__slide').forEach(function (slide) {
                slide.classList.remove('photos-active-slide');
            });
            // Получаем текущее количество видимых слайдов
            var slidesPerView = swiper.params.slidesPerView;
            // Получаем индекс первого активного слайда
            var activeIndex = swiper.activeIndex;
            // Получаем все слайды
            var slides = swiper.slides;
            // Добавляем класс к текущим видимым слайдам
            for (var i = activeIndex; i < activeIndex + slidesPerView; i++) {
                slides[i].classList.add('photos-active-slide');
            }
        }
    },
    // Если нужна пагинация
    pagination: {
        el: '.photos__pagination',
    },

    // Навигационные стрелки
    navigation: {
        nextEl: '.photos__nav-next',
        prevEl: '.photos__nav-prev',
    },
    breakpoints: {
        1201: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
        751: {
            slidesPerView: 3,
            spaceBetween: 10,
        },
        601: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
        101: {
            slidesPerView: 2,
            spaceBetween: 10,
        },
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const accordeonButtons = document.querySelectorAll(".accordeon__button");

    accordeonButtons.forEach(button => {
        button.addEventListener("click", function (event) {
            event.preventDefault();

            const content = button.querySelector(".accordeon__content");

            if (button.classList.contains("active")) {
                // Закрыть текущий аккордеон
                content.style.height = 0;
                button.classList.remove("active");
            } else {
                // Закрыть все открытые аккордеоны
                accordeonButtons.forEach(btn => {
                    const btnContent = btn.querySelector(".accordeon__content");
                    btnContent.style.height = 0;
                    btn.classList.remove("active");
                });

                // Открыть текущий аккордеон
                content.style.height = content.scrollHeight + "px";
                button.classList.add("active");
            }
        });
    });
});
let telInputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+7 (999) 999-99-99');
im.mask(telInputs);