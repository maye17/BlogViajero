


// Declatando Elementos
const btnArgentina = document.getElementById('btnArgentina')
const btnPeru = document.getElementById('btnPeru');

//Llamando al botón
btnPeru.addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "http://127.0.0.1:5501/fdsw-github/pages/Peru.html#";
});

btnArgentina.addEventListener('click',function(e) {
    e.preventDefault();
    window.location.href='http://127.0.0.1:5501/fdsw-github/pages/Argentina.html#'
});