// Se crea la constante de colores con cuatro valores diferentes para que funcione con varias formas de copiar un color.
const colors = ["green","red","rgba(133,122,200)","#f15025"];

// Se crean variables que apunten a los elementos HTML

const btn = document.getElementById("btn");
const color = document.querySelector(".color") // es la clase del span, también podría ser (span).

// Creando función de añadir un evento al dar click en el botón

btn.addEventListener("click", function (){
    // Vamos a obtener un número random entre 0-3
    const randomNumber = obtenerNumeroRandom();
    console.log(randomNumber)

    document.body.style.backgroundColor = colors[randomNumber];
    // Lo que se hace aquí es que el texto que contiene el span color se cambie por el color que se selecciona en el código anterior.
    color.textContent = colors[randomNumber];
    // la propiedad text content corresponde al texto que contiene el elemento HTML
});

// Función para obtener el número random o aleatorio
function obtenerNumeroRandom(){
    return Math.floor(Math.random() * colors.length); 
    // Se usa math random para obtener un número random del largo de la variable colors el cuál es 4 teniendo en cuenta que es [0,1,2,3] = 4.
}
// Se usa la función math.floor para redondear los números hacia el entero más cercano hacia abajo, sin esto saldrían 2.,56 o así.