const swiper = new Swiper('.swiper-container', {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop:true,
    breakpoints: {
        // when window width is >= 320px
        1440: {
          slidesPerView: 3,
          spaceBetween: 20
        },
        // when window width is >= 480px
        1000: {
          slidesPerView: 2,
          spaceBetween: 30
        },
        200: {
            slidesPerView:1,
            spaceBetween:5
        }
    }
  });


const hamburger=document.getElementById('hamburger');
const nav_list=document.getElementById('nav-ul');
const open=document.querySelector('.nav__hamburger--open')
const close=document.querySelector('.nav__hamburger--close')

hamburger.addEventListener('click',(e)=>{
    nav_list.classList.toggle('show');
    if(nav_list.classList.contains('show')){
        open.style.display="none";
        close.style.display="block"
    }
    else{
        open.style.display="block";
        close.style.display="none"
    }
})