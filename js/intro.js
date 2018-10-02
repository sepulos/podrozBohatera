(function () {
    var init = function () {
        (setTimeout(function () {
            $('.video-background').fadeOut(1000);
            $('.header').addClass('header--mainBackground');
            $('.header')[0].style.zIndex = '10';
            $('.main__logo')[0].style.width = '45%';
            $('.main__logo')[0].style.position = 'relative';
            $('.text-box')[0].style.marginTop = '-60px';
            $('html')[0].style.overflow = 'auto';
            $('.text-box')[0].style.position = 'absolute';
            $('#intro').hide();
        }, 4000))
    };

    $(document).ready(function () {
        init();
    });


})();