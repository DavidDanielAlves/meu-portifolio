const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 100,

    autoplay: {
        delay: 3000,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
});
