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
        subResult.tectContent = "you have not subscribed";
    }
}
