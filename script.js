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

//selector temas y que guarde el tema seleccionado
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#themeSelector #theme').addEventListener('change', function() {
      var theme = this.value;
      document.querySelector('main').className = theme;
      localStorage.setItem('themeMain', theme);
    });

    const savedThemeMain = localStorage.getItem('themeMain');
    if (savedThemeMain) {
        document.querySelector('main').className = savedThemeMain;
        document.querySelector('#themeSelector #theme').value = savedThemeMain;
    }
});

//selector temas botones y que guarde el tema seleccionado
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#themeSelector #theme').addEventListener('change', function() {
      var theme = this.value;
      document.querySelector('body').className = theme;
      localStorage.setItem('themeBody', theme);
    });

    const savedThemeBody = localStorage.getItem('themeBody');
    if (savedThemeBody) {
        document.querySelector('body').className = savedThemeBody;
        document.querySelector('#themeSelector #theme').value = savedThemeBody;
    }
});