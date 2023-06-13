$(document).ready(function () {
    $('.slick').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        swipe: false,
        pauseOnFocus: false,
    });

    // Evita que la reproduccion se pare al hacer clic
    slick.on('beforeChange', function(event, slick, currentSlide, nextSlide) {
        slick.slickPlay();
    });
});