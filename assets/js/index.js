// aos init
AOS.init();

//slick caorousel

$(document).ready(function () {
    $(".multiple-items").slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 3000,
    });
});