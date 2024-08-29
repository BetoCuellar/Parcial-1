// Primer Punto

class Nodo {
    constructor(valor) {
        this.valor = valor;
        this.siguiente = null;
    }
}

class ListaEnlazada {
    constructor() {
        this.cabeza = null;
    }

    insertar(valor) {
        const nuevoNodo = new Nodo(valor);
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza = nuevoNodo;
    }

    imprimir() {
        let actual = this.cabeza;
        let resultado = "";
        while (actual) {
            resultado += actual.valor + " -> ";
            actual = actual.siguiente;
        }
        resultado += "null";
        console.log(resultado);
    }

    revertir() {
        let anterior = null;
        let actual = this.cabeza;
        while (actual) {
            const siguiente = actual.siguiente;
            actual.siguiente = anterior;
            anterior = actual;
            actual = siguiente;
        }
        this.cabeza = anterior;
    }
}

function unirListasOrdenadas(lista1, lista2) {

    lista1.revertir();
    lista2.revertir();
    

    let nodo1 = lista1.cabeza;
    let nodo2 = lista2.cabeza;

    
    const listaUnida = new ListaEnlazada();
    let nodoActual = null;

    while (nodo1 || nodo2) {
        let valor;
        if (!nodo1) {
            valor = nodo2.valor;
            nodo2 = nodo2.siguiente;
        } else if (!nodo2) {
            valor = nodo1.valor;
            nodo1 = nodo1.siguiente;
        } else if (nodo1.valor < nodo2.valor) {
            valor = nodo1.valor;
            nodo1 = nodo1.siguiente;
        } else {
            valor = nodo2.valor;
            nodo2 = nodo2.siguiente;
        }
        
        
        const nuevoNodo = new Nodo(valor);
        if (!nodoActual) {
            listaUnida.cabeza = nuevoNodo;
        } else {
            nodoActual.siguiente = nuevoNodo;
        }
        nodoActual = nuevoNodo;
    }
    
    return listaUnida;
}

const lista1 = new ListaEnlazada();
lista1.insertar(3); 
lista1.insertar(5); 
lista1.insertar(7); 

const lista2 = new ListaEnlazada();
lista2.insertar(4); 
lista2.insertar(6);
lista2.insertar(8); 

console.log("Lista 1:");
lista1.imprimir(); 
console.log("Lista 2:");
lista2.imprimir(); 

const listaUnida = unirListasOrdenadas(lista1, lista2);
console.log("Lista Unida Ordenada:");
listaUnida.imprimir(); 



// Segundo Punto

class NodoArbol {
    constructor(valor) {
        this.valor = valor;
        this.izquierda = null;
        this.derecha = null;
    }
}


class ArbolBinario {
    constructor() {
        this.raiz = null;
    }

  
    insertar(valor) {
        const nuevoNodo = new NodoArbol(valor);
        if (this.raiz === null) {
            this.raiz = nuevoNodo;
        } else {
            this._insertarRecursivo(this.raiz, nuevoNodo);
        }
    }

    _insertarRecursivo(nodo, nuevoNodo) {
        if (nuevoNodo.valor < nodo.valor) {
            if (nodo.izquierda === null) {
                nodo.izquierda = nuevoNodo;
            } else {
                this._insertarRecursivo(nodo.izquierda, nuevoNodo);
            }
        } else {
            if (nodo.derecha === null) {
                nodo.derecha = nuevoNodo;
            } else {
                this._insertarRecursivo(nodo.derecha, nuevoNodo);
            }
        }
    }

  
    calcularAltura(nodo = this.raiz) {
        if (nodo === null) {
            return -1; 
        }
        const alturaIzquierda = this.calcularAltura(nodo.izquierda);
        const alturaDerecha = this.calcularAltura(nodo.derecha);
        return Math.max(alturaIzquierda, alturaDerecha) + 1;
    }
}

const arbol = new ArbolBinario();
arbol.insertar(20);
arbol.insertar(7);
arbol.insertar(13);
arbol.insertar(3);
arbol.insertar(5);
arbol.insertar(15);
arbol.insertar(19);

console.log("Altura del árbol:", arbol.calcularAltura());
