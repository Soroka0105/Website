
    const swiper = new Swiper(".swiper-wrapper-gallery", {
      direction: 'horizontal',
      loop: true,
      spaceBetween: 20,
      autoplay: {
        delay: 800,
      },
      navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
      },
      pagination: {
          el: ".swiper-pagination",
          clickable: true,
          slidesPerView: 3,
          renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet"></span>`;
          },
        },
        breakpoints: {
            480: {
                slidesPerView: 1,

            },
            576: {
                slidesPerView: 2,

            },
            1330: {
                slidesPerView: 3,


            },
         },

    });


/*      jQuery(document).ready(function($){
        $(window).on("load", function () {
            $(".scrolls-main").mCustomScrollbar();
            return false;
        });
    });
 */












jQuery( document ).ready(function($) {

    $('.btn1').click(function(){
        $('html,body').animate({scrollTop:$('.section-two').offset().top}, 800);
    });
    $('.btn2').click(function(){
        $('html,body').animate({scrollTop:$('.section-three').offset().top}, 800);
    });
     $('.btn3').click(function(){
        $('html,body').animate({scrollTop:$('.section-four').offset().top}, 800);
    });
    $('.btn4').click(function(){
        $('html,body').animate({scrollTop:$('.section-five').offset().top}, 800);
    });
    $('.scroll-down').click(function(){
        $('html,body').animate({scrollTop:$('.section-two').offset().top}, 800);
    });
});



(function(){
    const burger = document?.querySelector('[data-burger]');
    const menu = document?.querySelector('[data-menu]');
    const body = document.body;

    burger?.addEventListener('click', (e) => {
      burger?.classList.toggle('burger--active');
      menu?.classList.toggle('header__nav--active');
      body?.classList.toggle('nav-active')
    });
  })();


  $('.btn-cl ').click(function (e) {
	e.preventDefault();

	$('.header__nav').toggleClass('header__nav--active');
    $('.page__body').toggleClass('nav-active');
    $('.burger').toggleClass('burger--active');

});
