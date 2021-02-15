// prettier-ignore
/* eslint-disable */
$(document).ready(function () {
    $('.header__btn').click(function () {
        $(this).toggleClass('is-active')
    })
    $('.slider').slick({
        arrows: false,
        fade: true,
        autoplay: 3000,
        dots: true,
    })
})
/* eslint-enable */
