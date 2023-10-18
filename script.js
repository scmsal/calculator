function compute() {
    var principal= document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear() + parseInt(years);
    var amount = parseInt(principal) + parseFloat(interest);
    var result = document.getElementById("result");
    
   
    if (principal <=0){
        alert("Enter a positive number.");
        document.getElementById("principal").focus();
        }
    else {
        result.innerHTML = "If you deposit $" + "<mark>" + principal + "</mark>" + ",\<br\> at an interest rate of " + "<mark>" + rate + "%" + "</mark>" + "\<br\> You will receive an amount of $" + "<mark>" + amount + "</mark>" + ",\<br\> in the year " + "<mark>" + year + "</mark>" + "\<br\>";
         }
    }

    function updateRate()
    {
        var rateval = document.getElementById("rate").value;
        document.getElementById("rate_val").innerText = rateval; 
     }

function temperature () {
        //To convert Celsius to Farenheit
        //(CEL * 9/5) + 32
        var c = document.getElementById("Celsius").value;
        var f = (c * 9/5) + 32
        document.getElementById("Fahrenheit").value = f 
        }
        
function weight () {
            //To convert Kilograms to Pounds
            // kg * 2.2
            var kg = document.getElementById("kg").value;
            var lbs = kg * 2.2
            document.getElementById("lbs").value = lbs 
            }
        
function distance () {
            //To convert Kilometers to Miles
            //Distance(Miles) = Distance(Kms) * 0.62137
            
            var km = document.getElementById("km").value;
            var m = km * 0.62137
            document.getElementById("miles").value = m
            }
    
    
