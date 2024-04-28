// Cramos una constante de value inicializandola en cero.
let count = 0;
// Dos constantes para seleccionar el span con ID value y los botones.
const value = document.querySelector("#value");
const btns = document.querySelectorAll(".btn");

// Creamos un bucle ForEach para que sea por cada item o botón.
// La función recibe como parametro el botón o el item.
btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const styles = e.currentTarget.classList;
    if (styles.contains("decrease")) {
      count--;
    } else if (styles.contains("increase")) {
      count++;
    } else {
      count = 0;
    }

    // Condicionales para los estilos.

    if (count > 0) {
      value.style.color = "green";
    }
    if (count < 0) {
      value.style.color = "red";
    }
    if (count === 0) {
      value.style.color = "#222";
    }
    value.textContent = count;
  });
});
