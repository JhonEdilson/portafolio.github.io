const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
const numerosRandom = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function () {
    const numeroDeVeces = Math.floor(Math.random() * numerosRandom.length);;

    // if (isNaN(numeroDeVeces) || numeroDeVeces <= 0) {
    //     alert("Por favor, ingrese un número válido mayor que cero.");
    //     return;
    // }

    // Iniciar el cambio de color después de un breve retraso
    setTimeout(() => cambiarColorNnumeroDeVeces(numeroDeVeces), 500);
    // Establece el tiempo que demora en inciar la función.
});

// Esta función es la que llama N veces a la función que indivudalmente cambia el color del fondo, es ente caso cambiarColor().
function cambiarColorNnumeroDeVeces(numeroDeVeces) {
    cambiarColor(numeroDeVeces);
}

function cambiarColor(numeroDeVeces) {
    if (numeroDeVeces <= 0) {
        return;
    }

    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        hexColor += hex[obtenerNumeroRandom()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;

    // Llamar recursivamente para el siguiente cambio de color después de un retraso
    setTimeout(() => cambiarColor(numeroDeVeces - 1 ), 300);
}

function obtenerNumeroRandom() {
    return Math.floor(Math.random() * hex.length);
}
