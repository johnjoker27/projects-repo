function countdown(){
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}
countdown()

let lap1 = 34
let lap2 = 33
let lap3 = 36

function logLap() {
    let totalTime = lap1 + lap2 + lap3
    console.log(totalTime)
}

logLap()



let lapscompleted = 0
function lapinc(){
    let lapscompleted = lapscompleted + 1

}
lapinc()
lapinc()
lapinc()

console.log(lapscompleted);

let countEL = getdocumentById("count-el");
let count = on;

function increment(){
    count = count + 1
    countEL.innerText = count
}
let count = 0;
let countdownEL = document.getElementById("count-el");
'
function increment() {
 count = count +1 
 countEL.innerText = count 
}
let countEL = document.getElementById("count-el");
let count = 0;
function increment(){
    count = count + 1
    countEL.innerText = count

}