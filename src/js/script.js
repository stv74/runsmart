/* $(document).ready(function(){
    $('.carousel__inner').slick({           
      speed: 1200,  
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
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
    $(".owl-carousel").owlCarousel({
      loop:true,
      margin:10,        
      items:1,
      dots:false,
      nav:true,
      navText:[
        '<div class="owl-prev"><img src="icons/left.svg"></div>', 
        '<div class="owl-next"><img src="icons/right.svg"></div>'
      ],                  
      responsive:{
          0:{
              items:1
          },
          600:{
              items:3
          },
          1000:{
              items:5
          }
      }
    });
  });