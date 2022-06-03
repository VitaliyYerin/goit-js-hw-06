const form = document.querySelector('.login-form');

function handleFormChange(event) {
    event.preventDefault();
    const form = event.target;
    const formElements = form.elements;
    const { value: email } = formElements.email;
    const { value: password } = formElements.password;

    const formFields = { email, password };

    if (email === '' || password === '') {
        alert('All fields must be filled');
    } else {
        console.log(formFields);
    }

    form.reset();
}

form.addEventListener("submit", handleFormChange);
