const LabelChangeBackground = document.querySelector('.container-changebackground label');
export const inputChangeBackground = document.getElementById('changebackground');
const body = document.body;

function mudarBackground (tema) {
    if (tema == 'theme dark') {
        body.classList.add('bodyAlternative');   
    }else {
        body.classList.remove('bodyAlternative');
    }
}

export function mudarBotaoChangeBackground () {
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