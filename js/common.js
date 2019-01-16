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
    var twoHours = new Date().getTime() + 7200000;
    $('.countdown').countdown(twoHours, function(event) {
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

    $('.count input').on('input', function () {
        if($('#count1').is(':checked') || $('#count2').is(':checked')){
            $('.count-step-first').addClass('active');
        }
        if($('#count3').is(':checked') || $('#count4').is(':checked') || $('#count5').is(':checked') || $('#count6').is(':checked')){
            $('.count-step-second').addClass('active');
        }
    });
    $('.range-control input').each(function () {
        var countData = $(this).val();
        var countName = $(this).attr('data-id');
        $('[data-for="' + countName + '"]').text(countData);
        $(this).on('change', function () {
            var countData = $(this).val();
            var countName = $(this).attr('data-id');
            $('[data-for="' + countName + '"]').text(countData);
        });
    });

    $('.count-list-first input').on('input', function () {
        var countData = $(this).closest('.count-check-item').find('label').text();
        $('.count-data-first').text(countData);
    });

    $('.count-list-second input').on('input', function () {
        var countData = $(this).closest('.count-check-item').find('label').text();
        $('.count-data-second').text(countData);
    });

    $('.count-tumb-item input').on('input', function () {
        var countName = $(this).attr('id');
        if($(this).is(':checked')){
            $('[data-for="' + countName + '"]').removeClass('hidden');
        }else{
            $('[data-for="' + countName + '"]').addClass('hidden');
        }
    });

    $(window).on('loar resize scroll', function () {
        var wHeight = $(window).height();
        $('.anchor').each(function () {
            if ($(window).scrollTop() + (wHeight - 200) >= $(this).offset().top) {
                var id = $(this).attr('id');
                $('.menu li').removeClass('active');
                $('.menu li a[href="#' + id + '"]').parent().addClass('active');
            }else if($(this).hasClass('services') && $(window).scrollTop() + (wHeight - 200) < $(this).offset().top){
                $('.menu li').removeClass('active');
            }
        });
    });

    $('.menu a').on('click', function () {
        var aId = $(this).attr('href');
        var aTag = $(aId);
        $('html,body').animate({scrollTop: aTag.offset().top - 100},'slow');
        if ($('header').hasClass('open')){
            $('.header-toggle').removeClass('open');
            $('header').removeClass('open');
            $('.menu').slideUp('fast');
            $('.callback').slideUp('fast');
            $('.lang').slideUp('fast');
        }
        return false;
    });

});
