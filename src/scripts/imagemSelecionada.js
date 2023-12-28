const imgs = document.querySelectorAll('.swiper-slide img');
const tituloDescricaoDoProjeto = document.getElementById('nome-projeto');
const tituloDoProjeto = document.getElementById('titulo-projeto');
const campoDeImagem = document.querySelector('.container-projeto img');
const campoDescricaoDoProjeto = document.getElementById('descricao-projeto');
const slides = document.querySelectorAll('.swiper-slide');

export function MostrarDescricaoImgSelecionada () {
    imgs.forEach(img => {
        img.addEventListener('click', () => {
            const url = img.src;
            const titulo = img.name;
            const descricao = img.getAttribute('descricao')
    
            tituloDescricaoDoProjeto.textContent = 'Descrição do Projeto';
            tituloDoProjeto.textContent = titulo;
            campoDeImagem.setAttribute('src', url);
            campoDescricaoDoProjeto.textContent = descricao;
        })
    });
}
