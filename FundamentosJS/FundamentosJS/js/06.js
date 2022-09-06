//objetos destructuring con dos objetos
const productos = {

nombre:"Tablet",
precio: 300,
disponible: true

}

const cliente = {

    nombre: "juan",
    premium: true
}


const{ nombre, precio,disponible} = productos
//se crea un alias para no duplicar con : 
const{ nombre:nombreCliente, premium }= cliente


console.table(productos)
console.table(cliente)