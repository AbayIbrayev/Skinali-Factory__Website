$(window).load(function () {

/* --------------------------- twentytwenty plugin -------------------------- */

  $(".before-after").twentytwenty({
    before_label: 'Without Skimali',
    after_label: 'With Skimali'
  });

/* ----------------------- before after slick settings ---------------------- */

  $(".before-slider").slick({
    draggable: false,
    touchMove: false,
    swipe: false,
    dots: true,
    dotsClass: 'before-slider__dots',
    prevArrow: $('.arrow-left'),
    nextArrow: $('.arrow-right')
  });

/* ---------------------------- humburger button ---------------------------- */

  $('.menu-button').on('click', function () {
    $('.menu').toggleClass('menu_active');
  });

/* --------------------------------- custom select --------------------------------- */

  $('.select_checked').on('click', function() {
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
  $('.select__option').on('click', function() {
    var value =  $(this).attr('data-value');
    $('#select-type').val(value);
    $('.select_checked').text(value);
    $('.select__dropdown').toggleClass('select__dropdown_open');
  });
});