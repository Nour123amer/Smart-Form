var email = document.querySelector(".email");
var password = document.querySelector(".password");
var name_ = document.querySelector(".name");
var errorMessage = document.querySelector('.errorMessage');
var signUpBtn = document.getElementById('signupBtn');
var user = document.querySelector('.user');
var loginBtn = document.querySelector('.login-btn');
var i;
var loginList=[];

function validateName(){
    var nameRegex=/^[A-Z][a-z]{3,8}$/;
    var errorMessageName = document.querySelector(".errorMessageName");
    element = name_.value;
    // window.onload(function(){
    //     errorMessageName.classList.add('d-none');

    // });
    if(nameRegex.test(element)==true){
        errorMessageName.classList.add('d-none');
        name_.classList.remove('in-valid');
        name_.classList.add('valid');
        return true;
    }else{
        errorMessageName.classList.remove('d-none');
        name_.classList.add('in-valid');
        name_.classList.remove('valid');
        return false;
    }
}

function validateEmail(){
    var emailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
    var errorMessageEmail = document.querySelector('.errorMessageEmail');
    element = email.value;
    if(emailRegex.test(element)==true){
        errorMessageEmail.classList.add('d-none');
        email.classList.remove('in-valid');
        email.classList.add('valid');
        return true;

    }else{
        errorMessageEmail.classList.remove('d-none');
        email.classList.add('in-valid');
        email.classList.remove('valid');
        return false;
    }
}

function validatePassword(){
    var passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
    var errorMessagePassword = document.querySelector('.errorMessagePassword');
    element = password.value;
    if(passwordRegex.test(element)==true){
        errorMessagePassword.classList.add('d-none');
        password.classList.remove('in-valid');
        password.classList.add('valid');
        return true;
    }else{
        errorMessagePassword.classList.remove('d-none');
        password.classList.add('in-valid');
        password.classList.remove('valid');
        return false;
    }
}

function addUser(){
    if(
        validateName() &&
        validateEmail() &&
        validatePassword()
    ){
    var newUser={
        personEmail : email.value,
        personPass : password.value,
        personName : name_.value,
    }

    loginList.push(newUser);
    localStorage.setItem("loginList", JSON.stringify(loginList));
    errorMessage.innerHTML="success";
    clearForm();
     window.location.replace("login.html");
}
}


signUpBtn.addEventListener('click',(e)=>{
   e.preventDefault(); 
   addUser 
} );



function clearForm(){
    email.value="";
    password.value="";
    name_.value="";

    document.querySelector(".errorMessageName").classList.add('d-none');
    document.querySelector('.errorMessageEmail').classList.add('d-none');
    document.querySelector('.errorMessagePassword').classList.add('d-none');


}

// function validateLoginInputs(){
//     if(
//         validateEmail() &&
//         validatePassword()
//     ){
//     var newUser={
//         personEmail : email.value,
//         personPass : password.value,
//     }

//     loginList.push(newUser);
//     localStorage.setItem("loginList", JSON.stringify(loginList));
//     errorMessage.innerHTML="success";
//     clearForm();
//      window.location.assign("login.html");
// }
// }


function checkExistence(){
    loginList=JSON.parse(localStorage.getItem("loginList"))
    for(i=0;i<loginList.length;i++){
        if((loginList[i].personEmail==email.value) && loginList[i].personPass==password.value){
            errorMessage.innerHTML= "Email is exist";
        }else{
            signUp.addEventListener("click",addUser);
        }
    }
}


function moveUserToWelcomePage(){
    loginList=JSON.parse(localStorage.getItem("loginList"))
    for(i=0;i<loginList.length;i++){
        if((loginList[i][personEmail]==email.value) && loginList[i][personPass]==password.value){
            window.location.assign('welcome.html'); 
        }
    }
}

loginBtn.addEventListener('click',moveUserToWelcomePage)