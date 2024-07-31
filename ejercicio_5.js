/* 5. cree una función que permita calcularla serie de fibonacci hasta un número entero menor
que 20, en la serie cada número está dado por la suma de los dos anteriores.
 */

function fibonacci(n) {
  // Caso base: los dos primeros números de la secuencia son 0 y 1
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

console.log(fibonacci(0)); /* 0 */
console.log(fibonacci(1)); /* 1 */
console.log(fibonacci(2)); /* 1 */
console.log(fibonacci(3)); /* 2 */
console.log(fibonacci(4)); /* 3 */
console.log(fibonacci(5)); /* 5 */
console.log(fibonacci(6)); /* 8 */
console.log(fibonacci(7)); /* 13 */
console.log(fibonacci(8)); /* 21 */
console.log(fibonacci(9)); /* 34 */
console.log(fibonacci(10)); /* 55 */
