let swiper1 = new Swiper(".slider", {
    loop: true,
    autoplay: {
        delay: 2500,
    },

});


let swiper2 = new Swiper(".video-slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: false,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});



const backToTop = document.getElementById('back-top');

document.body.onscroll = () => {
    let top = document.documentElement.scrollTop;
    if (top > 700) {
        backToTop.style.opacity = 1;
    } else {
        backToTop.style.opacity = 0;
    }
}

backToTop.onclick = () => {
    let current = document.documentElement.scrollTop;
    let scroll = setInterval(() => {
        window.scrollTo(0, current -= 30)
        if (current < 1) {
            clearInterval(scroll);
        }
    }, 5)
}
