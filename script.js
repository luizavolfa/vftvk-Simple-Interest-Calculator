//button compute
function calculate()
{
    // alert to insert integer and positive number
    var p = document.getElementById("amount").value;
    if (p < 0)
    {
        alert("Insert a positive number ")
    }
    else
    { 
        // calculating the interest
        var p = document.getElementById("amount").value;
        var n = document.getElementById("rate").value;
        var r = document.getElementById("numofyears").value;
        var interest = (p*n*r/100);
        
        // calculating the year of withdraw
        var currentTime = new Date();
        var finalyear = parseInt(currentTime.getFullYear()) + parseInt(r);
        
        // displaying the results 
        var resultDisplay = document.getElementById("result");
        resultDisplay.innerHTML = "If you deposit " + "<span class='highlight'>" + p + "</span>" + " at an interest rate of " + "<span class='highlight'>" + n + "</span>" + "%." + "<br>" + "You will receive an amount of " + "<span class='highlight'>" + interest + "</span>" + " in the year" + "<span class='highlight'>" + finalyear + "</span>" + ".";   
    
    }   
}

function SliderValue()
{
    var slider = document.getElementById("rate");
    var output = document.getElementById("rate_display");
    output.innerHTML = slider.value;

    slider.oninput = function()
    {
        output.innerHTML = this.value; 
    }

}
        
