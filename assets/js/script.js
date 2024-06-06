(function ($) {
    "use strict";

    /* ============================================================ */
    /* PRELOADER
    /* ============================================================ */
    $(window).on('load', function() {
        $(".preloader").fadeOut();     
    });


    var alfardanGroup   = {

        mobile_expand_menu: function(){
            //=============  Mobile Menu Integration  =============\\
            function mobile_menu(selector, actionSelector) {
                var mobile_menu = $(selector);
                mobile_menu.on("click", function() {
                    $(selector).toggleClass('shown');
                });
                
                var hamburgerbtn = $(selector);
                hamburgerbtn.on("click", function() {
                    $(actionSelector).toggleClass('shown');
                });

                $(document).on('click', function(e) {
                    var selectorType = $(actionSelector).add(mobile_menu);
                    if (selectorType.is(e.target) !== true && selectorType.has(e.target).length === 0) {
                        $(actionSelector).removeClass("shown");
                        $(selector).removeClass("shown");
                    }
                });
                // $(".menu_wrapper a").on('click', function() {
                //     $('.menu_wrapper, .menu-overlay').removeClass("sidemenu-open");
                // });
            
            };
            mobile_menu('.offcanvas__toggler, .offcanvas__close', '.offcanvas__menu');  
        },
        
        /* ============================================================ */
        /* StickyHeader
        /* ============================================================ */
        sticky_header: function() {
            var header = $("header");
            // Add a scroll event listener to the window object
            window.addEventListener('scroll', () => {
                const scrollPosition = window.scrollY;
            
                if (scrollPosition > 60) {
                    header.addClass('sticky');
                } else {
                    header.removeClass('sticky');
                }
            });
        },


        /* ============================================================ */
        /* Swiper Slider Init
        /* ============================================================ */
        swiperCarousel: function () {

            // Homepage Signup Side Slider
            let heroSlider = new Swiper('.heroSlider', {
                spaceBetween: 0,
                slidesPerView: 1,
                loop: 1,
                speed: 1000,
                autoplay: 1,
                navigation: {
                    nextEl: ".heroSlider .button-next",
                    prevEl: ".heroSlider .button-prev",
                },
            });
            
            // Homepage Signup Side Slider
            let brandsSlider = new Swiper('.brandsSlider', {
                spaceBetween: 30,
                slidesPerView: 3,
                loop: 1,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 4,
                    },
                },
            });
            // Homepage Signup Side Slider
            let bike_slider = new Swiper('.bike_slider', {
                spaceBetween: 30,
                slidesPerView: 1,
                loop: 1,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
            });
            // Homepage Signup Side Slider
            let lifeStyleSlider = new Swiper('.lifeStyleSlider', {
                spaceBetween: 30,
                slidesPerView: 1,
                loop: 1,
                speed: 1000,
                autoplay: {
                    delay: 2000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
            });
            // Homepage Signup Side Slider
            let accessoriesSlider = new Swiper('.accessoriesSlider', {
                spaceBetween: 30,
                slidesPerView: 1,
                loop: 1,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
            });
            // Homepage Signup Side Slider
            let followUs_slider = new Swiper('.followUs_slider', {
                spaceBetween: 30,
                slidesPerView: 1,
                loop: 1,
                speed: 1000,
                autoplay: {
                    delay: 3000,
                },
                breakpoints: {
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    },
                    1600: {
                        slidesPerView: 4,
                    },
                },
            });
            
        },

        /* ============================================================ */
        /* Scroll Top
        /* ============================================================ */
        scroll_to_top: function() {
            $('body').append("<a href='#' title='Scroll Top' id='scroll-top' class='topbutton btn-hide'><i class='fal fa-angle-double-up'></i></a>");
            var $scrolltop = $('#scroll-top');
            $(window).on('scroll', function () {
                if ($(this).scrollTop() > $(this).height()) {
                    $scrolltop.addClass('btn-show').removeClass('btn-hide');
                } else {
                    $scrolltop.addClass('btn-hide').removeClass('btn-show');
                }
            });
            $scrolltop.on('click', function () {
                $('html, body').animate({
                        scrollTop: 0,
                    },
                    50
                );
                return false;
            });
        },

        initialize: function() {0
			alfardanGroup.mobile_expand_menu();
			alfardanGroup.scroll_to_top();
			alfardanGroup.sticky_header();
			alfardanGroup.swiperCarousel();
		}
    };
    $(function() {
		alfardanGroup  .initialize();
	});



})(jQuery);