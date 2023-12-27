export function animationQuandoEstavisivel (elementoObservavel, classAnimation) {
    const myObserver = new IntersectionObserver((estries) => {
        if(estries[0].isIntersecting) {
            elementoObservavel.classList.add(classAnimation);
        }else {
            elementoObservavel.classList.remove(classAnimation);
        }
    })
    
    myObserver.observe(elementoObservavel);
}