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
function checkEmail(input){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(re.test(input.value.trim())){
        showSuccess(input)
    }else{
        showError(input,
            'Email is not valid')
    }
}

// check required fields
function checkRequired(inputArr){
    inputArr.forEach(function(input){
        if(input.value.trim() === ''){
            showError(input,
                `${getFieldName(input)} is required`)
        }else{
            showSuccess(input)
        }
    })
}

// check input length
function checkLength(input,min,max){
    if(input.value.length < min){
        showError(input,
            `${getFieldName(input)} must be atleast ${min} characters`)

    }else if(input.value.length > max){
        showError(input,
            `${getFieldName(input)} must be less than ${max} characters`)
    }else{
        showSuccess(input)
    }
}

//get field name
function getFieldName(input){
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}

// check password match
function checkPasswordMatch(input1, input2){
    if(input1.value !== input2.value){
        showError(input2,
            'Passwords do not match')
    }
}

//event listener
// here we did not added any function to button 
// all the properties like username , email and password automatically sent 
form.addEventListener('submit',function(e){
    e.preventDefault() // it does not automatically refresh each time

    checkRequired([username,email,password,password2]);
    checkLength(username,3,15)
    checkLength(password,7,25)
    checkEmail(email)
    checkPasswordMatch(password,password2)
})

//end