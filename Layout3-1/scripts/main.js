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