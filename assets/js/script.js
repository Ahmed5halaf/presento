
let scroll_btn = document.querySelector('.to-top-body');

window.onscroll = function(){
  if(this.scrollY >= 400){
    scroll_btn.style.display = 'block';
  }else{
    scroll_btn.style.display = 'none'

  }
}
scroll_btn.addEventListener('click' , function(){
  window.scrollTo({
    top:0,
    behavior:"smooth"
  })
  
})

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 60,
    },
    
    
  },
});
var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 40,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    1024: {
      slidesPerView: 3,
      spaceBetween: 60,
    },
  },
});


// init Isotope
var $grid = $('.portfolio-item').isotope({
  // options
});
// filter items on button click
$('.portfolio-list').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});


AOS.init({
  offset: 300,
  duration: 1000,
  once:true
})