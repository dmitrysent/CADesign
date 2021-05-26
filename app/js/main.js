$(function(){

    $('.carousel__inner').slick({
        arrows: true,
        dots: false,
        slidesToShow: 1,
        responsive: [
            {
                breakpoint: 841,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 601,
                settings: {
                    slidesToShow: 1
                    }
            },
        ]
    });

});