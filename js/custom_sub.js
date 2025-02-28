$(function () {
    $('.header .mbtn').on('click', function () {
        $('.header .gnb').toggleClass('on')

    });

    $('.header .gnb>ul>li>a').on('click', function (e) {
        if ($(this).next().is('ul') && $('.header .gnb').hasClass('on')) {
            e.preventDefault();
            $('.header .gnb>ul>li ul').slideUp();
            $(this).next().stop().slideToggle();
        }

    });
})