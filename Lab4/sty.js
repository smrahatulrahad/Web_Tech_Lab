let attempt=3;


function login(){

const uname=document.getElementById("usname").value;
const pass=document.getElementById("upas").value;


if(uname=="aiub" && pass=="student"){

document.getElementById("sucs").innerHTML="Successful"; 
attempt=3;
}
else{

    if(!uname){
        document.getElementById("nameE").innerHTML = "Name is required";
    }else if (name.length<3){
      document.getElementById("nameE").innerHTML = "Name should be at least 3 char long";  
    }   
    

    if(!pass){
        document.getElementById("passE").innerHTML = "Password is required";
    }else if (pass.length<3){
      document.getElementById("passE").innerHTML = "Password should be at least 3 char long";  
    }  
 
    attempt--;

    if(attempt>0){
        document.getElementById("atFail").innerHTML="You have"+attempt+" attempt left";
    }
    else{
        document.getElementById("atFail").innerHTML="Blocked for 5 min";
    }


}




return false;
}