const textDiv = document.querySelector('#typing');

const text = {
    python: 'False await ( else , import . pass None " break except in : raise True [ class finally is return and continue for lambda try as def from nonlocal while assert del global __ not with async elif _ if or yield __init__',
};
// const shuffledSentence = (text) => {
//     characters = text.split(' ').shuffle().join(' ');
//     return characters;
// };

const character = text.python.split('').map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    textDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let currentChar = character[cursorIndex];
currentChar.classList.add('cursor');

let errorsQtd = 0;

document.addEventListener('keydown', ({ key }) => {
    if (key === currentChar.innerText) {
        currentChar.classList.remove('cursor');
        console.log(key);
        currentChar.classList.add('correct');
        currentChar = character[++cursorIndex];
        currentChar.classList.add('cursor');
    }
    // if (key !== currentChar.innerText) {
    //     currentChar.classList.remove('cursor');
    //     currentChar.classList.add('wrong');
    //     errorsQtd += 1;
    // }
});
