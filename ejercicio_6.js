/* 6. cree una función que le permita determinar si una palabra es palíndroma o no, un
palíndromo es una palabra que se escribe de igual manera de izquierda a derecha que de
derecha a izquierda, por ejemplo “somos” */

function esPalindromo(palabra) {
  palabra = palabra.toLowerCase();
  const palabraInvertida = palabra.split("").reverse().join("");
  
  return palabra === palabraInvertida;
}

// Ejemplos de uso
console.log(esPalindromo("somos")); // true
console.log(esPalindromo("radar")); // true
console.log(esPalindromo("arribalabirra")); // true
console.log(esPalindromo("anitalavalatina")); // true
console.log(esPalindromo("palindromo")); // false
console.log(esPalindromo("Hola")); // false
