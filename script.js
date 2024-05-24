
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
    const themeSelector = document.querySelector('#themeSelector #theme');
    themeSelector.addEventListener('change', function() {
        var theme = this.value;
        document.querySelector('main').className = theme;
        document.querySelector('body').className = theme;
        localStorage.setItem('theme', theme);
    });

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.querySelector('main').className = savedTheme;
        document.querySelector('body').className = savedTheme;
        themeSelector.value = savedTheme;
    }
});

// validaciones contact form jquery
$(document).ready(function(){
    $("#contactForm").submit(function(event){
        event.preventDefault();
        
        var nombre = $("#nombre").val().trim();
        var apellidoPaterno = $("#apellidoPaterno").val().trim();
        var celular = $("#celular").val().trim();
        var email = $("#email").val().trim();
        // expresion que encontre en google para validar email
        var emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

        if(nombre.length < 3 || nombre.length > 20 ||
            apellidoPaterno.length < 3 || apellidoPaterno.length > 20){
            alert("El Nombre y Apellido deben tener entre 3 y 20 caracteres.");
            return;
        }

        if(celular.length < 9 || celular.length > 12){
            alert("El Celular debe tener entre 9 y 12 caracteres.");
            return;
        }

        if(!emailRegex.test(email)){
            alert("El Email no es Valido.");
            return;
        }

        alert("Datos enviados correctamente!");
        location.reload();
    });
});