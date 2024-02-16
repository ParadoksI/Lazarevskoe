$(document).ready(function () {
    $('.choice__list').slick({

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 1199,
                settings : {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 9999,
                settings : { 
                    slidesToShow: 4,
                    dots: false,
                    arrows: true,
                }
            }

        ]
    });

    $('.eat__list').slick({

        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,

        responsive: [
            {
                breakpoint: 699,
                settings: {
                    slidesToShow: 2,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 1199,
                settings : {
                    slidesToShow: 3,
                    dots: true,
                    arrows: false,
                }
            },
            {
                breakpoint : 9999,
                settings : { 
                    slidesToShow: 4,
                    dots: false,
                    arrows: true,
                }
            }

        ]
    });

    $('.feedback__slider').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        // autoplay: true,
        autoplaySpeed: 5000,
        centerMode : true,
        
        responsive : [
            { 
                breakpoint : 1199,
                settings : { 
                    arrows : false ,
                    dots : true,
                    slidesToShow: 1,
                    centerPadding : "50px 30px 0px ",
                }
            },
            { 
                breakpoint : 9999,
                settings : {
                    arrows : true,
                    dots: false,
                    slidesToShow: 3,
                    centerPadding : "0px",
                }
            }
        ]
    });
});