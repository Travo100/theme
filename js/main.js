jQuery(function($) {
  var mousePos = { x: 0, y: 0 };
  $(window).mousemove(function(e) {
    mousePos.x = e.clientX;
    mousePos.y = e.clientY;
  });

  $('.mt-introduction').waypoint(function() {
    $(this).addClass('visible');
  }, { offset: '80%' });

  var imgX = imgY = nimgX = nimgY = 0;
  requestAnimationFrame(frame = function() {
    nimgX = -(mousePos.x / 7);
    nimgY = -(mousePos.y / 9) - (document.body.scrollTop / 3)

    if (imgX !== nimgX) {
      imgX += (nimgX - imgX) * 0.05;
    }

    if (imgY !== nimgY) {
      imgY += (nimgY - imgY) * 0.05;
    }

    $('.big-image').css({
      'background-position-x': imgX,
      'background-position-y': imgY
    });

    requestAnimationFrame(frame);
  });

/*Function for hidding the social icons on mobile*/
  $('.mobile-reveal').click(function() {
    $('.social').slideToggle(400);
  });
  
  $(window).resize(function(){
    windowSize = $(window).width();
      if (windowSize > 768) {
        $('.social').slideDown();
      } else {
        $('.social').slideUp();
      }
  });

/*Make the menu fixed on scrolling past 200px*/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('.navbar-inverse').addClass('navbar-fixed-top');
    } else {
      $('.navbar-inverse').removeClass('navbar-fixed-top');
    }

  });

});