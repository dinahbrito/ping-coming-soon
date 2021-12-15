const form = document.getElementById('form');
const email = document.getElementById('email');

form.addEventListener('submit', (e) =>
{
    e.preventDefault();

    checkEmail();
});

function checkEmail()
{
    //get value from input
    const emailValue = email.value;

    if (emailValue === '') {
        // show error message
        // add error class
        setErrorFor(email, 'Please provide a valid email address')
    }
}

function setErrorFor(input, message)
{
    const inputWrapper = input.parentElement; //.input-wrapper
    const small = inputWrapper.querySelector('small');
    // add error message inside small
    small.innerText = message;

    // adds error class
    inputWrapper.className = 'input-wrapper error';

}
