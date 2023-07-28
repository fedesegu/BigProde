
let form = document.querySelector('form');

// let submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe
  
let localPartido1 = form.querySelector('#uno').value;
let visitantePartido1 = form.querySelector('#dos').value;
let localPartido2 = form.querySelector('#tres').value;
let visitantePartido2 = form.querySelector('#cuatro').value;
let localPartido3 = form.querySelector('#cinco').value;
let visitantePartido3 = form.querySelector('#seis').value;
let localPartido4 = form.querySelector('#siete').value;
let visitantePartido4 = form.querySelector('#ocho').value;
let localPartido5 = form.querySelector('#nueve').value;
let visitantePartido5 = form.querySelector('#diez').value;
let localPartido6 = form.querySelector('#once').value;
let visitantePartido6 = form.querySelector('#doce').value;
let localPartido7 = form.querySelector('#trece').value;
let visitantePartido7 = form.querySelector('#catorce').value;
let localPartido8 = form.querySelector('#quince').value;
let visitantePartido8 = form.querySelector('#dieciseis').value;
let localPartido9 = form.querySelector('#diecisiete').value;
let visitantePartido9 = form.querySelector('#dieciocho').value;
let localPartido10 = form.querySelector('#diecinueve').value;
let visitantePartido10 = form.querySelector('#veinte').value;
let localPartido11 = form.querySelector('#ventiuno').value;
let visitantePartido11 = form.querySelector('#ventidos').value;
let localPartido12 = form.querySelector('#ventitres').value;
let visitantePartido12 = form.querySelector('#venticuatro').value;
let localPartido13 = form.querySelector('#venticinco').value;
let visitantePartido13 = form.querySelector('#ventiseis').value;
let localPartido14 = form.querySelector('#ventisiete').value;
let visitantePartido14 = form.querySelector('#ventiocho').value;

let partido1 = {
    id: "partido1",
    local: localPartido1,
    visitante: visitantePartido1
}
let partido2 = {
    id: "partido2",
    local: localPartido2,
    visitante: visitantePartido2
}
let partido3 = {
    id: "partido3",
    local: localPartido3,
    visitante: visitantePartido3
}
console.log(partido1)
console.log(partido2)
console.log(partido3)
})
