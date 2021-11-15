let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let adds = document.getElementById("adds")

let email = document.getElementById("email")
let phnum = document.getElementById("phno")
let pass = document.getElementById("pass")
let confpass = document.getElementById("conpass")
let emailerror = document.getElementById("emailerror")
let numerror = document.getElementById("numerror")
let passerror = document.getElementById("passerror")
let confpasserror = document.getElementById("confpasserror")
let msg = document.getElementById("msg")

let emailreg = /^([a-zA-Z0-9\.-]+)@([a-zA-Z0-9]+)\.([a-z]{2,3})$/;
let numreg = /^\(?([0-9]{3})[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
let valpass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;

function validate() {

    console.log((emailreg.test(email.value)));
    console.log((numreg.test(phnum.value)));
    console.log((valpass.test(pass.value)));
    console.log((fname.value));
    console.log((lname.value));

    if(fname.value.trim() ==""){
        fname.style.border="red"
    }
    else if(lname.value.trim() == ""){
        lname.style.border="red"
    }
    else if(adds.value.trim() == ""){
        adds.style.border="red"
    }
    else{
        fname.style.border="green"
        lname.style.border="green"
        adds.style.border="green"
    }
    if(confpass.value ==""){
        confpasserror.innerHTML = "";
    }
    else if ((pass.value) !== (confpass.value)){
        confpasserror.innerHTML = "incorrect password";
        confpasserror.style.color ="red";
        confpass.style.border = "2px solid red";
    
    }
    else{
  
        confpasserror.innerHTML = "&#10003";
        confpasserror.style.color="green";
        confpass.style.border = "2px solid green";
    }



    if (emailreg.test(email.value) == true && numreg.test(phnum.value) == true && valpass.test(pass.value) == true) {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green";
        email.style.border = "2px solid green";

        numerror.innerHTML = "&#10003;";
        numerror.style.color = "green";
        phnum.style.border = "2px solid green";

        passerror.innerHTML = "&#10003;";
        passerror.style.color = "green";
        pass.style.border = "2px solid green";

        return true;

    } else if (emailreg.test(email.value) == true && numreg.test(phnum.value) == true && valpass.test(pass.value) == false) {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green";
        email.style.border = "2px solid green";

        numerror.innerHTML = "&#10003;";
        numerror.style.color = "green";
        phnum.style.border = "2px solid green";

        passerror.innerHTML = "invalid password";
        passerror.style.color = "red";
        pass.style.border = "2px solid red";

        return false;
    } else if (emailreg.test(email.value) == true && numreg.test(phnum.value) == false && valpass.test(pass.value) == false) {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green";
        email.style.border = "2px solid green";

        numerror.innerHTML = "invalid phone number";
        numerror.style.color = "red";
        phnum.style.border = "2px solid red";

        passerror.innerHTML = "invalid password";
        passerror.style.color = "red";
        pass.style.border = "2px solid red";

        return false;
    } else if (emailreg.test(email.value) == false && numreg.test(phnum.value) == false && valpass.test(pass.value) == false) {
        emailerror.innerHTML = "invalid email";
        emailerror.style.color = "red";
        email.style.border = "2px solid red";

        numerror.innerHTML = "invalid phone number";
        numerror.style.color = "red";
        phnum.style.border = "2px solid red";

        passerror.innerHTML = "invalid password";
        passerror.style.color = "red";
        pass.style.border = "2px solid red";

        return false;
    } else if (emailreg.test(email.value) == false && numreg.test(phnum.value) == false && valpass.test(pass.value) == true) {
        emailerror.innerHTML = "invalid email";
        emailerror.style.color = "red";
        email.style.border = "2px solid red";

        numerror.innerHTML = "invalid phone number";
        numerror.style.color = "red";
        phnum.style.border = "2px solid red";

        passerror.innerHTML = "&#10003;";
        passerror.style.color = "green";
        pass.style.border = "2px solid green";

        return false;
    } else if(emailreg.test(email.value) == false && numreg.test(phnum.value) == true && valpass.test(pass.value) == false){
        emailerror.innerHTML = "invalid email";
        emailerror.style.color = "red";
        email.style.border = "2px solid red";

        numerror.innerHTML = "&#10003;";
        numerror.style.color = "green";
        phnum.style.border = "2px solid green";

        passerror.innerHTML = "invalid password";
        passerror.style.color = "red";
        pass.style.border = "2px solid red";

        return false;
    }
    else {
        emailerror.innerHTML = "&#10003;";
        emailerror.style.color = "green";
        email.style.border = "2px solid green";

        numerror.innerHTML = "invalid phone number";
        numerror.style.color = "red";
        phnum.style.border = "2px solid red";

        passerror.innerHTML = "&#10003;";
        passerror.style.color = "green";
        pass.style.border = "2px solid green"; 
    }




 


}
function validatePassword(pass) {
                
    if (pass.length === 0) {
        document.getElementById("msg").innerHTML = "";
        return;
    }
    var matchedCase = new Array();
    matchedCase.push("[A-Z]"); 
    matchedCase.push("[0-9]"); 
    matchedCase.push("[a-z]"); 

 
    var ctr = 0;
    for (var i = 0; i < matchedCase.length; i++) {
        if (new RegExp(matchedCase[i]).test(pass)) {
            ctr++;
        }
    }
    var color = "";
    var strength = "";
    switch (ctr) {
        case 0:
        case 1:
            strength = "Very Weak";
            color = "red";
            break;
        case 2:
            strength = "Medium";
            color = "orange";
            break;
        case 3:
            strength = "Strong";
            color = "green";
            break;
    }

    document.getElementById("msg").innerHTML = strength;
    document.getElementById("msg").style.color = color;
}