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
        }, 1000);
    } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentWordIndex = (currentWordIndex + 1) % words.length;

        setTimeout(() => {
            type();
        }, 500);
    } else {
        setTimeout(() => {
            type();
        }, 100);
    }
}

type();
