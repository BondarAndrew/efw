// let timer;
// let seconds = 0;

// function startTimer() {
//     const inputElement = document.getElementById('timerInput');
//     seconds = parseInt(inputElement.value) || 0; 
//     inputElement.value = ''; 
//     displayTimee();
//     timer = setInterval(updateTimer, 1000);
// }

// function stopTimer() {
//     clearInterval(timer);
// }

// function updateTimer() {
//     seconds--;
//     if (seconds < 0) {
//         stopTimer();
//         alert('Таймер завершен!');
//     } else {
//         displayTimee();
//     }
// }

// function displayTimee() {
//     const timerElement = document.getElementById('timer');
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     timerElement.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// }


// let stopwatch;
// let elapsedSeconds = 0;

// function startStopwatch() {
//     stopwatch = setInterval(updateStopwatch, 1000);
// }

// function updateStopwatch() {
//     elapsedSeconds++;
//     displayTime();
// }

// function displayTime() {
//     const stopwatchElement = document.getElementById('stopwatch');
//     const minutes = Math.floor(elapsedSeconds / 60);
//     const remainingSeconds = elapsedSeconds % 60;
//     stopwatchElement.textContent = `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
// }


let date = new Date()
console.log(date);

new Date(2024,5,8,12)

const date = new Date();
console.log('Date: ' + date);


console.log('getDate(): ' + date.getDate());



console.log('getDay(): ' + date.getDay());



console.log('getMonth(): ' + date.getMonth());



console.log('getFullYear(): ' + date.getFullYear());



console.log('getHours(): ' + date.getHours());



console.log('getMinutes(): ' + date.getMinutes());



console.log('getSeconds(): ' + date.getSeconds());



console.log('getMilliseconds(): ' + date.getMilliseconds());



console.log('getTime(): ' + date.getTime());

