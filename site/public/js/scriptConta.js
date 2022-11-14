const password = document.getElementById("input_password");
const icon = document.getElementById("icon");

function showHide(){
    var inputValidation = password.type == 'password';

    if(inputValidation){
        showPassword();
    }else{
        hidePassword();
    }
}

function showPassword(){
    password.setAttribute("type", "text")
}

function hidePassword(){
    password.setAttribute("type", "password")
}

function continue_entrar(){
    window.location="myPage.html"
}