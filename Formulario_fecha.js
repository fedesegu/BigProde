

// let river = 2;
// let racing = 0;
// let independiente = 3;
// let boca = 1;


const argentinos = 1;
const arsenal	= 2;
const atTucuman = 0;	
const banfield = 0;	
const barracasCentral = 0;	
const belgrano = 2;
const boca = 2; 
const centralCordoba = 0;
const colon = 0;
const defensa = 2;
const estudiantes = 0;
const godoyCruz = 0;
const gimnasia = 2;
const huracan = 2;
const independiente = 2;	
const instituto = 0;
const lanus = 2;
const newells = 2;
const platense = 0;
const racing = 0;	
const river = 1;
const rosarioCentral = 2;
const sanLorenzo = 0;
const sarmiento = 2;
const talleres = 0;
const tigre = 0;
const union = 2;
const velez = 2;


registroPuntos = []

// Obtener el formulario y el botón de enviar
let form = document.querySelector('form');

let submitButton = form.querySelector('button[type="submit"]');
//Esto buscará el evento con tag <button> que tenga el type submit

// Agregar el evento submit al formulario
form.addEventListener('submit', function(e) {
    e.preventDefault(); // Evitar que el formulario se envíe
  
    // Obtener los valores de los campos
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
  

    function calcularPuntos(a, b, local, visitante) {
    if (local == a && visitante == b ) {
        return registroPuntos.push(9)
    } else if ( local !== a && visitante !== b && a == b) {
       return registroPuntos.push(5)
    } else if (local == a && a > b) {
       return registroPuntos.push(6) 

    } else if (local !== a && visitante !== b && local > visitante && a > b) { 
        return registroPuntos.push(4)
    } else if (local !== a && visitante !== b && local < visitante && a < b) { 
        return registroPuntos.push(4)
    } else if(local == a && a <= b) {
       return registroPuntos.push(1)
    } else if (visitante == b && a <= b) {
        return registoPuntos.push(1)
    }
    
}

       calcularPuntos(velez, barracasCentral, localPartido1, visitantePartido1);
       calcularPuntos(argentinos, river, localPartido2, visitantePartido2);
       calcularPuntos(arsenal, instituto, localPartido3, visitantePartido3);
       calcularPuntos(rosarioCentral, atTucuman, localPartido4, visitantePartido4);
       calcularPuntos(huracan, banfield, localPartido5, visitantePartido5);
       calcularPuntos(gimnasia, talleres, localPartido6, visitantePartido6);
       calcularPuntos(independiente, colon, localPartido7, visitantePartido7);
       calcularPuntos(sarmiento, tigre, localPartido8, visitantePartido8);
       calcularPuntos(boca, platense, localPartido9, visitantePartido9);
       calcularPuntos(defensa, godoyCruz, localPartido10, visitantePartido10);
       calcularPuntos(newells, centralCordoba, localPartido11, visitantePartido11);
       calcularPuntos(lanus, sanLorenzo, localPartido12, visitantePartido12);
       calcularPuntos(belgrano, estudiantes, localPartido13, visitantePartido13);
       calcularPuntos(union, racing, localPartido14, visitantePartido14);
       console.log(registroPuntos); 
})
   
   
   
    
    
    
    // Crear un objeto con los valores ingresados
    // let datosUsuario = {
    //   nombreApellido: nombreApellido,
    //   telefono: telefono,
    //   email: email,
    //   direccion: direccion,
    //   consulta: consulta
    // };
  
    // Aquí puedes hacer lo que desees con el objeto datosUsuario
    // Por ejemplo, puedes almacenarlo en un array
    // let registros = [];
    // registros.push(datosUsuario);
  
    // Mostrar los datos registrados en la consola (solo para verificar)
    // console.log(registros);
  
    // Puedes realizar otras acciones aquí, como enviar los datos al servidor, etc.
    // alert("Has enviado los datos. Pronto te contactaremos")
    // Restablecer el formulario
//   form.reset();
//   });
//   console.log(registros);
  