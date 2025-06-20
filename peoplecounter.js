/*let firstBatch = 5 ;
let secondBatch = 7 ;
 let count = firstBatch + secondBatch;
console.log(count);

let myAge = 28;
let humanDogRatio = 0.7;
let myDogAge = myAge * humanDogRatio;
console.log(myDogAge);

let bonusPoints=50;
console.log(bonusPoints);

bonusPoints=bonusPoints + 50;
console.log(bonusPoints);

bonusPoints=bonusPoints - 20;
console.log(bonusPoints);
*/

//setting up race

/*console.log
 
function increment() {
    console.log("the button was clicked");
}
increment()*/

let count = 0;
let countEL =  document.getElementById("count-el");
console.log(countEL)

function increment(){
    console.log("clicked")
    count = count + 1
   countEL.innerText = count
    console.log(count) 
}


let saved = document.getElementById("saved-button");
let saveEl=document.getElementById("save-el");
function  save(){
    let countStr = count + "-"
    saveEl.textContent += countStr

}