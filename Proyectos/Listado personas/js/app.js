const personas = [
    new Personas('juan', 'perez'),
    new Personas('camilo', 'suarez'),
    new Personas("juanez", "rodriguez")
]


// Esta misma función se manda a llamar con el evento onload en la etiqueta body.
function mostrarPersonas(){
    let texto = '';
    for(let persona of personas){
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>` 
    }
    document.getElementById('personas').innerHTML = texto;
}

// Función Agregar persona.

function agregarPersona(){
    const forma = document.forms["forma"];
    // Otra forma sería = const forma = document.getElementById("forma");
    
    // Recuperando los elementos input Nombre y Apellido.
    const nombre = forma["nombre"];
    const apellido = forma["apellido"]; //Esta es otra forma de recuperar el input.
    
    if(nombre.value!="" && apellido.value!=""){
        // Creación de variable de objeto tipo persona, usa la clase para agregar una nueva persona al dar click en el butón +.
        const persona = new Personas(nombre.value, apellido.value) //Aqui tuve un error al no verificar el nombre de la clase ya que puse Persona, lo correcto era Personas.
        console.log(persona); // también puedo mandarlo a console.log.
    
        // Agregando la variable anterior al arreglo de personas en las primeras líneas.
    
        personas.push(persona);
    
        // Para que se muestre el nuevo nombre y apellido en la página tenemos que volver a llamar la función MostrarPersonas()
    
        mostrarPersonas();
    }
    else if(nombre.value == personas[nombre.value] && apellido.value == personas[apellido.value]){
    alert ("Este nombre ya existe.")
    }
    else{
        alert("No hay información")
    }

}

// Vlidación si el nombre y el apellido es igual (idea)

