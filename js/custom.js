$(function () {
    $('.wrap').fullpage({
        anchors: ['intro', 'beauty', 'culture', 'people', 'footer'],
        // navigation: true,
        afterLoad: function (a, idx) {
            console.log(a, idx);
            $('.section').removeClass('on')
            $('.section').eq(idx - 1).addClass('on')

            $('.anchor a').removeClass('on')
            $('.anchor a').eq(idx - 1).addClass('on')

            if (idx == 4 || idx == 5 || idx == 6) {
                $('.header').addClass('on')
            } else {
                $('.header').removeClass('on')
            }
        }
    })
})

$(function () {
    $('.mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideToggle();
        }

    });

    // $(window).on('resize', function () {
    //     let w = $(window).width();

    //     if (w > 768) {
    //         $('.header .gnb').removeClass('on');
    //         $('.header .gnb>ul>li ul').removeAttr('style')
    //     }
    // })
})


$(function () {
    const MSS = new Swiper('.main_stories_slide', {
        slidesPerView: 2,
        slidesPerGroup: 2,
        spaceBetween: 20,

        navigation: {
            nextEl: '.main_stories .arrows .next',
            prevEl: '.main_stories .arrows .prev',
        },

        breakpoints: {
            541: {
                slidesPerView: 4,
                slidesPerGroup: 4,
            }
        }
    })
})
