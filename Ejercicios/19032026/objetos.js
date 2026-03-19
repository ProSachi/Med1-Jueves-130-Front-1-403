const usuario = {
    nombre: 'Carlos Rodriguez',
    edad: 32,
    esEstudiante: false,
    cursos: ['HTML', 'CSS', 'JavaScript'],
    direccion: {
        calle: 'Av. Siempre Viva',
        numero: 123
    },
    saludar: function () {
        console.log('¡Hola mundo!');
    }
};

/* console.log(usuario.direccion.calle);
console.log(usuario["nombre"]);
usuario.saludar() */
/* usuario.nombre = "Maria" */

/* let propiedad= prompt("De que propiedad requiere información")
console.log(usuario["propiedad"]); */

/* usuario["nombre"] = "Maria"
console.log(usuario["nombre"]);
usuario.mes = "Abril" */

/* const { nombre, edad, cursos } = usuario;

const {nombre:NombreCompleto} = usuario;

console.log(NombreCompleto);

const { direccion, mes = "Abril"} = usuario; */


/* const misCalificaciones = [10, 9, 8, 7];

const[,, pepe, pepa] = misCalificaciones

console.log(pepe);
console.log(pepa); */


console.log("Calificaciones");
const misCalificaciones = [10, 9, 8, 7]
console.log(misCalificaciones);
const otra = [...misCalificaciones]
console.log("otra");
console.log(otra);
console.log("Se agregan nuevo elementos en calificaciones 3,5,8,10");
misCalificaciones.push(3,5,8,10)
console.log("otra");
console.log(otra);

console.log("Calificaciones");
console.log(misCalificaciones);



