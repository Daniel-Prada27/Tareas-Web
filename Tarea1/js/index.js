const input = document.getElementById('input-usuario');
const agregarBtn = document.getElementById('boton-agregar');
const contenedor = document.getElementById('contenedor');
const borrarBtn = document.getElementById('boton-borrar');

agregarBtn.addEventListener('click', agregar);
input.addEventListener('keyup', agregarConEnter);
borrarBtn.addEventListener('click', borrar);


function agregarConEnter(key) {
    if (key.key === 'Enter') { // https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key
        agregar();
    }
}

function agregar() {

    let newEntry = document.createElement('div');
    newEntry.textContent = obtenerTexto();

    if (newEntry.textContent == null | newEntry.textContent == '') {
        return;
    }

    contenedor.appendChild(newEntry);

}

function obtenerTexto() {
    let texto = input.value.toLowerCase();
    input.value = null;
    return texto;
}

function borrar() {
    if (tieneElementos()) {
        let lastChild = contenedor.lastChild;
        contenedor.removeChild(lastChild);
    }
}

function tieneElementos() {
    return contenedor.childElementCount != 0;
}
