// La idea es que sea el comienzo de un Campus Virtual, donde los profesores puedan cargar notas y los alumnos puedan consultarlas

var notas = []
function cargar_notas(){
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    materia = document.getElementById("materia").value
    nota = document.getElementById("nota").value

    notas.push(new alumno(nombre, apellido, materia, nota))
    swal({
        title: "Se ha subido correctamente la nota a " + nombre + " " + apellido
    })
}

function alumno(nombre, apellido, materia, nota){
    this.nombre = document.getElementById("nombre").value
    this.apellido = document.getElementById("apellido").value
    this.materia = document.getElementById("materia").value
    this.nota = document.getElementById("nota").value
}

function nota_mayor(){
   let max = 0

    for ( let nota of notas ) {
        if (max < nota.nota)
            max = nota.nota;
    }
    swal({
        title: "La nota mas alta es un " + max
    })
}

function calc_prom_grl(){
    let prom = 0
    let cont = 0
    notas.forEach(element => {prom  = parseInt(prom) + parseInt(element.nota); cont++})
    prom = prom/cont

    if (prom != 0){
        swal({
            title: "El promedio general de las notas de los alumnos es: " + prom
        })
    } else{
        swal({
            title: "No hay notas cargadas"
        })
    }
}
