$('.js-button-burger').on('click', function () {
  $('.main-menu').toggleClass('_is-show');
  if ($(window).width() <= 767) {
    $('.js-top-line').toggleClass('_is-show-menu');
  }
});

function navToAnchor() {
  $('.js-nav-to-anchor').each(function() {
    $(this).find('a').on('click', function (e) {
      e.preventDefault();
      var anchor = $(this);
      $('.main-menu').removeClass('_is-show');
      $('.js-top-line').removeClass('_is-show-menu');
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 1000);
      return false;
    });
  });
}

navToAnchor();

