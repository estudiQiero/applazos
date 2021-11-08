
// Codi App

// Variables de barra progreso
const titulo = "Préstamo para iPhone 13";
const total = 909;
let sumaMovs = 0; // Suma de todos los movimientos -> Total Puntero
let fraseCom = "";

document.getElementById("tituloPrincipal").innerHTML = titulo;
document.getElementById("prestamo").innerHTML = total;


// Captura de formulario
function obtenerDatos() {
    let numMov = document.getElementById('numMov').value;
    let montMov = document.getElementById('montMov').value;
    let fechaMov = document.getElementById('fechaMov').value;
    let plataformaMov = document.getElementById('plataformaMov').value;

    // Impedir que se siga sumando cuando se llega al 100% de la deuda. Si montMov + sumaMovs > total
    let diferencia = total - sumaMovs;
    // Si montMov es mayor que (total - sumaMovs), no modificar sumaMovs
    if (montMov == diferencia) {
        fraseCom = "¡Enhorabuena! Ya has saldado tu deuda.";
        montMov = document.getElementById('montMov').value;
        totalPuntero.innerHTML = total + "€";
        document.getElementById('puntero').style.left = "410px";
        document.getElementById('svgPuntero').style.fill = "#3cea3c";
        document.getElementById('mercurio').style.width = '105%';
        document.getElementById('mercurio').style.backgroundColor = '#3cea3c';
        
    } else if (montMov > diferencia) {
        montMov = 0;
        fraseCom = "Tu ingreso debe ser menor a " + diferencia + "€ , que es la cantidad que te queda por devolver.";
    } else {
        // Suma total del puntero
        sumaMovs = parseInt(sumaMovs) + parseInt(montMov);
        totalPuntero = document.getElementById("totalPuntero");
        // Escribe la Suma de Movs en el puntero
        montMov = document.getElementById('montMov').value;
        totalPuntero.innerHTML = sumaMovs + "€";

        movimientoPuntero();

        if (montMov == 0) {
            fraseCom = "No has añadido dinero a la cuenta, inténtalo de nuevo."
        } else if ((montMov > 0) && (montMov < 15)) {
            fraseCom = "No está mal el ingreso, algo es algo. La próxima vez intenta aportar un poco más."
        } else if ((montMov >= 15) && (montMov < 40)) {
            fraseCom = "¡Bieeen, buen aporte! Sigue así."
        } else if ((montMov >= 40) && (montMov < 90)) {
            fraseCom = "¡Muy bien! Si sigues añadiendo dinero a este ritmo, pronto habrás completado el pago."
        } else {
            fraseCom = "¡Caray, esta vez te has estirado!"
        }

    }
    // Modificación de frase
    document.getElementById('fraseCom').innerHTML = fraseCom;
}

// Movimiento del puntero
function movimientoPuntero() {
    // Movimiento del puntero. movPuntero moves #puntero
    let movPuntero = (sumaMovs * 100 / total);
    // console.log(Math.ceil(movPuntero));
    let puntero = document.querySelector('#puntero');
    let posPuntero = (movPuntero * 4.15 - 23) + 'px'
    puntero.style.left = posPuntero;
    // Movimiento mercurio. movPuntero moves #mercurio.
    let movMercurio = document.querySelector('#mercurio');
    movMercurio.style.width = movPuntero + '%';
}

