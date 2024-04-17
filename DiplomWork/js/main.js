document.addEventListener('DOMContentLoaded', function () {
    // Находим все ссылки для открытия меню
    const openMenuLinks = document.querySelectorAll('.top__lang-item');

    // Добавляем обработчик события для открытия/закрытия меню для каждой ссылки
    openMenuLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            
            // Убираем класс для всех элементов с классом top__lang-item--active
            document.querySelectorAll('.top__lang-item--active').forEach(function (item) {
                item.classList.remove('top__lang-item--active');
            });

            // Добавляем класс для отображения меню для текущего элемента
            link.classList.toggle('top__lang-item--active');
        });
    });
});