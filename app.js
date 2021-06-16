<<<<<<< HEAD
const textDiv = document.querySelector('#typing');

const text = {
    python: 'False await ( else , import . pass None " break except in : raise True [ class finally is return and continue for lambda try as def from nonlocal while assert del global __ not with async elif _ if or yield __init__',
=======
// get the element to insert text
const typingDiv = document.querySelector('#typing');
let text, characters;
async function getText(){
    return fetch('./text.json')
    .then(res => res.json)
    .then(data => data.python)
}

async const startGame = () => {
    const text = getText()
    text.split(' ').joint(' ')
    console.log(text)

}

const startGame = () => {
    shuffledSentence(text);
    console.log('text shuffled: ', characters);
    console.log('type of characters: ', typeof characters);

    // using ... turns the string into array so we can map it
    [...characters].map((char) => {
        const span = document.createElement('span');
        span.innerText = char;
        typingDiv.appendChild(span);
        return span;
    });

    let cursorIndex = 0;
    let cursorCharacter = characters[cursorIndex];
    console.log('cursor char: ', cursorCharacter);

    // !!! giving cursorCharacter.classList is undefined ...

    cursorCharacter.classList.add('cursor');

    document.addEventListener('keydown', ({ key }) => {
        if (key === cursorCharacter.innerText) {
            cursorCharacter.classList.remove('cursor');
            cursorCharacter.classList.add('done');
            cursorCharacter = characters[++cursorIndex];
            cursorCharacter.classList.add('cursor');
        }
    });
};

const shuffledSentence = (text) => {
    characters = text.split(' ').shuffle().join(' ');
    return characters;
>>>>>>> c6671450feb3e84d271ce6b6006681c73b887dc1
};

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
