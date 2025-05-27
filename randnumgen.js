const buttonGen= document.getElementById("buttonGen");
const labelGen1= document.getElementById("labelGen1");
const labelGen2= document.getElementById("labelGen2");
const labelGen3= document.getElementById("labelGen3");
const min=1
const max=6
let random;

buttonGen.onclick= function(){
   random = Math.floor(Math.random() * max) + min;
    labelGen1.textContent = random;
     random = Math.floor(Math.random() * max) + min;
    labelGen2.textContent = random;
     random = Math.floor(Math.random() * max) + min;
    labelGen3.textContent = random;

}