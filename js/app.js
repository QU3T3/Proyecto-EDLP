const productos = [
    { nombre: "camiseta2006", precio: 8000 },
    { nombre: "camisetaSuplente2006", precio: 6000 },
    { nombre: "camiseta2009", precio: 10000 },
    { nombre: "camisetaSuplente2009", precio: 9000 },
    { nombre: "camiseta2010", precio: 7000 },
    { nombre: "camisetaSuplente2010", precio: 6500 },
];

let carrito = []

let seleccion = prompt("Hola! ¿Desea comprar algún producto?")

while(seleccion != "si" && seleccion != "no"){
    alert("Por favor, ingrese si o no")
    seleccion = prompt("Hola! ¿Desea comprar algún producto?")
}

if(seleccion === "si"){
    alert("A continuación nuestra lista de productos!")
    let todosLosProdcutos = productos.map((producto) =>  producto.nombre + " " + "$" + producto.precio);
    alert(todosLosProdcutos.join(" - "))
} else if (seleccion == "no"){
    alert("¡Gracias por venir, hasta pronto!")
}

while(seleccion != "no"){
    let producto = prompt("Agrega un producto a tu carrito")
    let precio = 0

    if(producto == "camiseta2006" || producto =="camisetaSuplente2006" || producto == "camiseta2009" || producto =="camisetaSuplente2009" ||producto == "camiseta2010" || producto =="camisetaSuplente2010" ){
        switch(producto){
            case "camiseta2006":
                precio = 8000
                break;
            case "camisetaSuplente2006":
                precio = 6000
                break;
            case "camiseta2009":
                precio = 10000
                break;
            case "camisetaSuplente2009":
                precio = 9000
                break;
            case "camiseta2010":
                precio = 7000
                break;
            case "camisetaSuplente2010":
                precio = 6500
                break;
            default:
                break;
        }
    let unidades = parseInt(prompt("¿Cuantas unidades quiere llevar?"))

    carrito.push({producto, unidades, precio})
    } else{
        alert("No contamos con ese producto.")
    }

    seleccion = prompt("¿Desea seguir comprando?")

    while(seleccion === "no"){
        alert("¡Gracias por su compra!")
        carrito.forEach((carritoFinal) => {
            console.log(`producto: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}, total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
    break;
    }
}

const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)

console.log(`El total a pagar es: ${total}`)