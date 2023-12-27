const BtMenuHamburger = document.getElementById('menu-hamburger');
const btFecharMenuHamburger = document.getElementById('botao-fecha-menu');
const listaLinks = document.querySelector('.list-links');

export function abrirFecharMenu () {
    BtMenuHamburger.addEventListener('click', () => {
        listaLinks.classList.remove("hidden");
    })
    
    btFecharMenuHamburger.addEventListener('click', () => {
        listaLinks.classList.add('hidden');
    })
}
