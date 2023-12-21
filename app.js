// setInterval(function () {
//     let date = new Date();
//     let hour = date.getHours();
//     let minute = date.getMinutes();
//     let second = date.getSeconds();
//     if (second < 10) {
//         second = '0' + second;
//     }
//     let time = `${hour}:${minute}:${second}`;
//     document.getElementById('clock').innerHTML = time;
// }, 1000);
let timers = [];

function startClock(index) {
    if (!timers[index]) {
        timers[index] = setInterval(() => {
            updateTime(index);
        }, 1000);
    }
}

function stopClock(index) {
    clearInterval(timers[index]);
    timers[index] = null;
    updateTime(index, true);
}

function stopAllClocks() {
    for (let i = 1; i <= timers.length; i++) {
        stopClock(i);
    }
}

function updateTime(index, reset = false) {
    const timeElement = document.getElementById(`time${index}`);
    let currentTime = timeElement.innerHTML;
    let [minutes, seconds] = currentTime.split(':').map(Number);

    if (reset) {
        minutes = 0;
        seconds = 0;
    } else {
        seconds++;
        if (seconds === 60) {
            minutes++;
            seconds = 0;
        }
    }

    timeElement.innerHTML = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}
