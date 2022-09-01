const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')

//show input error message
// here we are passing the input element and custom message
//  we are changing the class of tag upon error 
// and also changing the default message to custom message
function showError(input,message){
    const formControl = input.parentElement;
    formControl.className = 'form-control error'
    const small = formControl.querySelector('small')
    small.innerText = message
}

// show success outline
function showSuccess(input){
    const formControl = input.parentElement;
    formControl.className = 'form-control success' // for success we will success class css

}

// validator for email
// copy paste from stack overflow
function isValidEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase())
}

//event listener
form.addEventListener('submit',function(e){
    e.preventDefault() // it does not automatically refresh each time
    console.log(username.value)

    if(username.value === ''){
        showError(username,'username is required')
    }else{
        showSuccess(username)
    }

    // here we are doing 2 checks on email 1st if it empty or filled and another one is whether it is valid or not?
    if(email.value === ''){
        showError(email,'email is required')
    }else if(!isValidEmail(email.value)){
        showError(email,'email is not valid')
    }
    else{
        showSuccess(email)
    }

    // same for password and password 2 which is confirm password
})