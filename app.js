//Ejercicio 1 a
/* const frutas = [];
for(let i=0;i<5;i++){
let nombres = prompt("Ingresa una fruta");
frutas.push(nombres); } */

 
//Ejercicio 1 b
/* const frutas2 = [];
let salir = 1;
do{
    let item = prompt("Ingresa una fruta");
    frutas2.push(item);     salir = parseInt(prompt("Si desea ingresar otra fruta marca 1 sino marca 0"));
 }while(salir != 0);
 console.log(frutas); */
 //ejercicio 1 c
 /* const todoArray = frutas.concat(frutas2);
 console.log(todoArray);
 const todoArray2 = frutas2.concat(frutas);
 console.log(todoArray); */
//Ejercicio 2
/*  const ciudades = ["Tokyo","Baires","Toronto","Edimburgo","Chernobil","Seul","Busan","Wuhan","Rosario","Massachusetts"];
 const num = parseInt(prompt("Ingrese un numero"));
 alert(ciudades[num]); */
//Ejercicio 3
/* const ciudades = ["Tokyo","Baires","Toronto","Edimburgo","Chernobil","Seul","Busan","Wuhan","Rosario","Massachusetts"];
const num = parseInt(prompt("Ingrese un numero"));
const comoSeTeCante = ciudades.slice(0,num);
ciudades.reverse();
const ciudadReversed = ciudades.slice(0,num);
console.log(comoSeTeCante);
console.log(ciudadReversed); */

// Ejercicio 4

const artistas = ["chester benningston","shakira","Carlos Vives","chano","Charly","Cerati","Luciano Pereyra","Horacio Guaraní"];

/* console.log(artistas.length);
console.log(artistas.pop());
const pares = artistas.filter((item,index) => index % 2 == 0);
pares.shift();
console.log(pares);
console.log(artistas);
console.log(artistas.splice(0,7));
console.log(artistas.splice(1,8)); */
/* const arrayString = artistas.toString();
const regex = /,/g;
let separados = arrayString.replace(regex,"*");
console.log(separados); */
/* let nuevoArtista = prompt("Ingrese un artista");
const nuevoArray = artistas.splice(0,7);;
nuevoArray.push(nuevoArtista);
console.log(nuevoArray); */

//ejercicio 5
const numeros = [12,55,7,98,45,22,31,76];
/* console.log(numeros.length);
const imparesIndex = numeros.filter((item,index) => index % 2 != 0);
console.log(imparesIndex);
const numerosImpares = numeros.filter((item) => item % 2 != 0);
console.log(numerosImpares);
const mayor = numeros.sort(function(a, b){return a - b});
console.log(mayor.pop()); */
const mitadArray = numeros.splice(0,(numeros.length/2));
console.log(mitadArray);











