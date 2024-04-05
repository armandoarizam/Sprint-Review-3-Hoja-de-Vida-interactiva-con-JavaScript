console.log("Hoja de Vida Interactiva Cargada");

document.getElementById('addSkill').addEventListener('click', function() {
    let newSkill = prompt("Introduce una nueva habilidad:");
    if (newSkill) {
        let ul = document.getElementById('skillsList');
        let li = document.createElement('li');
        li.textContent = newSkill;
        ul.appendChild(li);
    }
});

// Mostrar mensaje de contacto al hacer clic en el botón "Contactar"
document.getElementById('btnContactar').addEventListener('click', function() {
    let correoUsuario = prompt("Introduce tu correo electrónico:");
    if (correoUsuario) {
        alert(`Gracias ${correoUsuario}, me pondré en contacto contigo pronto!`);
    }
});

// Mostrar mensaje personalizado al visitar la sección de experiencia laboral
function mostrarMensaje() {
    alert("¡Gracias por visitar mi sección de experiencia laboral!");
}

document.getElementById('experiencia').addEventListener('click', mostrarMensaje);

// Función para calificar la hoja de vida
const calificarHojaDeVida = () => {
    let calificacion = prompt("Del 1 al 10, ¿cómo calificarías mi hoja de vida?");
    alert(`¡Gracias por calificar con un ${calificacion}!`);
}

document.getElementById('calificar').addEventListener('click', calificarHojaDeVida);

// Manejar el envío del formulario de contacto
document.getElementById('formularioContacto').addEventListener('submit', function(event) {
    event.preventDefault(); // Evitar que el formulario se envíe
    
    // Obtener el correo electrónico del usuario desde el formulario
    const correoUsuario = document.getElementById('email').value;
    
    // Mostrar un mensaje de alerta con el correo ingresado
    alert(`Gracias ${correoUsuario}, me pondré en contacto contigo pronto!`);
    
    // Limpiar los campos del formulario
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
});
