// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  var a = array[0];
  return a;
  
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  var a =  array.length-1;
  return array[a];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var a = array.length;
  return a;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (var i=0; i<array.length; i++){
      array[i]=array[i]+1;
    }
    return array;
  }


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento);
  return array;

}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  var a = palabras[0];
  for (var i = 1 ; i < palabras.length; i++){
    a = a + " " + palabras[i];
  }
  
  return a;

}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  for (var i = 0; i<array.length; i++){
    if (array[i]==elemento){
      return true;
    }
  }
  return false;
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var a = numeros[0];
  for (var i = 1; i<numeros.length; i++){
    a = a + numeros[i];
  }

  return a;

}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let a = resultadosTest[0];
  for (let i = 1; i<resultadosTest.length; i++){
    a = a + resultadosTest[i];
  }

  let b = a / resultadosTest.length;

  return b;
  
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:

  var max = numeros[0];

  for (var i = 1; i < numeros.length; i++){

    if (numeros[i]>max){
      max=numeros[i];
    }

  }

  return max;

}

function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
  // Tu código:
  var a = arguments[0];

  for (let i = 1; i<arguments.length; i++){
    a = a * arguments[i];
  }

  if (a == null){
    return 0;
  } 

  return a;


}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
}

