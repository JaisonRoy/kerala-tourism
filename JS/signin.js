let email = document.getElementById("email")
let phnum = document.getElementById("phno")
let pass = document.getElementById("pass")
let confpass = document.getElementById("conpass")
let emailerror = document.getElementById("emailerror")
let numerror = document.getElementById("numerror")
let passerror = document.getElementById("passerror")
let confpasserror = document.getElementById("confpasserror")

function validate(){
    let emailreg =/^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})(.[a-zA-Z]{2,3}?)$/;
    let numreg =/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    let valpass =/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
    
            if(emailreg.test(email.value)){
               emailerror.innerHTML="valid";
               email.style.border="2px solid green";
               return true;
               
           }
            if(numreg.test(phnum.value)){
                passerror.innerHTML="valid";
                passerror.style.border="2px solid green";
                return true;
            }
            if(valpass.test(pass.value)){
                passerror.innerHTML="valid";
                pass.style.border="2px solid green";
                return true;
            }
            else{
            passerror.innerHTML="invalid password";
            passerror.style.border="2px solid red";
            return false;
           }


}    