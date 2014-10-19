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
    $('.mt-social').slideToggle(400);
  });
  
  $(window).resize(function(){
    windowSize = $(window).width();
      if (windowSize > 768) {
        $('.mt-social').slideDown();
      } else {
        $('.mt-social').slideUp();
      }
  });

/*Make the menu fixed on scrolling past 200px*/
  $(window).scroll(function() {
    if ($(window).scrollTop() > 200) {
      $('.navbar-inverse').addClass('navbar-fixed-top');
    } else {
      $('.navbar-inverse').removeClass('navbar-fixed-top');
    }

    if ($(window).scrollTop() > 1000) {
      $('.mt-top-arrow').addClass('showMe');
    } else {
      $('.mt-top-arrow').removeClass('showMe');
    }

  });

  // sorted nav
  $('.sorted-area').isotope({
    'item-selector': '.portfolio-piece'
  });

  $('.sorted-nav a').click(function() {
    var filter = '';
    if ($(this).hasClass('active')) {
      filter = '*';
      $('.sorted-nav a, .sorted-nav li').removeClass('active');
    } else {
      $('.sorted-nav a, .sorted-nav li').removeClass('active');
      $(this).addClass('active');
      $(this).parent().addClass('active');
      filter = '[data-taxonomy="' + $(this).attr('data-sort') + '"]';
    }

    console.log(filter);

    $('.sorted-area').isotope({
      filter: filter
    });;
  });


});
  $('#search-it').click(function(){
    $('.search-spot').toggle();
  });

/*Scroll Top Button*/
$('.mt-top-arrow').click(function(){
  $('body, html').animate({scrollTop:0}, 600);
  return false;
});
  

});
