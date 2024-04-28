const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color") // es la clase del span, también podría ser (span).

// Creando función de añadir un evento al dar click en el botón

btn.addEventListener("click", function (){
    let hexColor = "#";
    // Se crea un bucle que recorra el arreglo seis veces.
    for (i = 0; i<6; i++){
        hexColor += hex[obtenerNumeroRandom()];
    }

    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
});


// Función para obtener el número random o aleatorio
function obtenerNumeroRandom(){
    return Math.floor(Math.random() * hex.length); 
    // Se usa math random para obtener un número random del largo de la variable colors el cuál es 4 teniendo en cuenta que es [0,1,2,3] = 4.
}
