const textElement = document.getElementById('alt-text');
let currentPhraseIndex = 0;
let currentWordIndex = 0;
let currentText = "";
let isDeleting = false;

function type() {
    const words = ["Design", "Estratégia", "Branding", "Experiência"]
    const currentWord = words[currentWordIndex];

    if (isDeleting) {
        currentText = currentWord.slice(0, currentText.length - 1);
    } else {
        currentText = currentWord.slice(0, currentText.length + 1);
    }

    textElement.innerHTML = currentText + " <span class='typing'></span>";

    if (!isDeleting && currentText === currentWord) {
        setTimeout(() => {
            isDeleting = true;
            type();
        }, 3000);
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;

        setTimeout(() => {
            type();
        }, 300);
    } else {
        setTimeout(() => {
            type();
        }, 30);
    }
}

let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})


const botao = document.querySelector('.next');


function simularClique() {
    if (botao) {
        botao.click();
    } else {
    }
}


const intervalo = 10000;


setInterval(simularClique, intervalo);


type();
