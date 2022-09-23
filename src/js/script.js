window.addEventListener('DOMContentLoaded', () => {
    //form
    const modalBackground = document.querySelector('.overlay');
    const modalFormSubmit = document.querySelector('.modal__submit');
    const modalFormThanks = document.querySelector('.modal__thanks');
    const callBtn = document.querySelector('.button_nav');
    const closeFromBtns = document.querySelectorAll('[data-close]');
    const submitBtn = document.querySelector('.button_submit');

    callBtn.addEventListener('click', () => {
        openForm(modalFormSubmit);
        menu.classList.remove('nav__list_active');
        hamburger.classList.remove('hamburger_active');
    });

    submitBtn.addEventListener('submit', (e) => {
        e.preventDefault();

        closeForm();
        openForm(modalFormThanks);
    });

    modalBackground.addEventListener('click', (e) => {
            if (!e.target.closest('.modal')) {
                closeForm();
            } else if (e.target.hasAttribute('data-close')) {
                closeForm();
            }
    });

    closeFromBtns.forEach((e) => {
        e.addEventListener('click', () => {
            closeForm();
        });
    });


    function closeForm() {
        modalFormSubmit.classList.add('hide');
        modalBackground.classList.add('hide');
    }

    function openForm(form) {
        modalBackground.classList.remove('hide');
        form.classList.remove('hide');
    }

    // hamburger

    const menu = document.querySelector('.nav__list'),
    menuItem = document.querySelectorAll('.nav__item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__list_active');
        closeForm();
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__list_active');
        });
    });
});