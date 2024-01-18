class Producto {
    constructor(nombre, precio, proveedor) {
        this.nombre = nombre;
        this.precio = precio;
        this.proveedor = proveedor;
    }
}

const lista = JSON.parse(localStorage.getItem("productos")) || [];

function agregarProducto() {
    let nombre = document.getElementById("productName").value;
    let precio = Number(document.getElementById("productPrice").value);
    let proveedor = document.getElementById("productProvider").value;
    const producto = new Producto(nombre, precio, proveedor);
    lista.push(producto);
    
    localStorage.setItem("productos", JSON.stringify(lista));
    
    document.getElementById("productForm").reset();
}

function mostrarProductos() {
    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = "";

    for (let i = 0; i < lista.length; i++) {
        resultArea.innerHTML += `<p>Producto: ${lista[i].nombre}, Precio: $${lista[i].precio}, Proveedor: ${lista[i].proveedor}</p>`;
    }
}

function sumarProductos() {
    let sumatoria = 0;

    for (let i = 0; i < lista.length; i++) {
        sumatoria += lista[i].precio;
    }

    let resultArea = document.getElementById("resultArea");
    resultArea.innerHTML = `<p>Total: $${sumatoria}</p>`;
}

window.addEventListener("beforeunload", function() {
    sessionStorage.removeItem("productos");
});