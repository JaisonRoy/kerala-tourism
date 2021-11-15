let email = document.getElementById("mail");
let pass = document.getElementById("pass")
let emailerror = document.getElementById("emailerror")
let passerror = document.getElementById("passerror")

let emailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})$/;
let valpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

function formvalidate() {
    // console.log(email.value)
    // console.log((emailreg.test(email.value)));
    // console.log((valpass.test(pass.value)));

    if(email.value=="" && pass.value==""){
        emailerror.innerHTML="";
        passerror.innerHTML="";
        return false;
    }


    else if (emailreg.test(email.value) == true && valpass.test(pass.value) == true) {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green"
        email.style.border = "2px solid green";
        passerror.innerHTML = "&#10003;";
        passerror.style.color = "green"
        pass.style.border = "2px solid green";

        return true;
    } else if (emailreg.test(email.value) == false && valpass.test(pass.value) == false) {
        emailerror.innerHTML = "invalid email";
        emailerror.style.color = "red"
        email.style.border = "2px solid red";
        passerror.innerHTML = "invalid password";
        passerror.style.color = "red"
        pass.style.border = "2px solid red";

        return false
    } else if (emailreg.test(email.value) == true && valpass.test(pass.value) == false) {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green"
        email.style.border = "2px solid green";
        passerror.innerHTML = "invalid password";
        passerror.style.color = "red"
        pass.style.border = "2px solid red";

        return false;
    } else {
        emailerror.innerHTML = "invalid email";
        emailerror.style.color = "red"
        email.style.border = "2px solid red";
        passerror.innerHTML = "&#10003;";
        passerror.style.color = "green"
        pass.style.border = "2px solid green";

        return false;
    }


    

    // if(emailreg.test(email.value)){
    //     emailerror.innerHTML="valid";
    //     email.style.border="2px solid green";
    //     return true;
    // }           
    // else if (valpass.test(pass.value)){
    //     passerror.innerHTML="valid";
    //     pass.style.border="2px solid green";
    //     return true;
    // }else if (emailreg.test(email.value) == false){
    //     emailerror.innerHTML = "invalid";
    //     email.style.border="2px solid red";
    // }else if(valpass.test(pass.value) == false){
    //     passerror.innerHTML="invalid password";
    //  pass.style.border="2px solid red";
    //  return false; 
    // }else{
    //     console.log(pass.value) 
    // }

    // console.log(pass.value)
    // if(valpass.test(pass.value) == true ) {
    //  passerror.innerHTML="valid";
    //  pass.style.border="2px solid green";
    // }
    // else {
    //  passerror.innerHTML="invalid password";
    //  pass.style.border="2px solid red";
    //  return false; 
    // }




}