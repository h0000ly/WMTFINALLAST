function validate() {
    var username = document.getElementById('username');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password2 = document.getElementById('c-password');
    var usernameValue = username.value.trim();
    var emailValue = email.value.trim();
    var passwordValue = password.value.trim();
    var password2Value = password2.value.trim();
    if(usernameValue === ''){
        setError(username, 'Username field must be filled');
        return false;
    }
    else if(checkLength(usernameValue)){
        setError(username, 'Username length range 8-20');
        return false;
    }
    else{
        setSuccess(username);
    }

    if(emailValue === ''){
        setError(email, 'E-mail field must be filled');
        return false;
    }
    else if(emailValue.indexOf("@") == -1){
        setError(email, 'Not a valid email');
        return false;
    }
    else{
        setSuccess(email);
    }

    if(passwordValue === ''){
        setError(password, 'Password field must be filled');
        return false;
    }
    else if(checkLength(passwordValue)){
        setError(password, 'Password length range 8-20');
        return false;
    }
    else{
        setSuccess(password);
    }

    if(password2Value === ''){
        setError(password2, 'Password confirmation blank');
        return false;
    }
    else if(passwordValue !== password2Value){
        setError(password2, 'Passwords do not match');
        return false;
    }
    else{
        setSuccess(password2);
        return true;
    }
}

function setError(input, message){
    var inputForm = input.parentElement;
    var targetTag = inputForm.querySelector('span');
    inputForm.className = 'input error';
    targetTag.innerText = message;
}

function setSuccess(input){
    var inputForm = input.parentElement;
    inputForm.className = 'input success';
}

function checkLength(input){
    if(input.length > 0 && ((input.length <8)||(input.length>20))){
        return true;
    }
    return false;
}