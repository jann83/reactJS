//manipulación 
const producto = {

nombre: "tablet",
precio: 200,
disponible: true


}
//no permite cambiar y eliminar
// Object.freeze(producto);
//permite cambiar pero no eliminar y añadir

Object.seal(producto);



//se reescriben propiedades
producto.nombre = "monitor curvo"
//eliminar
delete producto.disponible


console.table(producto)
console.log(producto)



