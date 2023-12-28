import { inputChangeBackground } from "../scripts/mudarBackground.js";
import { mudarBotaoChangeBackground } from '../scripts/mudarBackground.js';
import { abrirFecharMenu } from '../scripts/fecharEAbrirMenu.js';
import { animationQuandoEstavisivel } from '../scripts/animarElementosObservaveis.js';

const containerAbout = document.querySelector('.container-about');
const tituloPrincipal = document.querySelector('h1');
const tituloRedes = document.querySelector('.container-redes h2');
const containerConteudo = document.querySelector('.container-texto-seta');

inputChangeBackground.addEventListener('change', mudarBotaoChangeBackground);

abrirFecharMenu();

animationQuandoEstavisivel(containerAbout, 'animationConteudoEntrandoNaTela');
animationQuandoEstavisivel(tituloPrincipal, 'animationPularTexto');
animationQuandoEstavisivel(tituloRedes, 'animationPularTexto');
animationQuandoEstavisivel(containerConteudo, 'animationConteudoEntrandoNaTela')
