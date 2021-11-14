let email = document.getElementById("mail");
let pass = document.getElementById("pass")
let emailerror = document.getElementById("emailerror")
let passerror = document.getElementById("passerror")

let emailreg = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
let valpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/

function formvalidate() {
           console.log(email.value)
           console.log((emailreg.test(email.value)));
           console.log((valpass.test(pass.value)));

if(emailreg.test(email.value.trim()) == true && valpass.test(pass.value.trim()) == true){
        emailerror.innerHTML="valid";
        email.style.border="2px solid green";
        passerror.innerHTML="valid";
        pass.style.border="2px solid green";
        return true;
}else if(emailreg.test(email.value.trim()) == false && valpass.test(pass.value.trim()) == false ){
        emailerror.innerHTML = "invalid";
        email.style.border="2px solid red";
        passerror.innerHTML="invalid password";
        pass.style.border="2px solid red";
        return false
}else if(emailreg.test(email.value.trim()) == true && valpass.test(pass.value.trim()) == false){
     emailerror.innerHTML="valid";
     email.style.border="2px solid green";
     passerror.innerHTML="invalid password";
     pass.style.border="2px solid red";
     return false;
}else{
    emailerror.innerHTML = "invalid";
    email.style.border="2px solid red";
    passerror.innerHTML="valid";
    pass.style.border="2px solid green";
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
