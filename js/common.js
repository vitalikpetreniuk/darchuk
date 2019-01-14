$(function() {

    $('.tabs-nav button').on('click', function(){
        $(this).addClass('active').siblings().removeClass('active');
        var target = $(this).attr('data-href');
        $(target).addClass('active').siblings().removeClass('active');
    });

    $('.acc-button button').on('click', function(){
        var accItem = $(this).closest('.acc-item');
        accItem.toggleClass('active').find('.acc-cont').toggle('fast');
        accItem.siblings().removeClass('active').find('.acc-cont').slideUp('fast');
    });

    $('.slider-custom').owlCarousel({
        items: 4,
        nav: true,
        dots: false,
        loop: true,
        margin: 30,
        responsive:{
        0:{
            items:2
        },
        575:{
            items:2
        },
        991:{
            items:3
        },
        1319:{
            items:4
        }
    }
    });

    $('.slider-single').owlCarousel({
        items: 1,
        nav: true,
        dots: false,
        loop: true,
        responsive:{
            0:{
                margin: 50,
                stagePadding: 15
            },
            991:{
                margin: 120,
                stagePadding: 105
            }
        }
    });

    $('.countdown').countdown("2019/01/05", function(event) {
        var totalHours = event.offset.totalDays * 24 + event.offset.hours;
        $(this).html(event.strftime('<div><div><div>' + totalHours + '</div></div><strong>часов</strong></div>' + '<div><div><div>' + '%M' + '</div></div><strong>минут</strong></div>' + '<div><div><div>' + '%S' + '</div></div><strong>секунд</strong></div>'));
    });

    $('.range-control input').slider({
        tooltip: 'always'
    });


    $('.count-step-forward').on('click', function(){
        var stepActive = $('.count-step.active');
        stepActive.next().addClass('active');
        stepActive.removeClass('active');
        var stepCount = $('.count-progress .active');
        stepCount.next().addClass('active');
        stepCount.addClass('done').removeClass('active');
    });
    $('.count-step-back').on('click', function(){
        var stepActive = $('.count-step.active');
        stepActive.prev().addClass('active');
        stepActive.removeClass('active');
        var stepCount = $('.count-progress .active');
        stepCount.prev().addClass('active').removeClass('done');
        stepCount.removeClass('active');
    });

    $(".scroll-top").click(function() {
        $("html, body").animate({ scrollTop: 0 }, 'slow');
    });

    $('.to-prices').on('click', function(){
        $('html, body').animate({
            scrollTop: $('.prices').offset().top - 80
        }, 'slow');
    });

    $(window).on('load resize scroll', function () {
        if($(this).scrollTop() > 0){
            $('.scroll-top').removeClass('hidden');
            $('.header').addClass('fixed');
        }else{
            $('.scroll-top').addClass('hidden');
            $('.header').removeClass('fixed');
        }
    });

    $('.header-toggle').on('click', function(){
        $(this).toggleClass('open');
        $('header').toggleClass('open');
        $('.menu').toggle('fast');
        $('.callback').toggle('fast');
        $('.lang').toggle('fast');
    });

});
