//declaring variables to have more modular code
const password = document.getElementById('password');
const confirm_password = document.getElementById('confirm_password');
const message = document.getElementById('message');
const createAccount = document.getElementById('createAccount');

//function to check if password input fields match
var check = function() {
    if (password.value == confirm_password.value) {
        message.style.color = 'green';
        message.textContent = 'matching';
    } else {
        message.style.color = 'red';
        message.textContent = 'not matching';       
    }
}

//when button is clicked user is redirected to project page
createAccount.addEventListener("click", function() {
    window.location.href = "https://www.theodinproject.com/lessons/node-path-intermediate-html-and-css-sign-up-form";
})

