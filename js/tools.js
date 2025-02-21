$(document).ready(function() {

    $('.landdishwasher-reviews').each(function() {
        var curSlider = $(this);
        var curCount = curSlider.find('.swiper-slide').length;
        for (var i = 0; i < curCount; i++) {
            curSlider.find('.landdishwasher-review-pagination').append('<div class="landdishwasher-review-pagination-bullet"></div>');
        }
        $('.landdishwasher-review-pagination-bullet').eq(0).addClass('active');
        var startIndex = curCount - 1;
        curSlider.find('.swiper-wrapper').append(curSlider.find('.swiper-wrapper').html());
        var swiper = new Swiper(curSlider.find('.swiper')[0], {
            loop: true,
            slidesPerView: 3,
            initialSlide: startIndex,
            navigation: {
                nextEl: curSlider.find('.swiper-button-next')[0],
                prevEl: curSlider.find('.swiper-button-prev')[0],
            },
            on: {
                slideChangeTransitionStart: function(swiper) {
                    var curIndex = 0;
                    if (swiper.realIndex == 4 || swiper.realIndex == 9) {
                        curIndex = 0;
                    }
                    if (swiper.realIndex == 5 || swiper.realIndex == 0) {
                        curIndex = 1;
                    }
                    if (swiper.realIndex == 6 || swiper.realIndex == 1) {
                        curIndex = 2;
                    }
                    if (swiper.realIndex == 7 || swiper.realIndex == 2) {
                        curIndex = 3;
                    }
                    if (swiper.realIndex == 8 || swiper.realIndex == 3) {
                        curIndex = 4;
                    }
                    $('.landdishwasher-review-pagination-bullet.active').removeClass('active');
                    $('.landdishwasher-review-pagination-bullet').eq(curIndex).addClass('active');
                }
            }
        });
    });

    $('.landdishwasher-catalogue').each(function() {
        var curSlider = $(this);
        var swiper = new Swiper(curSlider.find('.swiper')[0], {
            loop: true,
            slidesPerView: 1,
            navigation: {
                nextEl: curSlider.find('.swiper-button-next')[0],
                prevEl: curSlider.find('.swiper-button-prev')[0],
            },
            pagination: {
                el: curSlider.find('.swiper-pagination')[0],
                dynamicBullets: true,
                clickable: true
            },
            breakpoints: {
                1168: {
                    slidesPerView: 3
                }
            },
        });
    });

});

var landdishwasherProgramsSwiper = null;

$(window).on('load resize', function() {

    $('.landdishwasher-programs').each(function() {
        var curSlider = $(this);
        if (curSlider.find('.swiper').hasClass('swiper-initialized')) {
            landdishwasherProgramsSwiper.destroy();
        }
        if ($(window).width() < 1168) {
            landdishwasherProgramsSwiper = new Swiper(curSlider.find('.swiper')[0], {
                slidesPerView: 1,
                pagination: {
                    el: curSlider.find('.swiper-pagination')[0],
                    clickable: true
                }
            });
        }
    });

});