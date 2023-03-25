function checkPassword(){
    const user_password = document.getElementById("user_password").value;
    const user_repassword = document.getElementById("user_repassword").value;
    const form_action = document.querySelector("form").action;
    let warn = document.querySelector(".warn");

    if(user_password.length != 0){
        if(user_password == user_repassword){
            form_action == true;
        }
        else{
            warn.textContent = "Password don't match!"
            form_action == false;
        }
    }
    else {
        warn.textContent = "Password can't be empty!";
        form_action == false;
    }

    console.log("its working")
}