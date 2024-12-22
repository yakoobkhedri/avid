// swiper
var customer = new Swiper(".customer", {
    slidesPerView: 2,
    spaceBetween: 28,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 4,
      },
      992: {
        slidesPerView: 5,
      },
      1200: {
        slidesPerView: 6,
      },
    },
  });

  var designs = new Swiper(".designs", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: true,
    breakpoints: {
      768: {
        slidesPerView: 1.9,
      },
      992: {
        slidesPerView: 2.9,
      },
      1200: {
        slidesPerView: 3.9,
      },
    },
  });
  var team = new Swiper(".team", {
    slidesPerView: 1,
    spaceBetween: 32,
    autoplay: true,
    breakpoints: {
      576: {
        slidesPerView: 2,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
new SmoothScroll('a[href*="#"]', {
    easing: 'linear',
    speed: 1000
});

new WOW().init();

$('#toggler').on('click', function () {
    var nav = $('#nav');
    var toggler = $('#toggler i');
    if (nav.css('right') === '0px') {
        nav.css('right', '-240px');
        toggler.removeClass('fa-times').addClass('fa-bars');
    } else {
        nav.css('right', '0');
        toggler.removeClass('fa-bars').addClass('fa-times');
    }
});

$(window).on('scroll load', function () {
    if ($(window).scrollTop() > 120) {
        $('#navbar').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '15px');
        $('a.link').css('color', 'white');
    } else {
        $('#navbar').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px');
        $('a.link').css('color', '#475467');
    }
    if ($(window).scrollTop() > 120) {
      $('#navbar2').css('background-color', 'rgba(20 , 40 , 60 , 0.7)').css('padding', '15px');
      $('a.link2').css('color', 'white');
  } else {
      $('#navbar2').css('background-color', 'rgba(0 , 0 , 0 , 0)').css('padding', '20px');
      $('a.link2').css('color', 'white');
  }

    if ($(window).scrollTop() > 250) {
        $('#go-to-top').css('opacity','1').css('visibility','visible');
    }else {
        $('#go-to-top').css('opacity','0').css('visibility','hidden');
    }

});

$('.counter').counterUp({
    delay: 10,
    time: 1400
});

// accordion

let accordionBtn = Array.from(document.getElementsByClassName('accordionBtn'));

accordionBtn.forEach((item)=>{
  item.addEventListener('click', function () {
    item.classList.toggle('active');
    item.nextElementSibling.classList.toggle('active');
  })
})