// aos init
AOS.init();

//slick caorousel

$(document).ready(function () {

    width = $(window).width()
    if (width >= 992) {
        $(".multiple-items").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,
        });

    } else if (width <= 576) {
        $(".multiple-items").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 4,
            autoplay: true,
            autoplaySpeed: 2000,

        });
    } else if (width >= 768 || width < 576) {
        $(".multiple-items").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            autoplay: true,
            autoplaySpeed: 2000,

        });
    }

});