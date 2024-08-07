//Crear Objetos:
var miPerro = {
    "nombre": "Gordo",
    "edad" : 5,
    "peso" : 40,
    "raza": "Pitbull"
};
var miObjeto = {
    5 : "cinco"
};
//Acceder a Propiedades:Notacion de Punto.
console.log(miPerro.nombre);
console.log(miPerro.raza);
//Acceder a Propiedades:Notacion de Corchetes.(se utiliza para propiedades con espacios)
var miCuaderno = {
    "color": "verde",
    "categoria" : 3,
    "numero de paginas": 200,
    "numero de hojas": 100
};
console.log(miCuaderno["numero de paginas"]);
//Acceder a Propiedades: Variables.
var resultados = {
    1: "nora256",
    2: "gino577",
    3: "estef543",
    4: "kiara566"
};
var posicion = 2;
console.log(resultados[posicion]);
//Actualizar propiedades.
var mochila = {
    "color": "azul",
    "tamaño": "mediano",
    "contenido": ["botella de agua", "cuaderno"]
};
console.log(mochila.color);//azul
mochila.color = "verde";
console.log(mochila.color);
console.log(mochila.contenido);
mochila.contenido.push("lapiz");
console.log(mochila.contenido);
mochila.contenido = [];
console.log(mochila.contenido);
//Agregar propiedades.
var curso = {
    "titulo": "Aprende JavaScript desde cero",
    "idioma": "Español",
    "duracion": 30
};
console.log(curso.vistas);
curso.vistas = 34500;
console.log(curso.vistas);
//Eliminar propiedades.
delete curso.duracion;
console.log(curso.duracion);
console.log(curso);
//Objetos para Busqueda.
function buscarElementoQuimico(simbolo) {
    var simbolosQuimicos = {
        "Al": "Aluminio",
        "S": "Azufre",
        "Cl": "Cloro",
        "He": "Helio",
        "B": "Boro",
        "Li": "Litio",
    };
    return simbolosQuimicos[simbolo];
}
console.log(buscarElementoQuimico("Al"));
console.log(buscarElementoQuimico("S"));
console.log(buscarElementoQuimico("Cl"));
console.log(buscarElementoQuimico("He"));
console.log(buscarElementoQuimico("B"));
console.log(buscarElementoQuimico("Li"));
//Verificar Propiedades.
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};
console.log(miCuaderno.hasOwnProperty("color"));
console.log(miCuaderno.hasOwnProperty("origen"));
function verificarPropiedad(obj, propiedad) {
    if (obj.hasOwnProperty(propiedad)){
        return "Propiedad: " + obj[propiedad]; 
    }else { 
        return "El objeto no tiene esta propiedad";
    }
}
var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
};
console.log(verificarPropiedad(miCuaderno, "color"));
console.log(verificarPropiedad(miCuaderno, "origen"));
//Objetos complejos.
var ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamaño": "individual",
        "precio": 5.67,
        "toppings": [
            "extra queso",
            "champiñones",
            "piña"
        ],
        "paraLlevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamaño": "familiar",
        "precio": 18.34,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "paraLlevar": false
    },
    {
        "tipo": "napolitana",
        "tamaño": "individual",
        "precio": 6.78,
        "toppings": [],
        "paraLlevar": true
    }
];
console.log(ordenesDePizzas[0].tipo);
console.log(ordenesDePizzas[1]["precio"]);
console.log(ordenesDePizzas[2]);
//Objetos Anidados
var miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1 cucharada",
            "agua": "1 taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharadas",
            "mantequila": "200 grs"
        }
    }
};
console.log(miReceta.ingredientes.masa.harina);
console.log(miReceta.ingredientes.masa["sal"]);
console.log(miReceta.ingredientes.masa.agua);
console.log(miReceta.ingredientes.cobertura.azucar);
//Arreglos Anidados.
var misPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas",
            "tulipanes",
            "dientes de leon"
        ]
    },
    {
        tipo: "arboles",
        lista: [
            "abeto",
            "pino",
            "abedul"
        ]
    }
];
var primeraFlor = misPlantas[0].lista[0];
console.log(primeraFlor);
var segundoArbol = misPlantas[1].lista[1];
console.log(segundoArbol);
//Coleccion de Discos.
/*Tenemos un objeto que representa parte de una coleccion 
de albumes musicales.
Cada almbum tiene un numero de identidicacion unico(id)
asociado a otras propiedades.
No todos los albumes tienen la informacion completa.
*/
var coleccionDeDiscos = {
    7853: {
        tituloDelAlbum: "Bee Gees Greatest",
        artista: "Bee Gees",
        canciones: ["Stayin' Alive"]
    },
    5439: {
        tituloDelAlbum: "ABBA Gold",
    }
};
/*Define una funcion que tome los siguientes parametros:
-discos (el objeto que representa la coleccion de discos).
-id.
-propiedad ("artista" o "canciones").
-valor.
Tu meta es comlpetar la funcion implementando las siguientes 
reglas para modificar el objeto pasado a la funcion:
-Si "valor" es una cadena vacia, elimina la propiedad del album correspondiente.
-Si "propiedad" es igual a la cadena de caracteres "canciones" pero el album no tiene 
una propiedad llamada "canciones", crea un arreglo vacio y agrega "valor" a ese arreglo.
-Si "valor" no es una cadena vacia y "propiedad" no es igual a "canciones", 
asigna el valor del paramentro "valor" a la propiedad. si la propiedad no existe,
debes crearla y asignar este valor.
*/
function actualizarDiscos(discos, id, propiedad, valor) {
    if (valor === ""){
        delete discos[id][propiedad];
    }else if(propiedad === "canciones") {
        discos[id][propiedad] =  discos[id][propiedad] || [];
        discos[id][propiedad].push(valor);
    }else {
        discos[id][propiedad] = valor;
    }
}
 console.log(coleccionDeDiscos[7853].tituloDelAlbum);
 actualizarDiscos(coleccionDeDiscos, 7853, "tituloDelAlbum", "");
 console.log(coleccionDeDiscos[7853].tituloDelAlbum);
 console.log(coleccionDeDiscos[5439].canciones);
 actualizarDiscos(coleccionDeDiscos, 5439, "canciones", "Mamma Mia");
 console.log(coleccionDeDiscos[5439].canciones);
 //Ciclo "while":
var i = 0;
while (i <= 3){
     console.log("JavaScript");
     i++;
}
var miArreglo = [];
var i = 0;
console.log(miArreglo);
while(i < 10){
    miArreglo.push(i);
    i++;
}
console.log(miArreglo);
var numeros = [2, 3, 4, 5, 6, 8, 9, 34];
while (numeros.length > 4){
    numeros.pop();
} 
console.log(numeros);

//Ciclo "for":
var miArreglo = [];
for (var i = 0; i < 10; i += 2){
    miArreglo.push(i)
}
console.log(miArreglo);
//Ciclos for: numeros impares.
var miArreglo = [];
for (var i = 1; i < 50; i += 2) {
    miArreglo.push(i);
}
console.log(miArreglo);
//Ciclos for: contar hacia atras.
for (var i = 15; i >= 10; i -= 2) {
    console.log(i)
}
var miArreglo = []
    for(var i =10; i > 0; i -= 2) {
        miArreglo.push(i)
    }
    console.log(miArreglo);

//Iterar sobre un Arreglo con un ciclo "for":
var miArreglo = [4, 6, 8, 2];
var total = 0;
for (var i = 0; i < miArreglo.length; i++) {
    console.log("Iteracion" + i);
    console.log(miArreglo[i]);
    total += miArreglo[i];
}
console.log(total);

var lenguajes = ["JavaScript", "Pyton", "Java", "C++"];
for (var i = 0; i < lenguajes.length; i++) {
    console.log(lenguajes[i].toUpperCase());
}

function contarNumerosPares(arreglo){
    var total = 0;
    for(var i = 0; i < arreglo.length; i++) {
        if(arreglo[i] % 2 == 0) {
            total++;
        }
    }
    return total;
}
console.log(contarNumerosPares([5, 3, 1, 2, 4, 8]));
//Ciclos "for" Anidados.
var miArreglo = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
for (var i = 0; i < miArreglo.length; i++) {
    console.log("> Nueva iteracion");
    var arregloAnidado = miArreglo[i];//Arreglo
    console.log("Arreglo: " + arregloAnidado);
    for(var j = 0; j < arregloAnidado.length; j++) {
        console.log(">>> Ciclo anidado");
        console.log("Elemento: ")
        console.log(arregloAnidado[j]);//Elemento
    }
}
//Ciclos "do...while"
var x = 16;
do {
    console.log(x);
    x++;
}while (x < 10 );

//Busqueda de perfil:
var contactos = [
    {
        "nombre": "Nora",
        "apellido": "Nav",
        "numero": "0543236543",
        "gustos": ["Pizza", "Programacion"]
    },
    {
        "nombre": "Harry",
        "appellido": "Potter",
        "numero": "0994372684",
        "gustos": ["Hogwarts", "Magia"]
    },
    {
        "nombre": "Sherlock",
        "apellido": "Holmes",
        "numero": "0487345643",
        "gustos": ["Casos interesantes", "violin"]
    }
];
function buscarPerfil(nombre, propiedad){
    for (var i = 0; i < contactos.length; i++){
        if (contactos[i].nombre === nombre) {
            return contactos[i][propiedad] || "La propiedad no existe";
        }
    }
    return "El contacto no esta en la lista.";
}
console.log(buscarPerfil("Nora", "gustos"));
console.log(buscarPerfil("Nora", "id"));
console.log(buscarPerfil("Alejandro", "gustos"));

//Numeros Aleatorios:
function generarFraccionAleatoria(){
    return Math.random()
}
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(generarFraccionAleatoria());
console.log(Math.random());
var numeroAleatortio = Math.random();
console.log(numeroAleatortio);
//Numeros enteros aleatorios:
var numeroAleatrorioEntre0y19 = Math.floor(Math.random() * 20);
console.log(numeroAleatrorioEntre0y19);
function generarEnteroAleatorio(limiteSuperior){
    //generar un entero aleatorio entre 0 y el limite superior(sin incluirlo)
    return Math.floor(Math.random() * limiteSuperior);
}
for(var i = 0; i < 15; i++){
console.log(generarEnteroAleatorio(5));
}
//Numeros Enteros Aleatorios en un Rango.
function rangoAleatorio(limiteInferior, limiteSuperior){
    return Math.floor(Math.random() * (limiteSuperior - limiteInferior + 1)) + limiteInferior;
}
for (var i = 0; i < 15; i++){
    console.log(rangoAleatorio(3, 8));
}
//Funcion parseInt()
var a = "5";
var b = "7";
console.log(a + b);
a = parseInt("5");
b = parseInt("7");
console.log(a + b);

//Funcion parseInt()con una Base:
console.log(parseInt("110111", 2));
console.log(parseInt("3E0A", 16));
//Operador Condicional (Ternario):
function retornarMinimo(x, y){
    return x < y ? x : y;
}
console.log(retornarMinimo(8, 7));
console.log(retornarMinimo(4, 5));
console.log(retornarMinimo(2, 2));
var a = 5;
var b = 9;
console.log(a > b ? a + 2 : b * 3);
//Multiples Operadores Condicionales
function compararNumeros(a, b) {
    return a == b ? "a y b son iguales" 
    : a > b ? "a es mayor que b"
    : "a es menor que b";
}
console.log(compararNumeros(5, 3));
console.log(compararNumeros(5, 6));
console.log(compararNumeros(5, 5));
//var vs. let:

var campista = "James";
var campista = "David";
let campista = "James";
let campista = "David";
console.log(campista);
//Ambito de var vs. let:
for (var i = 0; i < 3; i++){
    console.log(i);
}
console.log("Variable: " + i);
for (let i = 0; i < 3; i++){
    console.log(i);
}
console.log("Variable: " + i);
var mostrarColor = true;
if (mostrarColor){
    let color = "verde";
    console.log("Color: " + color);
} 
//console.log(color);
//Const:
const MI_CONSTANTE= 35;
console.log(MI_CONSTANTE);
MI_CONSTANTE = 15; 

function calcularAreaCirculo(radio){
    const PI = 3.14;
    if (radio < 0){
        return undefined;
    }
    return PI * (radio **2);
}
console.log(calcularAreaCirculo(5));
//Mutar Arreglo Declarado con const:
const MI_ARREGLO = [1, 2, 3, 4];
MI_ARREGLO[0] = 5;
MI_ARREGLO[1] = 6;
MI_ARREGLO[2] = 7;
MI_ARREGLO[3] = 8;
console.log(MI_ARREGLO);
//Crear un Objeto Inmutable:
let colores = {
    "verde": "#10e04b",
    "azul": "#1b50e0",
    "negro": "000000",
    "blanco": "ffffff"
};
/*
Object.freeze(colores);
colores.amarillo = "#fff200";
console.log(colores);
//Funciones Flecha:
const fecha = function () {
    return new Date();
};
const fecha = () => new Date();
//Funciones Flecha con Parametros
const sumarTres = (x) => x + 3;
console.log(sumarTres(4));
const concatenarArreglos = function(arr1, arr2) {
    return arr1.concat(arr2);
};
const concatenarArreglos = (arr1, arr2) => arr1.concat(arr2);
console.log(concatenarArreglos([1, 2], [3, 4, 5]));
const sumar = (a, b) => {
    let num = 6;
    return a + b + num;
};
console.log(sumar(1, 1));
*/
//Valores por Defecto para Parametros:
const incrementar = (num, valor = 1) => num + valor;
console.log(incrementar(5, 3));
//Operador rest:
function miFuncion(...args){
    console.log(args.length);
}
miFuncion([1, 2, 3, 4], [5, 6, 7]);
const sumar = (...args) => {
    return args.reduce((a, b) => a + b, 0);
};
//Operador spread:
const numeros = [1, 2, 3];
function sumar(x, y, z){
    console.log(x);
    console.log(y);
    console.log(z);
    return x + y + z;
}
console.log(sumar(...numeros));
//Sintaxis de desetructuracion
/*
const usuario = {
    nombre: "Gino Smith",
    edad: 34
};
const {nombre, edad} = usuario;
var coordenada ={
    x: 4,
    y: 6,
    z: 12
};
const {x, y, z} = coordenada;
console.log(x);
//Sintaxis de Desestructuracion:Objetos Anidados
const usuario = {
    JohnDoe: {
        edad: 27,
        correo: "johnDoe@freecodecamp.comp"
    }
};
const {JohnDoe: {edad: edadDelUsuario, correo: correoDelUsuario}} = usuario;
console.log(edadDelUsuario);
console.log(correoDelUsuario);
*/
const PRONOSTICO_LOCAL = {
    "ayer": {
        minima: 61,
        maxima: 75
    },
    "hoy": {
        minima: 64,
        maxima: 77
    },
    "mañana": {
        minima: 68,
        maxima: 80
    }
};
//const minimaHoy = PRONOSTICO_LOCAL.hoy.minima;
//const maximaHoy = PRONOSTICO_LOCAL.hoy.maxima;
const {hoy: {minima: minimaHoy, maxima: maximaHoy}} = PRONOSTICO_LOCAL;
console.log(minimaHoy, maximaHoy);
//Sintaxis de Desestructuracion:Arrelgos
var a;
var b;
var c;
[a, b,,, c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c);
var a = 8;
var b = 6;
[b, a] = [a, b];
console.log("a: " + a);
console.log("b: " + b);
//Sintaxis de Desustructuracion con el Operador rest:
var a;
var b;
[a, b, ...arr] = [1, 2, 3, 4, 5, 6, 7];
console.log(a);
console.log(b);
console.log(arr);
const arregloInicial = [1, 2, 3, 4, 5, 6, 7, 8];
function removerTresPrimerosElementos(arreglo) {
    const [ , , , ...nuevoArreglo] = arreglo;
    return nuevoArreglo
}
const arregloFinal =removerTresPrimerosElementos(arregloInicial);
console.log(arregloFinal);
//Sintaxis de Desustructuracion: Pasar Objeto como Argumento.
var nuevoPerfilCliente = {
    nombre: "Jane Doe",
    edad: 24,
    nacionalidad: "Española",
    ubicacion: "España"
};
const actualizarPerfil = ({nombre, edad}) => {
    console.log(nombre);
    console.log(edad);
    console.log(nacionalidad);
    console.log(ubicacion);
};
actualizarPerfil(nuevoPerfilCliente);
const estadisticas = {
    max: 56.78,
    desviacionEstandar: 4.34,
    mediana: 34.54,
    moda: 23.87,
    min: -0.75,
    promedio: 35.85
};
const mitad = ({max, min}) => (max + min)/ 2.0;
console.log(mitad(estadisticas));

//Plantillas Literales
/*
Caracteristicas:
-Se usa el acento invertido(backtick) en lugar de comillas.
-Pueden contener comillas simples y dobles.
-Las lineas se preservan como se escriben en el codigo.
-Para reemplazar una variable se escribe ${variable}.
-Dentro de ${} tambien pueden escribir expresiones
*/
var a = 6;
console.log(`el valor de a es ${a}`);
var nombre = "Nora";
var edad = 6;
console.log(`Mi nombre es ${nombre} y tengo ${edad} años.`);
var miArray = [1, 2, 3, 4];
console.log(`El arreglo es ${JSON.stringify(miArray)}`);
var persona = {
    nombre: "Gino Cass",
    edad: 10
};
const SALUDO = `Hola Mi nombre es ${persona.nombre} y tengo ${persona.edad} años.`;
console.log(SALUDO);
//Crear Objetos de forma Concisa
const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});
console.log(crearPersona("Gino Smith", 28, "Español"));
//Metodos
const personas = {
    nombre : "Isabel",
    presentarse() {
        return `Hola mi nombre es ${nombre}`;
    }
};
console.log(personas.presentarse());
//Definir una clase
class TransbordadorEspacial {
    constructor(planeta){
        this.planeta = planeta;
    }
}
var zeus = new TransbordadorEspacial("Jupiter");
console.log(zeus.planeta);
var apolo = new TransbordadorEspacial("Marte");
console.log(apolo.planeta);
//Gettes & Setters
class Libro {
    constructor(autor){
        this._autor = autor;
    }
    get autor(){
        console.log("Getter");
        return this._autor;
    }
    set autor(nuevoAutor){
        console.log("Setter");
        this._autor = nuevoAutor;
    }
}
const libro = new Libro("anonimo");
console.log(libro.autor);
libro.autor = "Gino Smith";
console.log(libro.autor)