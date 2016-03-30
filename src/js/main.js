$(document).ready(function(){
//плавный переход по внутренним ссылкам страницы
  $('.link,.head__menu').on('click','a', function (event) {
    event.preventDefault();
    var id  = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({scrollTop: top}, 1500);
  });

//выезжающий popup
  $('.head__menu a').click (function() {
    $('.popup').css('width', '50%');
  });

  $('.popup__x').click (function() {
    $('.popup').css('width', '0%');
  });

//фиксированное меню
  var $menu = $('.top__head');
  $(window).scroll(function(){
    if ( $(this).scrollTop() > 100 && $menu.hasClass('default') ){
      $menu.removeClass('default').addClass('fixed');
    } else if($(this).scrollTop() <= 100 && $menu.hasClass('fixed')) {
      $menu.removeClass('fixed').addClass('default');
    }
  });
});
