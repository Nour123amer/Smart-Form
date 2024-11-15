// var email = document.querySelector(".email");
// var password = document.querySelector(".password");
// var name_ = document.querySelector(".name");
// var btn = document.querySelector("button");
// var errorMessage = document.querySelector(".error-message");
// var signUp=document.querySelector(".signUp");
// var user=document.querySelector(".user")
// // var nameValue= document.querySelector(".name").value;
// // var passValue = document.querySelector(".password").value;
// // var emailValue= document.querySelector(".email").value;
// var emailRegex=/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
// var passwordRegex=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/;
// var nameRegex=/^[A-Z][a-z]{3,}$/;

// var i;
// var loginList=[];




// function addUser(){
//     if(
//         validateData(email,emailRegex)&&
//         validateData(password,passwordRegex)
//     )
//     var newUser={
//         personEmail : email.value,
//         personPass : password.value,
//         personName : name_.value,
//     }

//     loginList.push(newUser);
//     localStorage.setItem("loginList", JSON.stringify(loginList));
// }



// function checkExistence(){
//     loginList=JSON.parse(localStorage.getItem("loginList"))
//     for(i=0;i<loginList.length;i++){
//         if((loginList[i][personEmail]==emailValue) && loginList[i][personPass]==passValue){
//             errorMessage.innerHTML= "Email is exist";
//         }else{
//             signUp.addEventListener("click",function(){
//                 addUser();
//             })
//         }
//     }
// }



// var userName;
// function moveToLogin(){
//     if(validateData){
        // btn.addEventListener("click",function(){
        //     if(!(regex.test(password.value))){
        //         errorMessage.innerHTML="Password is incorrect!";
        //     }else if(!(regex.test(email.value))){
        //         errorMessage.innerHTML="Email is incorrect!";
        //     }else if(!(regex.test(name_.value))){
        //         errorMessage.innerHTML="Name is incorrect!";
        //     }else if(!((regex.test(email.value))&&(regex.test(password.value)))){
        //         errorMessage.innerHTML="Name and Password are incorrect!";
        //     }
        // })

        // btn.addEventListener("click",function(){
            // addUser();
//             localStorage.setItem("loginList", JSON.stringify(loginList));
//             for(i=0;i<(loginList.JSON.parse()).length;i++){
//             if(loginList[i].personEmail ==email.value ){
//                  window.open('welcome.html', 'welcome page', '_blank');
//                  userName=`
//                  <span> ${loginList[i].personName}</span>
//                  `
//                  user.innerHTML += userName;
//                  loginList.push(userName);

                
//             }else{
                   
//                         errorMessage.innerHTML="Email exist";
                
//             }
//         }
           
//     clearForm();
// }
// }

// btn.addEventListener("click",moveToLogin);

// if(signUp!=null){
// signUp.addEventListener("click",function(){
//     name_.classList.remove("d-none");
//     checkExistence;
// })
// }

// function validateData(element,regex){
//     if(regex.test(element.value)){
//         element.classList.add("is-valid");
//         return true;
//   }

//         element.classList.add("is-invalid");
//         return false;
    
// }

// function clearForm(){
//     email.value="";
//     password.value="";
//     name_.value="";
// }



// function checkLogin(){
// // btn.addEventListener("click",function(){
//     loginList=JSON.parse(localStorage.getItem("loginList"))
//         for(i=0;i<loginList.length;i++){
//             if((loginList[i][personEmail]==personEmail) ){
//                 console.log(loginList[i].personName);
//                 errorMessage.innerHTML= "Email is exist";
//             }else{
         
//                     moveToLogin();
                
//             }
//         }
//         var userName=`
//   <span> ${loginList[i].personName}</span>
//   `
//   user.innerHTML += userName;


// }

// if(btn != null){
// btn.addEventListener("click",checkLogin);
// }
 