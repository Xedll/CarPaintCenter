const swiper = new Swiper('.swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,

   // If we need pagination
   pagination: {
      el: '.swiper-pagination',
      clickable: true
   },

   // Navigation arrows
   navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
   },

});

document.querySelector('.header__burger').addEventListener('click', () => {
   document.querySelector('.header__menu').classList.toggle('active')
   document.querySelector('.header__burger').classList.toggle('active')
   document.querySelector('body').classList.toggle('lock')
})