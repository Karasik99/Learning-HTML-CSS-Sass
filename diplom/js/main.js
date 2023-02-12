$(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true ,
        dots: false,
        // autoplay : true,
        autoplaySpeed: 2000,
    });
});

$(function(){
    $('.slider-2').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true ,
        dots: false,
        // autoplay : true,
        autoplaySpeed: 2000,
    });
});

document.querySelectorAll('a[href^="#servises"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
