import '../../src/scripts/imagemSelecionada.js';
import { MostrarDescricaoImgSelecionada } from '../../src/scripts/imagemSelecionada.js';
import { mudarBotaoChangeBackground } from "./mudarBackground.js";
import { inputChangeBackground } from "./mudarBackground.js";
import { abrirFecharMenu } from "./fecharEAbrirMenu.js";

inputChangeBackground.addEventListener('change', mudarBotaoChangeBackground);

abrirFecharMenu();
MostrarDescricaoImgSelecionada();