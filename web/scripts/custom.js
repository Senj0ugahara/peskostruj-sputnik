$(document).ready(function() {
  // Header-menu scroll
  $('a[href^="#"]').click(function() {
    const target = $(this).attr('href')
    $('html, body').animate({
      scrollTop: $(target).offset().top
    }, {
      duration: 500,
      easing: 'linear',
    });
    return false
  })

  // burger
  $('.header__burger').on('click', function() {
    $('.header__burger-line').toggleClass('header__burger-line_active');
    $('.nav').toggleClass('nav--active');
  });

  // images 
  if(window.outerWidth <= 1199) {
    $('.hero__image_mobile').append(`<img src="images/hero-img.png" alt="image">`);
  };

  // tabs on advantages
  $('.advantages__btn[filter]').click(function() {
    if ($(this).attr('val') == 'off') {
      $('.advantages__btn[filter]').attr('val', 'off').removeClass('advantages__btn_active');
      $(this).attr('val', 'on').addClass('advantages__btn_active');
      $('.advantages__item').hide(300);
      $('.advantages__item[filter=' +$(this).attr('filter') + ']').show(300);
    };
  });
});

const swiper1 = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    480: {
      slidesPerView: 1,
    },

    991: {
      slidesPerView: 3,
    },

    1650: {
      slidesPerView: 4,
    }
  },
});