
let email = {},
password = {},
signInButton;

const enableListeners=function() {
    email.input.addEventListener('blur',function () {
        if(isEmpty(email.input.value)){
            addErrors()
        }
    })
    password.input.addEventListener('blur',function(){})
    signInButton.input.addEventListener('blur',function(){})
}
const isValidPassword = function () {
    return password.length > 8;
}

const isValidEmailAddress = function(emailAddress) {
    // Basis manier om e-mailadres te checken.
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailAddress);
};

const isEmpty = function(fieldValue) {
    return !fieldValue || !fieldValue.length;
 };

const addErrors = function(){
    inputObject.errorMessage='Field is empty'
}
function getDOMElements() {
 email.field = document.querySelector('.js-email-field');
 email.errorMessage = email.field.querySelector('.js-email-message');
 email.input = email.field.querySelector('.js-email-input');

 password.field = document.querySelector('.js-password-field');
 password.errorMessage = password.field.querySelector('.js-password-message');
 password.input = password.field.querySelector('.js-password-input');
 signInButton = document.querySelector('.js-sign-in-button')
 enableListeners();
}

const enablevalidation = function() {
    getDOMElements();
}
const handleFloatingLabel = function() {
    getDOMElements();
}

function handlePasswordSwitcher() {
    const passwordinput = document.querySelector('.js-password')
    const passwordToggle = document.querySelector('.js-password-toggle')
    passwordToggle.addEventListener('change',function(){
        console.log(passwordToggle.checked);
        if(passwordToggle.checked == true){
            passwordinput.type ='text';

        }
        else{
            passwordinput.type ='password';

        }
    })

}

document.addEventListener('DOMContentLoaded', function () {
    console.log('Script loaded!');
    handleFloatingLabel();
    handlePasswordSwitcher();
});