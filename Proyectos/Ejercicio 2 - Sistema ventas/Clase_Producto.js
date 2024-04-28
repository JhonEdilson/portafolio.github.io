class Producto{

    static contadorProductos = 0;

    constructor (nombre, precio){ 
        this._idProducto = ++Producto.contadorProductos;
        this._nombre = nombre;
        this._precio = precio;
    }   

    get idProducto (){
        return this._idProducto;
    }

    get nombre (){
        return this._nombre;
    }

    set nombre ( nombre){
        this._nombre = nombre;
    }

    get precio(){
        return this._precio;
    }

    set precio(precio){
        this._precio = precio;
    }

    toString(){
        return  `idProducto : ${this._idProducto}, nombre:  ${this._nombre}, precio: $ ${this._precio}`;
    }

}


class Orden {
    static get Max_Productos (){ // se crea el máximo de productos que se pueden agregar.
        return 5;
    }
    static contadorOrdenes = 0;
    
    constructor (){
        this._productos = [];
        this._idOrden = ++Orden.contadorOrdenes;
        this._contadorProductosAgregados = 0;
        
    }
    
    get idOrden (){
        return this._idOrden;
    }
    
    agregarProducto(producto){
        if (this._productos.length < Orden.Max_Productos){ //Aquí se hace un condicional para agregar productos si los productos no superan 5.
            this._productos.push(producto); //Agregar producto.
        }
        else {
            console.log('Se ha excedido el máximo de productos.')
        }
    }
    
    // calcular el total de productos.

    calcularTotal (){
        let totalVenta = 0;
        for (let producto of this._productos){
            totalVenta += producto.precio; // incrementar el precio por cada producto en el arreglo.
        }
        return totalVenta;
    }

    //Método mostrar orden, imprimir cada uno de los elementos.
    mostrarOrden(){
        let productosOrden = '';
        for (let producto of this._productos){
            productosOrden += '\n{' + producto.toString() + ' }';
        }

        console.log(`Orden : ${this._idOrden} Total: $${this.calcularTotal()}, Productos: ${productosOrden} `)
    }
}



let producto1 = new Producto ('pantalón', 200);
let producto2 = new Producto ('camisa', 100);

let orden1 = new Orden();
orden1.agregarProducto(producto1);
orden1.agregarProducto(producto2);
orden1.mostrarOrden();

let orden2 = new Orden();
let producto3 = new Producto ('cinturon', 50);
orden2.agregarProducto(producto3);
orden2.agregarProducto(producto1);
orden2.agregarProducto(producto2);
orden2.mostrarOrden();

console.log(producto2.toString());

orden2.calcularTotal();