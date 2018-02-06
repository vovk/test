$(document).ready(function(){
    var scroll_start = 0;
    var startchange = $('#arrow');
    var offset = startchange.offset();
    if (startchange.length){
        $(document).scroll(function() {
            scroll_start = $(this).scrollTop();
            if(scroll_start >= offset.top) {
                $('.navbar').css({
                    'background-color': '#ffffff',
                    'box-shadow': '0 0 25px 0 rgba(0, 0, 0, 0.02)',
                    'transition': 'background 0.6s'
                });
                $(this).find('.logo__image').attr('src', 'img/logo-black.png')
                $(this).find('.main-menu__link').css({'color': '#424242'});
            } else {
                $('.navbar').css({
                    'background-color': 'transparent', 'transition': 'background 0.6s'
                });
                $(this).find('.logo__image').attr('src', 'img/logo.png');
                $(this).find('.main-menu__link').css({'color': '#fff'});
            }
        });
    }

    startchange.on('click', function (e) {
        e.preventDefault();
        var elem  = $(this).find('a').attr('href'),
            top = $(elem).offset().top;
        $('body, html').animate({scrollTop: top}, 1000);
    });

    $('.subscribe').hover(function() {
        $(this).next().css({'opacity' : '1'});
    }, function() {
        $(this).next().css({'opacity' : '0'});
    });
});