function compute()
{
    p = document.getElementById("principal").value;

    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate/100;
    

    if (document.getElementById("principal").value == "") {
        alert("Please enter the principal amount");
        document.getElementById("principal").focus();
        return false;
    } else if(document.getElementById("principal").value <= 0) {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return false;
    }

    var year = new Date().getFullYear()+parseInt(years);
    document.getElementById("result").innerHTML="If you deposit \<mark\>"+principal+"\</mark\>,\<br\>at an interest rate of \<mark\>"+rate+"%\</mark\>\<br\>You will receive an amount of \<mark\>"+interest+"\</mark\>,\<br\>in the year "+year+"\<br\>";

    
    
}

function updateRate() {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText=rateval;
    }

