function cambiarEstado(elemento) {
    elemento.classList.toggle("cursada");
    if (elemento.classList.contains("cursada")) {
        elemento.classList.remove("pendiente", "cursando");
        elemento.onclick = null;
        parpadearSecciones();
        const habilita = elemento.getAttribute("data-habilita");
        const asignaturasHabilita = document.querySelectorAll(`.clase.pendiente[data-habilita="${habilita}"]`);
        asignaturasHabilita.forEach(asignatura => {
            asignatura.classList.remove("pendiente");
            asignatura.classList.add("cursando");
        });
    } else {
        elemento.classList.remove("cursando");
        elemento.classList.add("pendiente");
    }
}


function parpadearSecciones() {
    const secciones = document.querySelectorAll('.seccion.habilitada');
    secciones.forEach(seccion => {
        seccion.classList.add('parpadear');
        setTimeout(() => {
            seccion.classList.remove('parpadear');
        }, 1000);
    });
}