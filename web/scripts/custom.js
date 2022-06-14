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
    $('.hero__image_mobile').append(`<img src="images/hero/hero-img.png" alt="image">`);
  };

  // hero-container remove
  if(window.outerWidth <= 1700) {
    $('.hero__container_width').removeClass('hero__container_width');
  };

  // base-information title mobile add
  if(window.outerWidth <= 1549) {
    $('.base-information__container').prepend(`<h2 class="title base-information__title_mobile">Принцип работы пескоструя &laquo;Спутник&raquo;</h2>`);
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

  // advantages open text
  $('.advantages-list__btn').on('click', function () {
    $(this).prev('.advantages-list__text').toggleClass('advantages-list__text_open');
    if ($(this).prev('.advantages-list__text').hasClass('advantages-list__text_open')) {
      $(this).text('Свернуть');
    } else {
      $(this).text('Подробнее');
    }
  });
});

$('[data-fancybox="set"]').fancybox({
  loop: true,
  arrows: false,
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

const swiper2 = new Swiper('.comparison-swiper', {
  loop: true,
  autoHeight: true,
  slidesPerView: 1,
  spaceBetween: 30,

  // Navigation arrows
  navigation: {
      nextEl: '.table-mobile-icon-next',
      prevEl: '.table-mobile-icon-prev',
  },
});