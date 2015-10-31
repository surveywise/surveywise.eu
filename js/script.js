'use strict';

(function($) {
  $(function() {
  
    // Scroll
    var $root = $('html, body');
    $('.nav a').click(function() {
      $('.navbar.nav-visible .btn-navbar').trigger('click');
      $root.animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top
      }, 800);
      return false;
    });

    // Sections height
    $(window).resize(function() {
      var sH = $(window).height();
      $('.header-9-sub').css('min-height', sH + 'px');
    });
    
    // Scroll btn
    $('.header-9-sub .control-btn').on('click', function() {
      $.scrollTo($(this).closest('section').next(), {
        axis : 'y',
        duration : 800
      });
      return false;
    });

    $(window).resize().scroll();
    
  });
})(jQuery);