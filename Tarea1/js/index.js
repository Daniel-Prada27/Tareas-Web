const input = document.getElementById('input-usuario');
const agregarBtn = document.getElementById('boton-agregar');
const contenedor = document.getElementById('contenedor');
const borrarBtn = document.getElementById('boton.borrar');

agregarBtn.addEventListener('click', obtenerTexto);

function obtenerTexto() {
    let texto = input.value;
    console.log(`Prueba de funcionamiento: ${texto}`);
    input.value = null;
}

