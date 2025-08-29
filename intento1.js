const container = document.querySelector('.container');
const btnSignIn = document.querySelector('.btnSign-in');
const btnSignUp = document.querySelector('.btnSign-up');

// Alternar entre Sign In y Sign Up
btnSignIn.addEventListener('click', () => {
    container.classList.add('active');
});

btnSignUp.addEventListener('click', () => {
    container.classList.remove('active');
});

// Seleccionamos los formularios por orden en el HTML
const forms = document.querySelectorAll('form');

// Primer formulario = Sign In
forms[0].addEventListener('submit', function(e){
    e.preventDefault(); // Evita recargar la página
    alert("¡Bienvenido!");
    window.location.href = "pagina.html"; // Redirige a la página inicial
});

// Segundo formulario = Sign Up
forms[1].addEventListener('submit', function(e){
    e.preventDefault(); // Evita recargar la página
    alert("¡Registro exitoso!");
    window.location.href = "pagina.html"; // Redirige a la página inicial
});
