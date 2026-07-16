function regStd(){

const fname=document.getElementById("fname").value;
const lname=document.getElementById("lname").value;
const sid=document.getElementById("sid").value;
const email=document.getElementById("email").value;
const credit=document.getElementById("credit").value;
const dept=document.getElementById("dept").value;


document.getElementById("fnameE").innerHTML="";
document.getElementById("lnameE").innerHTML="";
document.getElementById("sidE").innerHTML="";
document.getElementById("emailE").innerHTML="";
document.getElementById("creditE").innerHTML="";
document.getElementById("deptE").innerHTML="";
document.getElementById("sucs").innerHTML="";


let valid=true;


if(fname==""){
    document.getElementById("fnameE").innerHTML="First name is required";
    valid=false;
}


if(lname==""){
    document.getElementById("lnameE").innerHTML="Last name is required";
    valid=false;
}


if(sid==""){
    document.getElementById("sidE").innerHTML="Student ID is required";
    valid=false;
}
else if(!sid.includes("-")){
    document.getElementById("sidE").innerHTML="Student ID must contain -";
    valid=false;
}


if(email==""){
    document.getElementById("emailE").innerHTML="Email is required";
    valid=false;
}
else if(!email.includes("@student.aiub.edu")){
    document.getElementById("emailE").innerHTML="Email must contain @student.aiub.edu";
    valid=false;
}


if(credit==""){
    document.getElementById("creditE").innerHTML="Credit is required";
    valid=false;
}
else if(credit<0 || credit>=148){
    document.getElementById("creditE").innerHTML="Credit must be 0 to 147";
    valid=false;
}


if(dept==""){
    document.getElementById("deptE").innerHTML="Department is required";
    valid=false;
}


if(valid==false){
    return false;
}


document.getElementById("tabList").innerHTML+="<tr>"+
"<td>"+fname+"</td>"+ "<td>"+lname+"</td>"+
"<td>"+sid+"</td>"+
"<td>"+email+"</td>"+
"<td>"+credit+"</td>"+
"<td>"+dept+"</td>"+
"</tr>";


document.getElementById("sucs").innerHTML="Student Registration Successful";


document.getElementById("fname").value="";
document.getElementById("lname").value="";
document.getElementById("sid").value="";
document.getElementById("email").value="";
document.getElementById("credit").value="";
document.getElementById("dept").value="";




return false;
}