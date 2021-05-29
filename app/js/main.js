$(function(){

    $('.carousel__inner').slick({
        speed: 1200,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/icons/carousel/sl-left.png"></img></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/icons/carousel/sl-right.png"></img></button>',
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

// $(document).ready(function(){
//     $(".job__button").click(function(){
//         $("#hidden").slideToggle("slow");
//         return false;
//     });
// });

$('[data-modal=history]').on('click', function() {
        $('.overlay, #history').fadeIn();

    });
    
    // закрываем по крестику
    $('.modal__close').on('click', function () {
        $('.overlay, #history').fadeOut('slow');
    });

	// Клик по фону, но не по окну (Закрытие)
	$('.overlay').on('click', function(e) {
		if ($(e.target).closest('.modal').length == 0) {
			$(this).fadeOut();					
		}
	});	

    // $('.job__button').click(function(){
    //     $(".job__inner-hidden").fadeIn(100);
    // });  

$('.job__button').click(function(){
         $(".job__inner-hidden").css({"display":"flex",
                                    "flex-wrap":"wrap",
                                    "justify-content": "space-between",
                                    })
     });

