(function ($) {
    "use strict";

    $(window).on('load', function(){
        //===== Prealoder
        $("#preloader").delay(400).fadeOut();
    });


    $(document).ready(function () {
        //05. sticky header
        function sticky_header(){
            var wind = $(window);
            var sticky = $('header');
            wind.on('scroll', function () {
                var scroll = wind.scrollTop();
                if (scroll < 100) {
                    sticky.removeClass('sticky');
                } else {
                    sticky.addClass('sticky');
                }
            });
        }
        sticky_header();
        //===== Back to top

        // Show or hide the sticky footer button
        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 600) {
                $('.back-to-top').fadeIn(200)
            } else {
                $('.back-to-top').fadeOut(200)
            }
        });

        //Animate the scroll to yop
        $('.back-to-top').on('click', function (event) {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: 0,
            }, 900);
        });

        // Hamburger-menu
         $('.hamburger-menu').on('click', function () {
            $('.hamburger-menu .line-top, #menu').toggleClass('current');
            $('.hamburger-menu .line-center').toggleClass('current');
            $('.hamburger-menu .line-bottom').toggleClass('current');
        });

        // nice select
        $('select').niceSelect();


        var slider1 = new Swiper('.swiper-container.slider1', {
            effect: "coverflow",
            loop: true,
            grabCursor: false,
            centeredSlides: true,
            slidesPerView: 4,
            roundLengths: true,
            coverflowEffect: {
                rotate: 20,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: false,
            },
            navigation: {
                nextEl: '.slider1 .swiper-button-next',
                prevEl: '.slider1 .swiper-button-prev',
            },
            breakpoints: {
                300: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 3,
                },
                992: {
                  slidesPerView: 4,
                },
            },
        });
        var slider2 = new Swiper('.swiper-container.slider2', {
            slidesPerView: 3,
            spaceBetween: 50,
            // Navigation arrows
            navigation: {
                nextEl: '.slider2 .swiper-button-next',
                prevEl: '.slider2 .swiper-button-prev',
            },

            breakpoints: {
                300: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                576: {
                  slidesPerView: 2,
                  spaceBetween: 30,
                },
                992: {
                  slidesPerView: 3,
                  spaceBetween: 50,
                },
            },
        });

        var slider3 = new Swiper('.swiper-container.slider3', {
            effect: "coverflow",
            grabCursor: true,
            centeredSlides: true,
            slidesPerView: "auto",
            coverflowEffect: {
                rotate: 0,
                stretch: 0,
                depth: 30,
                modifier: 1.5,
                slideShadows: false
            },
            
            loop: true,
            navigation: {
                nextEl: '.slider3 .swiper-button-next',
                prevEl: '.slider3 .swiper-button-prev',
            },
            breakpoints: {
                300: {
                  spaceBetween: 30,
                },
                576: {
                  spaceBetween: 70,
                }
            },
        });
    });

})(jQuery);