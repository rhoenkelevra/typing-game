// get the element to insert text
const typingDiv = document.querySelector('#typing');
let text, characters;

fetch('./text.json')
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        text = data.python;
        // to make sure that the game don't start before the data is loaded
        startGame();
    });

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
};

// Fisher-Yates shuffle method
Array.prototype.shuffle = function () {
    var i = this.length;
    if (i == 0) return this;
    while (--i) {
        var j = Math.floor(Math.random() * (i + 1));
        var a = this[i];
        var b = this[j];
        this[i] = b;
        this[j] = a;
    }
    return this;
};
