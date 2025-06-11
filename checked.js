const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const mastercardBtn = document.getElementById("mastercardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const subResult = document.getElementById("subResult");
const payResult = document.getElementById("payResult");

mySubmit.onclick = function(){
    if(myCheckBox.checked){
        subResult.textContent = "you have subscribed";
    }
     else{
        subResult.textContent = "you have not subscribed";
    }
    if(visaBtn.checked){
        payResult.textContent = "you are paying with visa";
    }
    else if(mastercardBtn.checked){
        payResult.textContent = "you are paying with mastercard";
    }
    else if (paypalBtn.checked){
        payResult.textContent = "you are paying with paypal";
    }
    else{
        payResult.textContent = "you must choose one " ;
    }
    
}
