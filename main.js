//logical operators
if(3==3 && 4==4){
    document.write("the condition is True")
}

if (3==3 && 4==6){
    document.write("the statement is False and will not be printed")
}
const age=21;
if(age>18){
    alert("old enough to regiser");
}else{
    alert("not old enough to register");
}

const x =20;
if(x<10){
    document.getElementById("demo2").innerHTML="x is less than 10";
}else if(x>10){
    document.getElementById("demo2").innerHTML="x is greater than 10";
}else{
    document.getElementById("demo2").innerHTML="is 10,it is neither greater or less than 10";
}