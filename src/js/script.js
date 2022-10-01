window.addEventListener('DOMContentLoaded', () => {
    //form
    const modalBackground = document.querySelector('.overlay');
    const modalFormSubmit = document.querySelector('.modal__submit');
    const modalFormThanks = document.querySelector('.modal__thanks');
    const callBtn = document.querySelector('.button_nav');
    const closeFromBtns = document.querySelectorAll('[data-close]');
    const modalForm = document.querySelector('.modal__form');
    const body = document.querySelector('body');
    const inputs = document.querySelectorAll('.modal__input');

    callBtn.addEventListener('click', () => {
        openForm(modalFormSubmit);
        menu.classList.remove('nav__list_active');
        hamburger.classList.remove('hamburger_active');
    });

    modalBackground.addEventListener('click', (e) => {
        if (!e.target.closest('.modal')) {
            closeForm(modalFormSubmit);
        } else if (e.target.hasAttribute('data-close')) {
            closeForm(modalFormSubmit);
        }
    });

    closeFromBtns.forEach((e) => {
        e.addEventListener('click', () => {
            closeForm(modalFormThanks);
            closeForm(modalFormSubmit);
        });
    });

    function closeForm(form) {
        form.classList.add('hide');
        modalBackground.classList.add('hide');
        body.style.overflow = '';
    }

    function openForm(form) {
        modalBackground.classList.remove('hide');
        form.classList.remove('hide');
        body.style.overflow = 'hidden';
    }

    // hamburger

    const menu = document.querySelector('.nav__list'),
          menuItem = document.querySelectorAll('.nav__item'),
          hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav__list_active');
        closeForm(modalFormSubmit);
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav__list_active');
        });
    });

    //Send form

    function clearInput() {
        inputs.forEach(elem => {
            elem.value = '';
        });
    }

    modalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        fetch('mailer/smart.php', {
            method: "POST",
            body: new FormData(modalForm),
        })
        .then(() =>{
            closeForm(modalFormSubmit);
            modalFormSubmit.classList.add('hide');
            openForm(modalFormThanks);
        })
        .catch((error) => {
            console.log(error);
        })
        .finally(() => {
            clearInput();
        });
    });
});