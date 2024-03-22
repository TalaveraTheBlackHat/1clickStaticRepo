/*$(document).ready(function(){
  for(let i=0; i<10; i++){

    $(document).on('click','#img-'+i+'', function(){
      var idSlide = $(this).attr('id');
      console.log(idSlide);
      swiper();
      var swiper = new Swiper('#img-'+i+'', {
        
      });
    });
  }
  }); */

var swiper = new Swiper(".swiper", {
  effect: "coverflow",
  navigation: {
    nextEl: '.swiper-boton-siguiente',
    prevEl: '.swiper-boton-anterior',
  },
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 3.5,
    slideShadows: true
  },
  spaceBetween: 60,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  
});