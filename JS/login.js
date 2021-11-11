let usname = document.getElementById("name");
let pass = document.getElementById("pass")
let unerror = document.getElementById("unerror")
let passerror = document.getElementById("passerror")


function validate() {
    if(usname.value.trim()!==""&& pass.value.trim()!==""){
        alert("invalid");
        // unerror.innerHTML="enter your username";
        // passerror.innerHTML="enter your password";
        return false;
    }
    else {
        return true;
    }

    }




