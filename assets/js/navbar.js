$(function() {
  $(window).scroll(function() {
    if($(window).scrollTop() >= 200) {

      $('header').addClass('scrolled');
      console.log('Scroll Down');

    } else {

      $('header').removeClass('scrolled');
      console.log('Scroll Up');

    }
  });
});
