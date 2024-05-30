document.addEventListener("DOMContentLoaded", function () {
    // Обработчик клика на кнопку выбора языка
    document.querySelectorAll('.top__lang-item').forEach(function (langItem) {
        langItem.addEventListener('click', function (event) {
            event.preventDefault(); // Отменяем стандартное действие перехода по ссылке

            // Удаление активного класса у всех кнопок выбора языка
            document.querySelectorAll('.top__lang-item').forEach(function (item) {
                item.classList.remove('top__lang-item--active');
            });

            // Добавление активного класса выбранной кнопке языка
            this.classList.add('top__lang-item--active');

            // Получение выбранного языка
            const lang = this.getAttribute('data-lang');

            // Применение перевода ко всем текстовым узлам документа
            translateDocument(lang);
        });
    });

    // Объект с переводами
    const translations = {
        'en': {
            'О нас': 'About us',
            'Университеты': 'Universities',
            'Отзывы': 'Testimonials',
            'Фотографии': 'Photos',
            'Ответы на вопросы': 'Response to questions',
            'Оставить заявку': 'Submit message',
            'Контакты' : 'Contacts'
        },
        'ru': {
            'About us': 'О нас',
            'Universities': 'Университеты',
            'Testimonials': 'Отзывы',
            'Photos': 'Фотографии',
            'Response to questions': 'Ответы на вопросы',
            'Submit message': 'Оставить заявку',
            'Contacts': 'Контакты'
        }
    };

    // Функция перевода всего документа
    function translateDocument(lang) {
        // Перебираем все текстовые узлы на странице
        walk(document.body, function (node) {
            if (node.nodeType === 3 && node.nodeValue.trim() !== '') {
                let translationKey = node.nodeValue.trim();
                if (translations[lang] && translations[lang][translationKey]) {
                    node.nodeValue = translations[lang][translationKey];
                }
            }
        });
    }

    // Функция для рекурсивного обхода DOM-дерева
    function walk(node, callback) {
        if (node.childNodes.length > 0) {
            node.childNodes.forEach(function (child) {
                walk(child, callback);
            });
        }
        callback(node);
    }
}); 