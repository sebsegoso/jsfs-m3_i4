/* 2. Cree una función que reciba como parámetro un número entero menor que 20 y retorne el
factorial del número. ej 5! = 1*2*3*4*5 */

function factorial(num) {
  if (!Number.isInteger(num)) {
    console.error("El número ingresado debe ser entero");
    return null;
  }
  if (num >= 20) {
    console.error("El número ingresado debe ser menor a 20");
    return null;
  }
  if (num < 0) {
    console.error("El número ingresado debe ser mayor o igual a 0");
    return null;
  }

  return num == 0 ? 1 : num * factorial(num - 1);
}

console.log(factorial(0)); /* 1 */
console.log(factorial(1)); /* 1 */
console.log(factorial(2)); /* 2 */
console.log(factorial(3)); /* 6 */
console.log(factorial(4)); /* 24 */
console.log(factorial(5)); /* 120 */
console.log(factorial(6)); /* 720 */
console.log(factorial(-5)); /* null */
console.log(factorial(21)); /* null */
