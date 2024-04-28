class DispositivoEntrada {

    constructor (tipoEntrada, marca){
        this._tipoEntrada = tipoEntrada;
        this._marca = marca;
    }

    get tipoEntrada(){
        return this._tipoEntrada;
    }

    set tipoEntrada(tipoEntrada){
        this._tipoEntrada = tipoEntrada;
    }
    
    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    toString(){
        return `Dispositivo de entrada: ${this._tipoEntrada}, Marca: ${this._marca} `
    }
}

class Raton extends DispositivoEntrada{

    static contadorRatones = 0;

    constructor(tipoEntrada,marca){
        super (tipoEntrada, marca); //El super va de primero, si se pone debajo marca error.
        this._idRaton = ++Raton.contadorRatones;
    }

    get idRaton(){
        return this._idRaton;
    }

    toString(){
        return `[Raton: ${this._idRaton}, Tipo de Entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Teclado extends DispositivoEntrada {
    static contadorTeclados = 0;

    constructor(tipoEntrada,marca){
        super (tipoEntrada, marca);
        this._idTeclado = ++Teclado.contadorTeclados;
    }

    get idTeclado(){
        return this._idTeclado;
    }

    toString(){
        return `[Teclado: ${this._idTeclado}, Tipo de entrada: ${this._tipoEntrada}, Marca: ${this._marca}]`
    }
}

class Monitor {
    static contadorMonitores = 0;

    constructor (marca,tamaño){
        this._idMonitor = ++Monitor.contadorMonitores;
        this._marca = marca;
        this._tamaño = tamaño;
    }

    get idMonitor(){
        return this._idMonitor;
    }
    
    set idMonitor(idMonitor){
        this._idMonitor = idMonitor;
    }

    get marca(){
        return this._marca;
    }

    set marca(marca){
        this._marca = marca;
    }

    get tamaño (){
        return this._tamaño;
    }

    set tamaño(tamaño){
        this._tamaño = tamaño;
    }

    toString(){
        return `[Monitor: ${this._idMonitor}, Marca: ${this._marca}, Tamaño: ${this._tamaño}]`
    }
}

// CREACIÓN CLASE COMPUTADORA
class Computadora{
    static contadorComputadoras = 0;
    constructor(nombre, monitor, raton, teclado){
        this._idComputadora = ++Computadora.contadorComputadoras
        this._nombre = nombre;
        this._monitor = monitor;
        this._raton = raton;
        this._teclado = teclado;
    }

    toString(){
        return `Computadora ${this._idComputadora}: ${this._nombre} \n ${this._monitor} \n ${this._raton} \n ${this._teclado}`;
    }
}


// MÉTODO PUSH ES PARA AGREGAR UN NUEVO ELEMENTO.
class Orden {
    static contadorOrdenes = 0;
    constructor(){
        this._idOrden = ++Orden.contadorOrdenes;
        this._computadoras = []; //Arreglo vació, se llena luego de dar valores.
    }

    get idOrden (){
        return this._idOrden;
    }
    // Método agregar computadora, se llamaría así, Computadora.agregarComputadora(Información);
    agregarComputadora(computadora){
        this._computadoras.push(computadora)
    }

    //Método mostrar orden.
    mostrarOrden(){
        let computadorasOrden = '';
        for(let computadora of this._computadoras){
            computadorasOrden += `\n ${computadora}`
        }

        console.log(`Orden: ${this._idOrden}, Computadoras: ${computadorasOrden}`) //ComputadorasOrden es igual a el método agreagr computadora que se almacena luego en la variable computadorasOrden.
    }
}

let monitor1 = new Monitor('LG',"15'")
let monitor2 = new Monitor ('Smart TV',"55'")
console.log(monitor1.toString());
console.log(monitor2.toString());

let teclado1 = new Teclado('USB','HP');
console.log(teclado1.toString());

let raton1 = new Raton('USB','asus');
console.log(raton1.toString());
let raton2 = new Raton ('bluetooth', 'HP');
console.log(raton2.toString());

let dispositivoentrada1 = new DispositivoEntrada ('Mouse','logitech');

let computadora1 = new Computadora('HP', monitor1, raton1, teclado1);
let computadora2 = new Computadora ('Lenovo', monitor2, raton2, teclado1)
console.log(computadora1.toString());
console.log(`${computadora1}`); //otra forma de llamar el método toString.

let orden1 = new Orden();
orden1.agregarComputadora(computadora1); //se ponen los objetos anteriormente creados de tipo computadora para crear la orden.
orden1.agregarComputadora(computadora2)
orden1.mostrarOrden(); // En el curso llamo la variable orden1 Así.
console.log(orden1.mostrarOrden());

let orden2 = new Orden();
orden2.agregarComputadora(computadora1);
orden2.mostrarOrden();
