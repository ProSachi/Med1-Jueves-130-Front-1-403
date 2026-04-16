/* const usuario =
{
    id: 1,
    nombre: "Ana",
    rol: "Admin",
};

console.log(usuario.id)
console.log(usuario["id"])

function saludar({ id, nombre }) {
    console.log(`El usuario con id: ${id} y nombre ${nombre}`)
}

saludar(usuario)

const { id, nombre } = usuario

console.log(id)
console.log(nombre) */

const baseDeDatos = [
    { id: 1, titulo: "JavaScript Ninja", precio: 40, stock: true }, // 0
    { id: 2, titulo: "React Avanzado", precio: 60, stock: false }, // 1
    { id: 3, titulo: "CSS Master", precio: 30, stock: true } // 2
];

/* const librosStock = baseDeDatos.filter(disponible => disponible.stock === true);

console.log(librosStock);


const catalogoHTML = librosStock.map(({ titulo, precio }) => {
    return `<article class="card">
            <h3>${titulo}</h3>
            <p>Precio: $${precio}</p>
            <button>Comprar</button>
        </article>
        `;
}); */

/* 

const baseDeDatos = [
    { id: 1, titulo: "JavaScript Ninja", precio: 40, stock: true }, // 0
    { id: 2, titulo: "React Avanzado", precio: 60, stock: false }, // 1
    { id: 3, titulo: "CSS Master", precio: 30, stock: true } // 2
];

const librosStock = baseDeDatos
    .filter(disponible => disponible.stock === true)
    .map(({ titulo, precio }) => {
        return `<article class="card">
            <h3>${titulo}</h3>
            <p>Precio: $${precio}</p>
            <button>Comprar</button>
        </article>
        `;
    });

console.log("Tarjetas listas para inyectar al DOM:", librosStock); */


/* 

const edades = [15, 22, 17, 30];
//filtrar las edades que sean multiplo de 3 y luego multiplicarlos por 5

const modificados = edades
.filter(pepe => pepe%3===0)
.map(pepe => pepe *5);
console.log(modificados);
 */



const peliculasAPI = [
    { id: 1, titulo: "Interstellar", genero: "Sci-Fi", rating: 8.6 },
    { id: 2, titulo: "Son como niños", genero: "Comedia", rating: 5.9 },
    { id: 3, titulo: "Inception", genero: "Sci-Fi", rating: 8.8 }
];



const recomendacion = peliculasAPI
.filter(pelicula => pelicula.rating > 8)
.map(({titulo, genero}) => {
    return `La recomendación es la pelicula ${titulo} del genero ${genero}`
});

console.log(catalogo);



