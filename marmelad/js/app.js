'use strict';

/* ^^^
 * Viewport Height Correction
 *
 * @link https://www.npmjs.com/package/postcss-viewport-height-correction
 * ========================================================================== */
function setViewportProperty() {
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
}
window.addEventListener('resize', setViewportProperty);
setViewportProperty(); // Call the fuction for initialisation

/* ^^^
 * Полифил для NodeList.forEach(), на случай если забыл про IE 11
 *
 * @link https://developer.mozilla.org/en-US/docs/Web/API/NodeList/forEach
 * ========================================================================== */
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}

/* ^^^
 * JQUERY Actions
 * ========================================================================== */
$(function () {
  //=require ../_blocks/**/*.js

  function fixedPanel() {
    const getPositionTopLine = $('.js-top-line').offset().top;

    $(window).scroll(function () {
      let oldScroll = this.oldScroll || 0;
      let newScroll = this.scrollY;

      if (newScroll < oldScroll) {
        $('.js-top-line').addClass('_is-fixed');
        $('.collection-block__categor').addClass('_is-fixed-top-line');
      } else {
        $('.js-top-line');
      }

      this.oldScroll = newScroll;

      if (newScroll >= oldScroll) {
        $('.js-top-line').removeClass('_is-fixed');
        $('.collection-block__categor').removeClass('_is-fixed-top-line');
      }

      if (newScroll <= getPositionTopLine) {
        $('.js-top-line').removeClass('_is-fixed');
        $('.collection-block__categor').removeClass('_is-fixed-top-line');
      }
    });

    $('.logo__link').on('click', function () {
      $('html, body').stop().animate({
        scrollTop: 0
      }, 1000);
    })
  }

  fixedPanel();

  setTimeout(function () {
    $('body').addClass('_is-loaded');
    $('#preloader').addClass('hidden');
  }, 1500); //preloader

});
