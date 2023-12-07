
function cambiarFondo() {
    const cuadro = document.getElementById('cuadro');
    const input = document.getElementById('imagenInput');

    // Verificar si se seleccionó un archivo
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            cuadro.style.backgroundImage = `url(${e.target.result})`;
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function cargarImagen() {
    const input = document.getElementById('imagenInput');
    const cuadro = document.getElementById('cuadro');

    // Verificar si se seleccionó un archivo
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            cuadro.style.backgroundImage = `url(${e.target.result})`;
        };

        reader.readAsDataURL(input.files[0]);
    }
}