//form

const modalBackground = document.querySelector('.overlay');
const modalFormSubmit = document.querySelector('.modal__submit');
const modalFormThanks = document.querySelector('.modal__thanks');
const callBtn = document.querySelector('.button_nav');
const closeFromBtns = document.querySelectorAll('[data-close]');
const submitBtn = document.querySelector('.button_submit');

callBtn.addEventListener('click', () => {
    openForm(modalFormSubmit);
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