const miArray = ['manzana', 'banana', 'naranja'];

for (const m of miArray) {
    console.log(`Elemento del array ${m}`);
}


const numeros = [1, 2, 3, 4, 5, 6, 7, 8];

for (const n of numeros) {
    console.log(`Elemento del array ${n} multiplicado por 2 ${(n * 2)}`);
}


const persona = {
    nombre: 'Ana',
    edad: 30,
    profesion: 'Doctora'
};

console.log(persona.nombre);
console.log(persona["nombre"]);

for (const key in persona) {
    if (!Object.hasOwn(persona, key)) continue;

    const element = persona[key];
    console.log(persona[key]);
    console.log(element);
}