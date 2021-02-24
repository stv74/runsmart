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
      responsive:{
        0:{
          dots:true,
          nav:false
        },
        992:{
          dots:true,
          nav:true,
          navText:[
            '<img src="icons/left.svg">', 
            '<img src="icons/right.svg">'
          ]
        }
      }
    });
  });