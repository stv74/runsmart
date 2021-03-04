// Slick-slider
/* $(document).ready(function(){
    $('.carousel__inner').slick({           
      speed: 1200,  
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      dots: true,
      responsive: [
        {
          breakpoint: 992,
          settings: {           
            dots: true,
            arrows: false            
          }
        }
      ]
    });
  }); */

  $(document).ready(function(){
    // Owl-carousel
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,        
      items:1,      
      navSpeed:1200,
      dotsSpeed:1200,
      autoplay:true,
      autoplayTimeout:3000,
      autoplaySpeed:1200,
      autoplayHoverPause:true,                        
      responsive:{
        0:{
          dots:true,
          nav:false
        },
        992:{
          dots:false,
          nav:true,
          navText:[
            '<img src="icons/left.svg">', 
            '<img src="icons/right.svg">'
          ]
        }
      }
    });

    // Tab switcher
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // Card switcher
    function toggleSlide(item) {
      $(item).each(function(i) {
        $(this).on('click', function(e) {
          e.preventDefault();
          $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
          $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
        })
      });
    };

    toggleSlide('.catalog-item__link');
    toggleSlide('.catalog-item__back');
  });