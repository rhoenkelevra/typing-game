/**
 * Todo:
 * header timer
 * errors count and render red char on mistake
 * save records in local storage
 * display correct date
 */

const textDiv = document.querySelector('#typing');
const dateDiv = document.querySelector('#date');
const wpmDiv = document.querySelector('#wpm');
const cpmDiv = document.querySelector('#cpm');
const timeDiv = document.querySelector('#time');
const errorsDiv = document.querySelector('#errors');

const text = {
    python: 'False await, (param) else , import . pass None" break except in : raise True [ class finally is return and continue for lambda try as def from nonlocal while assert del global __ not with async elif _ if or yield __init__',
};
// const shuffledSentence = (text) => {
//     characters = text.split(' ').shuffle().join(' ');
//     return characters;
// };

const characters = text.python.split('').map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    textDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let currentChar = characters[cursorIndex];
currentChar.classList.add('cursor');
const numberOfWords = text.python.split(' ').length;
const numberOfChars = text.python.split('').length;
console.log(numberOfWords);
console.log(numberOfChars);
let errorsQtd = 0;
let startTime = null;
let endTime = null;

const typingEvent = document.addEventListener('keydown', ({ key }) => {
    if (!startTime) {
        startTime = new Date();
        //startTimer();
    }
    if (key === currentChar.innerText) {
        currentChar.classList.remove('cursor');

        currentChar.classList.add('correct');
        currentChar = characters[++cursorIndex];
    }
    if (cursorIndex >= characters.length) {
        endTime = new Date();
        const delta = endTime - startTime;
        const seconds = delta / 1000;
        const numberOfWords = text.python.split(' ').length;
        const numberOfChars = text.python.split('').length;
        const cpm = Math.floor((numberOfChars / seconds) * 60);
        const wpm = Math.floor((numberOfWords / seconds) * 60);
        cpmDiv.innerText = `${cpm} chars per minute`;
        wpmDiv.innerText = `${wpm} words per minute`;
        document.removeEventListener('keydown', typingEvent);
        return;
    }
    currentChar.classList.add('cursor');
});

// Timer
// const timeLimit = 60
// let timePassed = 0
// let timerInterval = null
// let timeLeft;

// function startTimer() {
//    timeInterval = setInterval(() => {
// 	   timePassed = timePassed += 1;
// 	   timeLeft = timeLimit - timePassed

//    }, 1000)
// }
