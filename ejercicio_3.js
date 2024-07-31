/* 3. Cree un programa que defina un objeto usuario que tenga propiedades nombre y edad y
dos funciones que permitan modificar el nombre y la edad de manera independiente. */

const usuario = {
  nombre: "Pepito los palotes",
  edad: 30,
};

function updateKey(key, newValue) {
  const lastValue = usuario[key];
  usuario[key] = newValue;
  console.log(`${key} ha cambiado: ${lastValue} ==> ${usuario[key]}`);
}

function updateName(newName) {
  updateKey("nombre", newName);
}

function updateAge(newAge) {
  updateKey("edad", newAge);
}
console.log("antes:", usuario); /* { nombre: 'Pepito los palotes', edad: 30 } */
updateName("La mojojojo");
updateAge(60);
console.log("después:", usuario); /* { nombre: 'La mojojojo', edad: 60 } */
