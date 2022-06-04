let swiper1 = new Swiper(".slider", {
    loop: true,
    autoplay: {
        delay: 2500,
    },

});


let swiper2 = new Swiper(".quote-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
