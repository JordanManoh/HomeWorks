const   btn = document.querySelector('.btn--open'),
        modal = document.querySelector('.modal'),
        modalInner = document.querySelector('.modal__inner')

btn.addEventListener('click', () => {
    modal.classList.add('modal--open');
    
    const btnClose = document.querySelector('.modal__close--btn');
    btnClose.addEventListener('click', () => {
        closeModal();
    });

    // Добавляем обработчик события click для всего документа
    document.addEventListener('click', (event) => {
        if (!modalInner.contains(event.target) && !btn.contains(event.target)) {
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
    modal.classList.remove('modal--open');
}