$(function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() >= 200) {
            $('.gotop').fadeIn()
        } else { $('.gotop').fadeOut() }
    })
    $('.gotop').click(function () {
        $('html,body').animate({
            scrollTop: 0
        }, 500)
    })
    $(window).on('scroll', function () {
        const mainTop = $('.h-bg').height()
        let scrollTop = $(window).scrollTop()
        if (scrollTop >= mainTop) {
            $('.cablecar-w').addClass('active')
        } else { $('.cablecar-w').removeClass('active')}
    })
})