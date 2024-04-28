const contraseña = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,"A","B","C","D","E","F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color") // es la clase del span, también podría ser (span).

// Creando función de añadir un evento al dar click en el botón

btn.addEventListener("click", function (){
    // Se crea un bucle que recorra el arreglo seis veces.
    let digitos = "";
    for (i = 0; i<6; i++){
        digitos += contraseña[obtenerNumeroRandom()];
    }
    
    color.textContent = digitos.toLowerCase();
});

// Función para obtener el número random o aleatorio
function obtenerNumeroRandom(){
    return Math.floor(Math.random() * contraseña.length); 
    // Se usa math random para obtener un número random del largo de la variable colors el cuál es 4 teniendo en cuenta que es [0,1,2,3] = 4.
}