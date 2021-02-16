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
    new WOW().init();
})
/* eslint-enable */
/* gsap.to(".about__images", {duration: 0.5, x: -300}); */
/* let tl = gsap.timeline();
tl.from(".header__top", { duration: 0.7, opacity: 0 })
  .from(".header__content-title", { duration: 0.7, opacity: 0 })
  .from(".header__content-text", { duration: 0.7, opacity: 0 })
  .from(".content-link", { duration: 0.7, opacity: 0 });


gsap.from(".about__images-animate-1", { duration: 1, x: 400, opacity: 0, scale: 0.5 });
gsap.from(".about__images-animate-2", { duration: 1, x: -400, opacity: 0, scale: 0.5 });
gsap.from(".about__content-animated-1", { duration: 4, opacity: -1 });
gsap.from(".about__content-animated-2", { duration: 4, opacity: -1 }); */