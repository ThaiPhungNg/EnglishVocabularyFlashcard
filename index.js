
function scrollToStartSection(){
    document.getElementById('start_section').scrollIntoView();
}

//----------------------- sign in - sign up------------
function checkPassword(pass){
    if(pass.length < 6){
        return false;
    }
    for(let i = 0 ; i < pass.length; i++){
        if(pass.charCodeAt(i) >= 65 && pass.charCodeAt(i) <= 90)
            return true;
    }
    return false;
}

function doubleCheck(pass, confPass){
    if(pass === confPass)
        return true;
    else
        return false;
}

function signUp(){
    let _user = document.getElementById("userName_SignUp").value;
    let _pass = document.getElementById("pass_SignUp").value;
    let _confPass = document.getElementById("conf_pass_SignUp").value;
    if(!(checkPassword(_pass))){
        alert("Mật khẩu phải có ít nhất 6 ký tự và tối thiểu một ký tự viết hoa!");
        return ;
    }
    if(!(doubleCheck(_pass,_confPass))){
        alert("Xác nhận mật khẩu chưa chính xác!");
        return ;
    }
   
    localStorage.setItem("user",_user);
    localStorage.setItem("pass",_pass);
    location.href="http://127.0.0.1:5500/signIn.html"
    alert("Bạn đã đăng ký thành công.");
    return ;
}

function checkAccount(){
    let _user = document.getElementById("userName_SignIn").value;
    let _pass = document.getElementById("pass_SignIn").value;
    if(localStorage.getItem("user") === _user && localStorage.getItem("pass") === _pass){
         window.location.href("http://127.0.0.1:5500/index.html",true);
        alert("Bạn đã đăng nhập thành công!");
       return;
    }
    else{
        alert("Thông tin đăng nhập chưa chính xác");
        return
    }
}


