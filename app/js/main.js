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
        dots: false,
    });
    // Появление меню
    $('.header__btn').on('click', function () {
        $('.menu').toggleClass('menu--active');
    });
    // Исчезновение меню при клике на него
    $('.menu__list-link').on('click', function () {
        $('.menu').removeClass('menu--active');
        $('.header__btn').toggleClass('is-active')
    });
})
/* eslint-enable */
