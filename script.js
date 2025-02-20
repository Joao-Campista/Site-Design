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



// Função para animar o texto com base na posição do scroll
function animateText() {
    const section = document.querySelector('#sobre-fd');
    const spans = document.querySelectorAll('.txt-fade span');
    const sectionTop = section.getBoundingClientRect().top; // Posição do topo da seção
    const sectionHeight = section.clientHeight; // Altura da seção
    const windowHeight = window.innerHeight; // Altura da janela
    const scrollPosition = window.scrollY; // Posição atual do scroll
    
    // Verifica o quão longe o topo da seção está da parte superior da janela
    const sectionVisibility = (scrollPosition + windowHeight - 1200 - sectionTop) / (sectionHeight + windowHeight);
    
    // O valor de sectionVisibility vai de 0 a 1 conforme o usuário rola a página
    const opacity = Math.min(Math.max(sectionVisibility, 0), 1); // Garante que a opacidade esteja entre 0 e 1
    
    // Aplica a opacidade calculada a todas as palavras
    spans.forEach((span, index) => {
      span.style.opacity = opacity; // A opacidade será ajustada com base na visibilidade da seção
    });
  }
  
  // Função para lidar com o evento de scroll
  function handleScroll() {
    animateText(); // Chama a animação de texto durante o scroll
  }
  
  // Detecta o evento de scroll
  window.addEventListener('scroll', handleScroll);
  
  // Chama a animação uma vez para inicializar
  animateText();
  

  

  
  
