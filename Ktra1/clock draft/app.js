let stopAllBtn = document.getElementById("stopall");
let startBtn = document.getElementById("start");
let stopBtn = document.getElementById("stopbtn");
const minute = document.querySelector('.minute');
const seconds = document.querySelector('.second');

let startBtn1 = document.getElementById("start1");
let stopBtn1 = document.getElementById("stopbtn1");
const minute1 = document.querySelector('.minute1');
const seconds1 = document.querySelector('.second1');

let startBtn2 = document.getElementById("start2");
let stopBtn2 = document.getElementById("stopbtn2");
const minute2 = document.querySelector('.minute2');
const seconds2 = document.querySelector('.second2');





startBtn.addEventListener("click", function () {
    let a = setInterval(() => {
        const Day = new Date();
        const getMinutes = `${Day.getMinutes()}`.padStart(2, '0');
        const getSeconds = `${Day.getSeconds()}`.padStart(2, '0');
    
    
        minute.innerText = getMinutes;
        seconds.innerText = getSeconds;
    
        
    }, 1000);
    
    stopBtn.addEventListener("click", function () {
        clearInterval(a);
    })

    

    stopAllBtn.addEventListener("click", function() {
        clearInterval(a);
    })

});


startBtn1.addEventListener("click", function () {
    let a1 = setInterval(() => {
        const Day = new Date();
        const getMinutes = `${Day.getMinutes()}`.padStart(2, '0');
        const getSeconds = `${Day.getSeconds()}`.padStart(2, '0');
        
        
        minute1.innerText = getMinutes;
        seconds1.innerText = getSeconds;
        
        
    }, 1000);
    
    stopBtn1.addEventListener("click", function () {
        clearInterval(a1);
    })
    

    stopAllBtn.addEventListener("click", function() {
        clearInterval(a1);
    })

});


startBtn2.addEventListener("click", function () {
    let a2 = setInterval(() => {
        const Day = new Date();
        const getMinutes = `${Day.getMinutes()}`.padStart(2, '0');
        const getSeconds = `${Day.getSeconds()}`.padStart(2, '0');
        
        
        minute2.innerText = getMinutes;
        seconds2.innerText = getSeconds;
        
        
    }, 1000);
    
    stopBtn2.addEventListener("click", function () {
        clearInterval(a2);
    })

    
    stopAllBtn.addEventListener("click", function() {
        clearInterval(a2);
    })

});

