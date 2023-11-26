// Chapter 49-52

//! 3
const deleteRow = (id) => {
    const row = document.getElementById(id);
    row.style.display = 'none';

    const formId = 'form' + id;
    const form = document.getElementById(formId);
    form.style.display = 'none';
};

const editRecord = (formId, recordId) => {
    const form = document.getElementById(formId);
    form.hidden = false;

    const [nameInput, classInput] = form.querySelectorAll('input');
    const tableRow = document.getElementById(recordId);
    const [, name, classNo] = tableRow.getElementsByTagName('td');

    nameInput.value = name.innerHTML;
    classInput.value = classNo.innerHTML;
};

const updateRecord = (formId, recordId) => {
    const form = document.getElementById(formId);
    const [nameInput, classInput] = form.querySelectorAll('input');
    const tableRow = document.getElementById(recordId);
    let [, name, classNo] = tableRow.getElementsByTagName('td');

    name.innerHTML = nameInput.value;
    classNo.innerHTML = classInput.value;
    form.hidden = true;
};

//! 1
const showInput = () => {
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const emailInput = document.getElementById('emailInput');
    const passwordInput = document.getElementById('passwordInput');

    email.innerHTML = emailInput.value;
    password.innerHTML = passwordInput.value;
};

//! 2
const toggleLoremIpsum = () => {
    const dots = document.getElementById('dots');
    const moreText = document.getElementById('more');
    const btnText = document.getElementById('myBtn');

    if (dots.style.display === 'none') {
        dots.style.display = 'inline';
        btnText.innerHTML = 'Read more';
        moreText.style.display = 'none';
    } else {
        dots.style.display = 'none';
        btnText.innerHTML = 'Read less';
        moreText.style.display = 'inline';
    }
};

// Additional functions or modifications can be added as needed.
