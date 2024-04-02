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

const tabControls = document.querySelector('.tabs-control')
tabControls.addEventListener('click',toggleTab)

function toggleTab(e){
    
    const tabControl = e.target.closest('.tabs-control__link')

    if(!tabControl) return
    if(tabControl.classList.contains('tabs-control__link--active')) return
    e.preventDefault()

    const tabContentID = tabControl.getAttribute('href')
    const tabContent = document.querySelector(tabContentID)
    const activeControl = document.querySelector('.tabs-control__link--active')
    const activeTab = document.querySelector('.tab--active')
    if(activeTab){
        activeTab.classList.remove('tab--active')
    }
    if(activeControl){
        activeControl.classList.remove('tabs-control__link--active')
    }

    tabContent.classList.add('tab--active')
    tabControl.classList.add('tabs-control__link--active')
}