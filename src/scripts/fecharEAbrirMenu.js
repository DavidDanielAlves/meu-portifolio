const BtMenuHamburger = document.getElementById('menu-hamburger');
const btFecharMenuHamburger = document.getElementById('botao-fecha-menu');
const listaLinks = document.querySelector('.list-links');
const containerMenuIcon = document.querySelector('.container-menu i');

export function abrirFecharMenu () {
    BtMenuHamburger.addEventListener('click', () => {
        listaLinks.classList.toggle("hidden");
        
        const listaLinksFechada = document.querySelector('.list-links.hidden')

        if (listaLinksFechada) {
            containerMenuIcon.classList = 'fa-solid fa-bars';
        } else {
            containerMenuIcon.classList = 'fa-solid fa-xmark';
        }
    })
}
