$('.js-button-burger').on('click', function () {
  $('.main-menu').toggleClass('_is-show');
});

function navToAnchor() {
  $('.js-nav-to-anchor a').on('click', function (e) {
    e.preventDefault();
    var anchor = $(this);
    $('.main-menu').removeClass('_is-show');
    $('html, body').stop().animate({
      scrollTop: $(anchor.attr('href')).offset().top
    }, 1000);
    return false;
  });
}

navToAnchor();

function fixedPanel() {
  var fixedPanel = $('.fixed-panel');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 150 && fixedPanel.hasClass('fixed-panel')) {
      fixedPanel.addClass('fixed');
    } else if ($(this).scrollTop() <= 150 && fixedPanel.hasClass('fixed')) {
      fixedPanel.removeClass('fixed');
    }
  });
}

fixedPanel();