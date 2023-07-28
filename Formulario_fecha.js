
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

// if (localPartido1 || visitantePartido1 < 0) {
//     alert("por favor, ingresa un numero valido")



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
let partido4 = {
    id: "partido4",
    local: localPartido4,
    visitante: visitantePartido4
}
let partido5 = {
    id: "partido5",
    local: localPartido6,
    visitante: visitantePartido6
}
let partido6 = {
    id: "partido6",
    local: localPartido6,
    visitante: visitantePartido6
}
let partido7 = {
    id: "partido8",
    local: localPartido8,
    visitante: visitantePartido8
}
let partido9 = {
    id: "partido9",
    local: localPartido9,
    visitante: visitantePartido9
}
let partido10 = {
    id: "partido10",
    local: localPartido10,
    visitante: visitantePartido10
}
let partido11 = {
    id: "partido11",
    local: localPartido11,
    visitante: visitantePartido11
}
let partido12 = {
    id: "partido12",
    local: localPartido12,
    visitante: visitantePartido12
}
let partido13 = {
    id: "partido13",
    local: localPartido13,
    visitante: visitantePartido13
}
let partido14 = {
    id: "partido14",
    local: localPartido14,
    visitante: visitantePartido14
}

console.log(partido1)
console.log(partido2)
console.log(partido3)
console.log(partido4)
console.log(partido5)
console.log(partido6)
console.log(partido7)
console.log(partido8)
console.log(partido9)
console.log(partido10)
console.log(partido11)
console.log(partido12)
console.log(partido13)
console.log(partido14)
})
