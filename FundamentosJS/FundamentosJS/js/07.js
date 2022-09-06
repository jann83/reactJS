//unir dos objetos o más

const producto =  {

nombre: "tablet",
precio: 200,
disponible: true
}

const cliente = {
    nombre: "juan",
    premium: true 
}
//se crea inmutabilidad
// const nuevoObjeto= Object.assign(producto, cliente)
const nuevoObjeto = {
    producto: {...producto},
    cliente:{...cliente}
}


console.log(nuevoObjeto);

