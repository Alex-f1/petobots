$('.collection-block__categor-list').each(function(){
  var parent = $(this),
      liActive = parent.find('li.active').clone().addClass('clone');

  liActive.prependTo(parent);
});

$(document).on('click', '.collection-block__categor-list li a', function(e){
  e.preventDefault();
  var $this = $(this),
      scrollTop = $(document).scrollTop();

  if ($this.closest('li').hasClass('active')) {
    $this.closest('ul').toggleClass('opened');
    return;
  } else {
    var index = $this.closest('li').index();

    $this.closest('ul').removeClass('opened');
    $this.closest('ul').find('.clone').remove();
    $('.collection-block__body, .collection-block__filter-list').removeClass('active');
    $this.closest('ul').find('li').removeClass('active');
    $this.closest('li').addClass('active');
    $('.collection-block__body:eq('+ index +')').addClass('active');
    $('.collection-block__filter-list:eq('+ index +')').addClass('active');

    var liActive = $this.closest('ul').find('li.active').clone().addClass('clone');

    liActive.prependTo($this.closest('ul'));
  }
  $(document).scrollTop(scrollTop)
});

$('.collection-block__filter-list').each(function(){
  var parent = $(this),
      liActive = parent.find('li.active').clone().addClass('clone');

  liActive.prependTo(parent);
});

$(document).on('click', '.collection-block__filter-list li a', function(e){
  e.preventDefault();
  var $this = $(this);

  if ($this.closest('li').hasClass('active')) {
    $this.closest('ul').toggleClass('opened');
    return;
  } else {
    var $this = $(this),
      name = $this.data('name'),
      parent = $('.collection-block__body:eq('+ $this.closest('.collection-block__filter-list').index() +')');

      parent.find('.collection-block__item').addClass('hide');
      parent.find('[data-filter="'+ name +'"]').closest('.collection-block__item').removeClass('hide');

      $this.closest('.collection-block__filter-list').find('li').removeClass('active');
      $this.closest('li').addClass('active');
      $('.collection-block__filter-list').removeClass('opened');
      $this.closest('ul').find('.clone').remove();

      var liActive = $this.closest('ul').find('li.active').clone().addClass('clone');

      liActive.prependTo($this.closest('ul'));
  }
});


$('.product-thumbs__description').on('click', function(e){
  e.preventDefault();

  $(this).closest('.product-thumbs').toggleClass('flip');
});

$('.product-thumbs').on('mouseleave', function(e){
  $(this).removeClass('flip');
})

$(document).on('click', function(e){
    if ($(e.target).closest('.collection-block__categor-inner').length) {
      return;
    }
    $('.collection-block__categor-list, .collection-block__filter-list').removeClass('opened');
});
