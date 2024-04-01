document.addEventListener('DOMContentLoaded', function() {
    // Находим ссылку для открытия меню
    const openMenuLink = document.querySelector('.nav__open-menu');

    // Добавляем обработчик события для открытия меню
    openMenuLink.addEventListener('click', function(event) {
        event.preventDefault();
        // Добавляем класс для отображения меню
        document.body.classList.toggle('body--opened-menu');
    });

    // Делегирование событий для ссылок внутри меню
    const menuLinks = document.querySelectorAll('.nav__link');
    menuLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Здесь ваш обработчик события для ссылок в меню
        });
    });
});

const   btn = document.querySelector('.about__img__button--link'),
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