// Variables de los elementos
const nombreModelo = document.querySelector("h1");
const modelos = document.querySelectorAll(".modelo");
const imgModelo = document.querySelector("img")

let carros = [
    {
        nombre : 'ferrari',
        modelo : "Ferrari - modelo 2023",
        imagen : "img-modelos/Ferrari.jpg"
    },
    {
        nombre : 'lambo',
        modelo : "lamorghini - modelo 2023",
        imagen : "img-modelos/Lambo.jpg"
    },
    {
        nombre : 'camaro',
        modelo : "camaro - modelo 2023",
        imagen : "img-modelos/camaro.jpg"
    },
    {
        nombre : 'mercedes',
        modelo : "mercedes - modelo 2023",
        imagen : "img-modelos/mercedes.jpg"
    },
    {
        nombre : 'biwis',
        modelo : "Biwis - modelo 2023",
        imagen : "img-modelos/biwis.jpg"
    },
]


// Funcionalidad

function showCar(index){
    // index se refiere a la posición del elemento en la lista de modelos.
    const item = carros[index];
    nombreModelo.textContent = item.modelo;
    imgModelo.src = item.imagen;
}

modelos.forEach((modelo, index) => {
    modelo.addEventListener("click", function () {
        showCar(index);

        // Eliminar la clase "active" de todos los elementos
        modelos.forEach((element) => {
            element.classList.remove("active");
        });

        // Agregar la clase "active" al elemento clicado
        modelo.classList.add("active");
    });
});

