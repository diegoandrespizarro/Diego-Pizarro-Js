var nroTurno = 0;
function quieroUnTurno (nroTurno){ 
    for (i=1; i<=10; i++){
        nroTurno = i; 
        let tuNombre = prompt("Ingresa tu Nombre");
        let tuEdad = prompt("Ingresa tu Edad");
        if (tuEdad >= 18) {
            alert(tuNombre + " tu turno es el: " + i);
        }
        else if(tuEdad < 18) {
            alert(tuNombre + " No tienes la edad necesaria para obtener un turno");
            break;
        } 
    }
}
quieroUnTurno (nroTurno);
