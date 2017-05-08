$(document).ready(function(){
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

  var previouScrollTop = 0;
  $(window).scroll(function(){
    var scroll = $(this).scrollTop();
    if (scroll - previouScrollTop > 50){
      var navHeight = $('.navbar').css('height');
      $('.navbar').animate({top: '-' + navHeight}, 150);
      previouScrollTop = scroll;
    }

    else if (previouScrollTop - scroll > 50) {
      $('.navbar').animate({top: '0px'}, 150);
      previouScrollTop = scroll;
    }
  });
});
