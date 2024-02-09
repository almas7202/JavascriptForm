function validation() {
    let no1 = document.forms["myForm"]["no1"].value;
    let no2 = document.forms["myForm"]["no2"].value;
    let cvalue = document.forms["myForm"]["calculator"].value;
    let error1 = document.getElementById("error1");
    let error2 = document.getElementById("error2");
    let error3 = document.getElementById("error3");
    console.log(cvalue)
    
    if (!isNaN(no1) && !isNaN(no2) && document.querySelector('input[name="calculator"]:checked')) {
        Number(no1)
        Number(no2)
        if(cvalue == "addition"){
            let ans = no1 + no2
            document.getElementById("demo").innerHTML  = "Result is :" +ans
        }
        else if(cvalue == "subtration"){
            let ans = no1 - no2
            document.getElementById("demo").innerHTML  = "Result is :" +ans
        }
        else if(cvalue == "multiplication"){
            let ans = no1 * no2
            document.getElementById("demo").innerHTML  = "Result is :" +ans
        }
        else if(cvalue == "division"){
            let ans = no1 / no2
            document.getElementById("demo").innerHTML  = "Result is :" +ans
        }
    }
    else if(!isNaN(no1) && no1.length == 0){
        error1.innerHTML ="Please Enter Valid Number 1"
    }   
    else if(!isNaN(no2) && no2.length == 0){
        error2.innerHTML = "Please Enter Valid Number 2"
    }
    else{
        error3.innerHTML = "Please select a Radio button for opertion"
    }
}