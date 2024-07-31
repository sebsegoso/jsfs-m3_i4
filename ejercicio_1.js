/* 1. Cree una función que reciba como parámetros dos números enteros 
y retorne otro entero que sea el primer número elevado al segundo. */

const pow = function (num1, num2) {
  const num1IsInteger = Number.isInteger(num1);
  const num2IsInteger = Number.isInteger(num2);

  if (!num1IsInteger) {
    console.error(
      `El primer número debe ser un entero e ingresaste ${num1}, intenta con ${parseInt(
        num1
      )}`
    );
  }
  if (!num2IsInteger) {
    console.error(
      `El segundo número debe ser un entero e ingresaste ${num2}, intenta con ${parseInt(
        num2
      )}`
    );
  }
  if (!num1IsInteger || !num2IsInteger) return null;

  return num1 ** num2;
};

console.log(pow(1, 3)); /* 1 */
console.log(pow(2, 5)); /* 32 */
console.log(pow(4, 2)); /* 16 */
console.log(pow(5, 3)); /* 125 */
console.log(pow(2.3, 3.9)); /* error: null */
