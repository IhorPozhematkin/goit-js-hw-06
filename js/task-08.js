const form = document.querySelector('.login-form');

form.addEventListener('submit', sendData);
function sendData (event) {
    event.preventDefault();
    const thisForm = event.currentTarget;
    const email = thisForm.elements.email.value;
    const password = thisForm.elements.password.value;
    if (email === "" || password === "")
    {
        alert('Enter Email and Password!'); 
    } else {
        console.log({Email: email, Password: password});
        thisForm.reset();
    }
}

