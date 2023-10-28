const btnStart = document.querySelector('#start');
const btnStop = document.querySelector('#stopbtn');
const btnStart1 = document.querySelector('#start1');
const btnStop1 = document.querySelector('#stopbtn1');
const stopAllBtn = document.getElementById("stopall");


let min = sec = 0, startTimer;
let min1 = sec1 = 0, startTimer1;



btnStart.addEventListener('click', () => {

    btnStart.classList.add('start-active');
    btnStop.classList.remove('stop-active');

    startTimer = setInterval(() => {
        sec++;
        if (sec == 60) {
            min++;
            sec = 0;
        }
        updateDisplay();
    }, 10);
    btnStop.addEventListener('click', () => {

        clearInterval(startTimer);
        updateDisplay();
        btnStart.classList.remove('start-active');
        btnStop.classList.add('stop-active');

    });



    function updateDisplay() {
        //Formated Display

        pmin = min < 10 ? '0' + min : min;
        psec = sec < 10 ? '0' + sec : sec;



        //Output

        document.querySelector('.minute').innerText = pmin;
        document.querySelector('.second').innerText = psec;

    }

    stopAllBtn.addEventListener('click', () => {
        clearInterval(startTimer);
        updateDisplay();
        btnStart.classList.remove('start-active');
        stopAllBtn.classList.add('stop-active');
    })
});


btnStart1.addEventListener('click', () => {

    btnStart1.classList.add('start-active');
    btnStop1.classList.remove('stop-active');

    startTimer1 = setInterval(() => {
        sec1++;
        if (sec1 == 60) {
            min1++;
            sec1 = 0;
        }
        updateDisplay();
    }, 10);
    btnStop1.addEventListener('click', () => {
        clearInterval(startTimer1);
        updateDisplay();
        btnStart1.classList.remove('start-active');
        btnStop1.classList.add('stop-active');
    
    });
    
    
    
    function updateDisplay() {
        //Formated Display
    
        pmin1 = min1 < 10 ? '0' + min1 : min1;
        psec1 = sec1 < 10 ? '0' + sec1 : sec1;
    
        document.querySelector('.minute1').innerText = pmin1;
        document.querySelector('.second1').innerText = psec1;
    
    }
    
    stopAllBtn.addEventListener('click', () => {
        clearInterval(startTimer1);
        updateDisplay();
        btnStart1.classList.remove('start-active1');
        stopAllBtn.classList.add('stop-active1');
    })
});
