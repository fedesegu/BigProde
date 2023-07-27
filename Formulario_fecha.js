

let partido1Local = 2; //river
let partido1Visitante = 0; //racing
let partido2Local = 3; //indendiente
let partido2Visitante = 1;
let sanLorenzo = 1
let platense = 1; 


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
    let locaPartido3 = form.querySelector('#cinco').value;
    let visitantePartido3 = form.querySelector('#seis').value;
  

    function calcularPuntos(a, b) {
    if (localPartido1 == a && visitantePartido1 == b ) {
        registroPuntos.push(9)
    } else if ( localPartido1 == a && a == b) {
        registroPuntos.push(5)
    } else if (localPartido1 == a && a > b) {
        registrosPuntos.push(6)
    } else if (localPartido1 == a && a < b) {
        registrosPuntos.push(1)
    }
}
    
   
   
    
    
    
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
    let registros = [];
    registros.push(datosUsuario);
  
    // Mostrar los datos registrados en la consola (solo para verificar)
    // console.log(registros);
  
    // Puedes realizar otras acciones aquí, como enviar los datos al servidor, etc.
    alert("Has enviado los datos. Pronto te contactaremos")
    // Restablecer el formulario
  form.reset();
  });
  console.log(registros);
  