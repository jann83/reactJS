






const producto = {

nombre : "Tablet",
precio : 300,
disponible : true,
}
// console.log(producto)
console.table(producto)

console.log(producto.precio)

console.log(producto.disponible)

console.log(producto.nombre)

//destructuring

const { nombre, precio, disponible } = producto
console.log(nombre)

//object literal enhancement

const autenticado = true
const usuario = "juan"

const nuevoObjeto = {

    autenticado,
    usuario
}
console.log(nuevoObjeto)
