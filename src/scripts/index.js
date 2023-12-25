const inputChangeBackground = document.getElementById('changebackground');
const iconLabelChangeBackground = document.querySelector('.container-changebackground label i');
const LabelChangeBackground = document.querySelector('.container-changebackground label');
const BtMenuHamburger = document.getElementById('menu-hamburger');
const btFecharMenuHamburger = document.getElementById('botao-fecha-menu');
const listaLinks = document.querySelector('.list-links');
const containerAbout = document.querySelector('.container-about');
const tituloPrincipal = document.querySelector('h1');
const containerTextoSeta = document.querySelector('.container-texto-seta')
const tituloRedes = document.querySelector('.container-redes h2');

function mudarBackground (tema) {
    if (tema == 'theme dark') {
        document.body.classList.add('bodyAlternative');   
    }else {
        document.body.classList.remove('bodyAlternative');
    }
}

function mudarBotaoChangeBackground () {
    const iconSun = '<i class="fa-solid fa-sun"></i>';
    const iconMoon = '<i class="fa-solid fa-moon"></i>';
    let tema;

    if (inputChangeBackground.checked == true) {
        LabelChangeBackground.innerHTML = iconSun;
        tema = 'theme dark';
    }else {
        LabelChangeBackground.innerHTML = iconMoon;
        tema = 'theme ligth';
    }

    mudarBackground(tema);
}

inputChangeBackground.addEventListener('change', mudarBotaoChangeBackground);

BtMenuHamburger.addEventListener('click', () => {
    listaLinks.classList.remove("hidden");
})

btFecharMenuHamburger.addEventListener('click', () => {
    listaLinks.classList.add('hidden');
})

function animationQuandoEstavisivel (elementoObservavel, classAnimation) {
    const myObserver = new IntersectionObserver((estries) => {
        if(estries[0].isIntersecting) {
            elementoObservavel.classList.add(classAnimation);
        }else {
            elementoObservavel.classList.remove(classAnimation);
        }
    })
    
    myObserver.observe(elementoObservavel);
}

animationQuandoEstavisivel(containerAbout, 'animationConteudoEntrandoNaTela');
animationQuandoEstavisivel(tituloPrincipal, 'animationPularTexto');
animationQuandoEstavisivel(containerTextoSeta, 'animationTextoEntrandoNaTela');
animationQuandoEstavisivel(tituloRedes, 'animationPularTexto');


