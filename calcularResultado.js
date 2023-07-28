

const argentinos = 2;
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
const river = 0;
const rosarioCentral = 2;
const sanLorenzo = 0;
const sarmiento = 2;
const talleres = 0;
const tigre = 0;
const union = 2;
const velez = 2;


// for (let i = 0; i < form.elements.length; i++) {
//     form.elements[i].value = null;
//         }

function calcularPuntos(a, b, local, visitante) {
    if (local == a && visitante == b ) {
        return registroPuntos.push(9)
    } else if ( local !== a && visitante !== b && a == b) {
       return registroPuntos.push(5)
    } else if (local == a && a > b) {
       return registroPuntos.push(6) 
    } else if (visitante == b && a > b) {
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
   
   
    
    
 