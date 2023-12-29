import { inputChangeBackground } from "../scripts/mudarBackground.js";
import { mudarBotaoChangeBackground } from '../scripts/mudarBackground.js';
import { abrirFecharMenu } from '../scripts/fecharEAbrirMenu.js';
import { animationQuandoEstavisivel } from '../scripts/animarElementosObservaveis.js';

const tituloRedes = document.querySelector('.container-redes h2');

inputChangeBackground.addEventListener('change', mudarBotaoChangeBackground);

abrirFecharMenu();

animationQuandoEstavisivel(tituloRedes, 'animationPularTexto');
