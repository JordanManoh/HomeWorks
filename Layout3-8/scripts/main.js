// ====== BURGER MENU
document.addEventListener('DOMContentLoaded', function () {
    // Находим ссылку для открытия меню
    const openMenuLink = document.querySelector('.nav__open-menu');

    // Добавляем обработчик события для открытия меню
    openMenuLink.addEventListener('click', function (event) {
        event.preventDefault();
        // Добавляем класс для отображения меню
        document.body.classList.toggle('body--opened-menu');
    });

    // Делегирование событий для ссылок внутри меню
    const menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            // Здесь ваш обработчик события для ссылок в меню
        });
    });
});

// ============= MODAL WINDOW

const btn = document.querySelector('.about__img__button--link'),
    body = document.querySelector('.body'),
    modal = document.querySelector('.modal__window');

btn.addEventListener('click', () => {
    body.classList.add('body--opened-modal');

    const btnClose = document.querySelector('.modal__close');
    btnClose.addEventListener('click', () => {
        closeModal();
    });

    // Добавляем обработчик события click для всего документа
    document.addEventListener('click', (event) => {
        if (!modal.contains(event.target) && !btn.contains(event.target)) {
            closeModal();
        }
    });

    // Добавляем обработчик события keydown для закрытия модального окна при нажатии клавиши Escape
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            closeModal();
        }
    });
});

function closeModal() {
    body.classList.remove('body--opened-modal');
}

// =============== TAB CONTROLS

const tabControls = document.querySelector('.tabs-control')
tabControls.addEventListener('click', toggleTab)

function toggleTab(e) {

    const tabControl = e.target.closest('.tabs-control__link')

    if (!tabControl) return
    if (tabControl.classList.contains('tabs-control__link--active')) return
    e.preventDefault()

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tabs-control__link--active')
    const activeTab = document.querySelector('.tab--active')
    if (activeTab) {
        activeTab.classList.remove('tab--active')
    }
    if (activeControl) {
        activeControl.classList.remove('tabs-control__link--active')
    }

    tabContent.classList.add('tab--active')
    tabControl.classList.add('tabs-control__link--active')
}

// =========== TABS
const accordionLists = document.querySelectorAll('.accordion__list');
accordionLists.forEach(el => {
    el.addEventListener('click', (e) => {
        const accordionList = e.currentTarget;
        const accordionOpenedItem = accordionList.querySelector('.accordion__list__item--opened');
        const accordionControl = e.target.closest('.accordion__list__control');
        if (!accordionControl) return;
        const accordionItem = accordionControl.parentElement;
        const accordionContent = accordionControl.nextElementSibling;

        if (accordionOpenedItem && accordionItem !== accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion__list__item--opened');
            accordionOpenedItem.querySelector('.accordion__list__content').style.maxHeight = null;
        } else if (accordionOpenedItem && accordionItem === accordionOpenedItem) {
            accordionOpenedItem.classList.remove('accordion__list__item--opened');
            accordionOpenedItem.querySelector('.accordion__list__content').style.maxHeight = null;
            return;
        }

        accordionItem.classList.toggle('accordion__list__item--opened');

        if (accordionItem.classList.contains('accordion__list__item--opened')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = null;
        }
    });
});
// Slider - gallery
const swiper = new Swiper('.gallery__slider', {
    slidesPerView: 4,
    spaceBetween: 32,

    // If we need pagination
    pagination: {
        el: '.gallery__pagination',
        type: 'fraction',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.gallery__next',
        prevEl: '.gallery__prev',
    },

    breakpoints: {
        // when window width is >= 320px
        1100: {
            slidesPerView: 4
        },
        // when window width is >= 480px
        800: {
            slidesPerView: 3
        },
        // when window width is >= 640px
        400: {
            slidesPerView: 2,
            spaceBetween: 20
        },
        100: {
            slidesPerView: 1.5
        }
    }
});