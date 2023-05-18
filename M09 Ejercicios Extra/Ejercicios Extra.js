/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   let arregloPadre = [];

   for (let clave in objeto) {
      arregloPadre.push([clave, objeto[clave]]);
   }
   return arregloPadre;
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   let CantidadLetras = {};
   let orden = string.split("").sort();

   orden.forEach(letra => {
      CantidadLetras[letra] = (CantidadLetras[letra] || 0) + 1;
   });
   return CantidadLetras;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   let nuevoString = [];
   let letrasMayusculas = [];

   string.split("").forEach(letra => {
      if (letra === letra.toUpperCase()) letrasMayusculas.push(letra); else nuevoString.push(letra)
   });
   return string = letrasMayusculas.join("") + nuevoString.join("");
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   return (frase.split(" ").map(str => str.split("").reverse().join(""))).join(" ");
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   let numeroArray = numero.toString().split("");
   let numeroArray2= numeroArray.splice(Math.ceil(numero.toString().length / 2), Math.floor(numero.toString().length / 2))

   if (numero.toString().length % 2 === 1) numeroArray.pop();
   
   if (numeroArray.join("") === numeroArray2.reverse("").join("")) return "Es capicua"
   else return "No es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   return (string.split("").filter(letra => letra != "a" && letra != "b" && letra != "c")).join("");
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   let i = "";
   let nuevoArreglo = [];

   while (arrayOfStrings.length !== 0) {
         i = arrayOfStrings[0];
         for (let c = 1; c < arrayOfStrings.length; c++) {
            if (i.length > arrayOfStrings[c].length) i = arrayOfStrings[c];
         };
         nuevoArreglo.push(i);
         arrayOfStrings.splice(arrayOfStrings.indexOf(i) ,1)
   }
   return nuevoArreglo;

   // let o = {};

   

}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   let i = 0;
   let nuevoArreglo = [];

   array1.forEach(num1 => {
      i = 0;
      array2.forEach(num2 => {
         if (num1 === num2) i = 1;
      });
      if (i === 1) nuevoArreglo.push(num1);
   });
   return nuevoArreglo;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};
