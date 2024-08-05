//---Curso JavaScript FreeCodeCamp---
/* Secuencias de Escape
Codigo   | Resultado
------------------------
\'          Comilla simple
\"          Comilla doble
*/
console.log("Alejandro \"Vázquez\"");
/* 
\\          Barra invertida
*/
console.log("Para que se muestre una barra es necesario poner otra antes: \\");
/*
\n          Linea nueva
*/
console.log("Curso de \nJavaScript");
/*
\r          Retorno de Carro
*/
console.log("Hola\rJavaScript");
/*
\b          Retroceso
*/
console.log("Hola\bMundo")
/*
\t          Tabulacion
*/
console.log("Java\tScript");
/*
\f          Salto de pagina
*/
// Concatenar cadena de caracteres
var nombreCompleto = "Alejandro" + " Vázquez";
console.log(nombreCompleto); 
var mensajeCompleto = "Java";
var parteFinal = "Script";
mensajeCompleto += parteFinal;
console.log(mensajeCompleto);

//Longitud de una cadena de caracteres
var miCadena;
miCadena = "ABCDE F g 6*/";
console.log(miCadena.length);

//Notacion de corchetes: primer caracter
var lenguajeDeProgramacion = "JavaScript";
/*
Cadena: J a v a S c r i p t
indice: 0 1 2 3 4 5 6 7 8 9
*/
console.log(lenguajeDeProgramacion[0]);

//Inmutabilidad de cadena de caracteres
var miCadena = "Aleaandro Vázquez";
console.log(miCadena);
miCadena[3] = "j";
console.log(miCadena);
miCadena = "Alejandro Vázquez";
console.log(miCadena);

//Notacion de corchetes: ultimo caracter
var miCadena = "JavaScript";
/*
Cadena: J a v a S c r i p t
indice: 0 1 2 3 4 5 6 7 8 9
*/
console.log(miCadena[miCadena.length - 1]);

//Notacion de corchetes de derecha a izquierda
var miCadena;
miCadena = "JavaScript";
console.log(miCadena[miCadena.length - 2]);

//Palabras en blanco
var miSustantivo = "perro";
var miAdjetivo = "negro";
var miVerbo = "corrio";
var miAdverbio = "rapidamente";
/*Concatenar las cadenas para crear una cadena que muestre un mensaje.
por ejemplo : el perro negro corrio rapidamente a la tienda.
*/
var palabrasEnBlanco = "El " + " " + miSustantivo + " " + miAdjetivo + " " + miVerbo+ " " + miAdverbio + " " + " a la tienda" + ".";
console.log(palabrasEnBlanco);

//Arrays
var miArreglo = ["Alejandro", 14];
console.log(miArreglo);
var estudiantes = ["Santiago", "Bernabeu", "Marcelo", "Gallardo"];
console.log(estudiantes);
var listaDeEstudiantes = [["Santiago", 12], ["Bernabeu", 2018]];
console.log(listaDeEstudiantes);
//Acceder a los elementos de un arreglo
var miArreglo = [10, 20, 30];
console.log(miArreglo[0]);
console.log(miArreglo[1]);
console.log(miArreglo[2]);
var suma = miArreglo[0] + miArreglo[1] + miArreglo[2];
console.log(suma);
//Modificar elementos de un arreglo
miArreglo[0] = 40;
console.log(miArreglo[0]);
//Acceder a arreglos multidimencionales
var miArreglo = [[1, 2, 3], [4, 5, 6], [7,8,9]];
/*
Arreglo:        [[1, 2, 3], [4, 5, 6], [7,8,9]]
Indices:             0          1         2
Indices internos: 0, 1, 2    0, 1, 2   0, 1, 2
*/
console.log(miArreglo[1][2]);
//.push()
var estaciones = ["Invierno", "Otoño", "Primavera"];
var estacion;
console.log(estaciones);
estaciones.push("Verano");
console.log(estaciones);
//.pop()
estacion = estaciones.pop();
estaciones.pop();
console.log(estaciones);
console.log(estacion);
//.shift()
var estaciones = ["Invierno", "Otoño", "Primavera", "Verano"];
estaciones.shift();
console.log(estaciones);
//.unshift()
var estaciones = ["invierno", "Otoño", "Primavera"];
estaciones.unshift("Verano");
console.log(estaciones);
//Ejemplo arreglo multidimencional
var listaDeCompras = [["cereal", 3],["leche", 2], ["galletas",4], ["pan", 5], ["refresco", 7], ["pollo", 7]];
//Cereal
console.log("voy a comprar " + listaDeCompras[0][1] + " unidades de " + listaDeCompras[0][0] + ".");
//Leche
console.log("voy a comprar " + listaDeCompras[1][1] + " unidades de " + listaDeCompras[1][0] + ".");
//Galletas
console.log("voy a comprar " + listaDeCompras[2][1] + " unidades de " + listaDeCompras[2][0] + ".");

//Funciones
function mostrarMensaje(){
    console.log("Curso JavaScript");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
//Argumentos
function sumar(a, b){
    suma = a + b;
    console.log("El resuldado de " + a + " + " + b + " es: " + suma);
}
sumar(5, 3);
sumar(8, 9);
sumar(2, 4);
sumar(5, 5);
var x = 2;
var y = 1;
sumar(x, y); 
function concatenarTresCadenas(cadena1, cadena2, cadena3){
    console.log(cadena1 + " " + cadena2 + " " + cadena3);
}
concatenarTresCadenas("Curso", "de ", "Javascript");
//Ambito Global
var miVariableGlobal = 5;
console.log(miVariableGlobal);
function miFuncion(){
    console.log(miVariableGlobal);    
}
miFuncion();
console.log(miVariableGlobal);
//Ambito Local
function miSegundaFuncion(){
    var miVariableLocal = 4;
    console.log(miVariableLocal);
}
miSegundaFuncion();
//console.log(miVariableLocal);(Devuelve error)
var miNombre = "Alejandro";
function mostrarMiNombre(){
    var miNombre = "Vazquez";
    console.log(miNombre);
}
mostrarMiNombre();
console.log(miNombre);//Dentro de la funcion se muestra la varieble local y fuera la global, en caso que tengan el mismo nombre,
//Retornar valores
function sumar(a, b){
    return a + b;
}
console.log(sumar(5,3));
//Undefined
function sumas(a, b){
    console.log(a + b);
}
console.log(sumas(5, 3));
//Asignar un valor retornado
function addition(a, b){
    return a + b ;
}
var resultado = addition(5, 3); // var resultado = 8;
console.log(resultado);

function crearCadenaConMeta(lenguajeDeProgramacion){
    return "Mi meta es apreder " + lenguajeDeProgramacion;
}
var miMeta = crearCadenaConMeta("JavaScript");
console.log(miMeta);
//Proximo en fila
/*
Definir una funcion proximoEnLaFila que tome un arreglo y un numero como argumentos.
Agrega el numero al final del arreglo y luego elimina el primer elemento del arreglo.
La funcion proximoEnLaFila debe retornar el elemento que fue removido
*/
function proximoEnLaFila(arregrlo, elemento){
    arregrlo.push(elemento);       //Agregar al final del arreglo.
    return arregrlo.shift();       //Remover el primer elemento.
}
var miArreglo = [1, 2, 3, 4, 5];
console.log("Antes: " + JSON.stringify(miArreglo));
console.log(proximoEnLaFila(miArreglo, 6));
console.log("Despues: " + JSON.stringify(miArreglo));

//Valores booleanos
//Operadores de igualdad(==)
console.log(5 == 5);                //True
console.log(6 == 5);                //False
console.log("Hola" == "Hola");      //True
console.log("Hola" == "hola");      //False
console.log([1, 2, 3] == [1, 2, 3]);//False
//Operadores de igualdad estricta(===)
console.log(9 == 9);
console.log(9 == "9");
console.log(9 === 9);
console.log(9 === "9");
var a;
var b;
a = 5;  
b = 5;
console.log(a == b);  //True
console.log(a === b); //True
b = 8;
console.log(a == b);  //False
console.log(a === b); //False
b = "5";
console.log(a == b);  //True
console.log(a === b); //False
a = "JavaScript";
b = "JavaScript";
//Operador de desigualdad(!=)
console.log(9 != 6);  //True
console.log(9 != 9);  //False
console.log("JavaScript" != "JavaScript");  //False
console.log([1, 2, 3] != [1, 2, 3]);        //True
//Operador de desigualdad estricta(!==)
console.log(1 != "1");  //False
console.log(1 !== "1"); //True
//Operador mayor que(>)
console.log(6 > 5);  //True
console.log(3 > 10); //False
console.log("B" > "A");     //True
console.log("ACB" > "ABC"); //True
console.log("AB" > "A");    //True
console.log("Mundo" > "Hola"); //True
console.log("M" > "H");        //True 
var a = 15;
var b = 7;
console.log(a > b);  //True
console.log(b > a);  //False
//Operador mayor o igual que(>=)
console.log(5 > 5);  //False
console.log(5 >= 5); //True
//Operador menor que(<)
console.log(5 < 6);  //True
console.log(10 < 3); //False
console.log("A" < "B");     //True
console.log("ABC" < "ACB"); //True
var a = 15;
var b = 7;
console.log(a < b); //False
console.log(b < a); //True
//Operador menor o igual que(<=)
console.log(5 < 5);  //False
console.log(5 <= 5); //True

//Operadoradores Logicos
/*
Operador AND(&&)
Tabla de verdad del operador AND
Para: X && Y
| X | Y | X && Y |
------------------
| T | T |   T    |
| T | F |   F    |
| F | T |   F    |
| F | F |   F    |
La expresion solo es verdadera cuando ambos operandos son verdaderos.
*/
console.log(true && true);  //True
console.log(true && false); //False
console.log(false && true);//False
console.log(false && false);//False
var a = 8;
console.log((a > 5) && (a < 10)); //True
var a = 3;
console.log((a > 5) && (a < 10)); //False
var a = 15;
console.log((a > 5) && (a < 10)); //False
var a = 1;
console.log((a > 5) && (a == 3)); //False
/*
Operador OR(||)
Tabla de verdad del operador OR
Para: X || Y
| X | Y |(X || Y)|
------------------
| T | T |   T    |
| T | F |   T    |
| F | T |   T    |
| F | F |   F    |
La expresion es verdadera si alguno de los operandos o ambos son verdaderos.
*/
console.log(true || true);  //True
console.log(true || false); //True
console.log(false || true); //True
console.log(false || false);//False
var a = 20;
console.log((a > 5) || (a < 15)); //True
var a = 3;
console.log((a < 5) || (a > 15)); //True
var a = 1;
console.log((a > 5) || (a == 1)); //True
var a = 8;
console.log((a < 5) || (a > 15)); //False
/*
Operador NOT(!)
Tabla de verdad del operador OR
Para: !X
| X | !X |
----------
| T | F  |
| F | T  | 
*/
console.log(!true);  //False
console.log(!false); //True
var a = 8;
console.log(!(a > 5)); //False
console.log(!(a < 5)); //True

//Sentencias condicionales
//Clausula if:
var x = 5;
if (x > 2 && x < 10) {
    console.log("la condicion es verdadera.");
}
var estacion = "Invierno";
if (estacion == "Invierno") {
    console.log("Es Invierno");
}
console.log("Despues del condicional");

//Clausula else:
var x = 5;
if (x < 2) {
    console.log("La condicion es verdadera");
}else {
    console.log("La condicion es falsa");
}
//Clausula else if:
function clasificarValor(valor){
    if (valor % 2 == 0) {
        console.log("Divisible entre 2");
    }else if (valor % 3 == 0) {
        console.log("Divisible entre 3");
    }else {
        console.log("No es divisible entre las opciones");
    }
}
clasificarValor(2);
clasificarValor(15);
clasificarValor(7);

//Condicionales orden logico:
function clasificarValor(valor) {
    if (valor < 5) {
        console.log("Menor que 5.");
    }else if (valor < 10){
        console.log("Menor que 10.");
    }else {
        console.log("Mayor o igual que 10.");
    }
}
clasificarValor(15);

//Encadenar sentencias if...else:
function interpretarIMC(indiceDeMasaCorporal) {
    if(indiceDeMasaCorporal < 18.5){
        console.log("Bajo Peso");
    }else if (indiceDeMasaCorporal <= 24.9){
        console.log("Normal");
    }else if(indiceDeMasaCorporal <= 29.9){
        console.log("Sobrepeso");
    }else{
        console.log("Obesidad");
    }
}
interpretarIMC(32.5);
//Codigo de golf
/*En el juego de golf cada hoyo tiene un par que representa el numero promedio de golpes
 que se espera que haga un golfista para introducir la pelota en el hoyo.
 hay un nombre diferente dependiendo de que tan por encima o por debajo del par esten tus golpes.
 Tu funcion tomara los argumentos par y golpes.
 Retorna la cadena correcta segun esta tabla que muestra los golpes en orden de mayor a menor prioridad:
 Golpes            Retornar
 --------------------------
 1                 "Hole-in-one!"
 <= par - 2        "Eagle"
 par -1            "Birdie"
 par               "Par"
 par + 1           "Bogey"
 par + 2           "Double Bogey" 
 >= par + 3        "Go Home"
 par y golpes siempre sera numericos y positivos
 */
function puntajeDeGolf(par, golpes){
    if (golpes == 1) {
        return "Hole-in-one!";
    }else if (golpes <= par - 2) {
        return "Eagle";
    }else if (golpes == par - 1) {
        return "Birdie";
    }else if (golpes == par) {
        return "Par";
    }else if (golpes == par + 1) {
        return "Bogey";
    }else if (golpes == par + 2) {
        return "Double Bogey";
    }else if (golpes >= par + 3) {
        return "Go Home";
    }
}
console.log(puntajeDeGolf(4,7));

//Sentencias Switch
function clasificarValor(valor){
    var respuesta;
    switch (valor){
        case 1:
            respuesta = "alpha";
            break;
        case 2:
            respuesta = "beta";
            break;
        case 3:
            respuesta = "gamma";
            break;
        case 4:
            respuesta = "delta";
            break;    
    }
    return respuesta;
}
console.log(clasificarValor(4));

var producto = "pizza";
switch (producto){
    case "pizza":
        console.log("La pizza basica cuesta $10.55");
        break;
    case "hamburguesa":
        console.log("La hamburguesa cuesta $6.78");
        break;
    case "helado":
        console.log("El helado cuesta $2.8");
        break;
}
console.log("Luego del switch");

function seleccionarIdioma(valor){
    var idioma;
    switch (valor){
        case 1:
            idioma = "Español";
            break;
        case 2:
            idioma = "Frances";
            break;
        case 3:
            idioma = "Italiano";
            break;
        default:
            idioma = "Ingles";
            break;
    }
    return idioma;
}
console.log(seleccionarIdioma(4));
//Sentencias Switch:Multiples casos
function clasificarVolumen(valor){
    var volumen;
    switch(valor){
        case 1:
            volumen = "bajo";
            break;
        case 2:
        case 3:
            volumen = "intermedio";
            break;
        case 4:
        case 5:
        case 6:
            volumen = "alto";
            break;
    }
    return volumen;
}
console.log(clasificarVolumen(5));
//Retornar valores booleanos:
function esMenorQue(a, b) {
    return a < b;
}
console.log(esMenorQue(6, 3));
//Patron de retorno anticipado:
function miFuncion(){
    console.log("Hola");
    return "Mundo";
    console.log("Adios");
}
console.log(miFuncion());
function calcularRaizCuadrada(num) {
    if (num < 0) {
        return undefined;
    }
    return Math.sqrt(num);
}
console.log(calcularRaizCuadrada(25));
console.log(calcularRaizCuadrada(-25));
//Conteo de Cartas:
/*
En el juego de casino Blackjack el jugador puede sacarle 
ventaja a la casa llevando un registro del numero relativo
de cartas altas y bajas que quedan en la baraja.
esto se llama conteo de cartas.
tener mas cartas altas en la baraja es una ventaja para el jugador.
Se le asigna un valor de cada carta de acuerdo a la siguiente tabla.
-Cuando el conteo es positivo, el jugador deberia apostar alto.
-Cuando el conteo es 0 o negativo, el jugador deberia apostar bajo.
Cambio de conteo          Cartas
------------------------------------------------
+1                        2, 3, 4, 5, 6
0                         7, 8, 9
-1                        10, 'J', 'Q', 'K', 'A'
Nuestra meta es definir una funcion para contar cartas.
La funcion debe tomar un parametro carta que puede ser un numero
o una cadena de caracteres y luego aumentar o reducir el valor de 
la variable global conteo de acuerdo al valor de carta.
La funcion tiene que retornar una cadena de caracteres con el conteo actual y la cadena:
-"Apostar" si el conteo es positivo.
-"Esperar" si el conteo es cero o negativo.
El conteo actual y la decision del jugador("Apostar" o "Esperar")
deben estar separados por un espacio.
 */
var conteo = 0;
function contarCartas(carta){
    var decision;
    switch(carta){
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            conteo++;
            break
        case 10:
        case "J":
        case "Q":
        case "K":
        case "A":
            conteo--;
            break;
    }
    if (conteo > 0) {
        decision = "Apostar";
    }else{
        decision = "Esperar";
    }
    return conteo + " " + decision;
}
console.log(contarCartas(2));
console.log(contarCartas(3));
console.log(contarCartas("K"));
console.log(contarCartas("A"));


