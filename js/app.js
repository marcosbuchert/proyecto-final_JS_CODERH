function Alumno(nombre, apellido, materia, nota){
    this.nombre = document.getElementById("nombre").value
    this.apellido = document.getElementById("apellido").value
    this.materia = document.getElementById("materia").value
    this.nota = document.getElementById("nota").value
}

function cargar_notas(){
    nombre = document.getElementById("nombre").value
    apellido = document.getElementById("apellido").value
    materia = document.getElementById("materia").value
    nota = document.getElementById("nota").value

    let alumno = new Alumno(nombre, apellido, materia, nota)
    let alumnos = JSON.parse(localStorage.getItem('Alumnos'))

    if (alumnos == null){
        localStorage.setItem('Alumnos', JSON.stringify(alumno))
    } else {
        alumnos.push(alumno)
        localStorage.setItem('Alumnos', JSON.stringify(alumnos))
    }
    swal({ title: "Se ha subido correctamente la nota a " + nombre + " " + apellido})

    mejor_promedio()
}

function mejor_promedio(){
    let alumnos = JSON.parse(localStorage.getItem('Alumnos'))
    let promedio = 0
    alumnos.forEach(alumno => {
        let persona = alumno.nombre + alumno.apellido
        let prom = 0
        let cont = 0
        let mejor = ""
        alumnos.forEach(_alumno => {
            if (_alumno.nombre + _alumno.apellido == persona){
                prom += parseInt(_alumno.nota)
                cont++
                mejor = _alumno.nombre + " " + _alumno.apellido
            }
        })
        if (promedio < prom/cont){
            mejor_alumno = mejor
            promedio = prom/cont
        }
    })
    document.getElementById("mejorPromedio").innerHTML = mejor_alumno + " es el/la mejor promedio, con una nota de " + promedio;
}

function nota_mayor(){
   let max = 0
   let alumnos = JSON.parse(localStorage.getItem('Alumnos'))

    for (let alumno of alumnos) {
        if (max < alumno.nota)
            max = alumno.nota;
    }
    swal({
        title: "La nota mas alta es un " + max
    })
}

function calc_prom_grl(){
    let prom = 0
    let cont = 0
    let alumnos = JSON.parse(localStorage.getItem('Alumnos'))
    alumnos.forEach(alumno => {prom  = parseInt(prom) + parseInt(alumno.nota); cont++})
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
