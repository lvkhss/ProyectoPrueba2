//carrusel
document.addEventListener('DOMContentLoaded', function() {
    var swiper = new Swiper('.mySwiper-1', {
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });
});

//selector temas
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#themeSelector #theme').addEventListener('change', function() {
      var theme = this.value;
      document.querySelector('main').className = theme;
    });
});