//* Declarar las variables de los inputs
const numeros_input = document.getElementById('number');
const number_label = document.getElementById('number-label');
const hr = document.querySelector('hr');
const numbers_text = document.getElementById('numbers-text');
const container = document.getElementById('number-container');
var numeros;
var label_hidden;

const btn_orden = document.getElementById('orden');
const btn_next = document.getElementById('next');
const btn_clear = document.getElementById('clear');

const numbers = [];

//* Funcion para agregar los input de los numeros
function setNumeros() {
  numeros_input.hidden = true;
  number_label.hidden = true;
  btn_next.hidden = true;
  btn_orden.hidden = false;

  for (let i = 1; i <= numeros_input.value; i++) {
    container.innerHTML += `<label for="number${i}" class="label hidden">Numero ${i}</label>`;
    container.innerHTML += `<input type="number" id="number${i}" class="form-input numeros" value="0" required />`;
  }
}
//* Funcion para ordenar los numeros del array
function ordenNumber() {
  numeros = document.getElementsByClassName('numeros');
  //label_hidden = document.getElementsByClassName('hidden');
  for (let i = 0; i < numeros.length; i++) {
    numbers.push(parseFloat(numeros[i].value));
  }
  numbers.sort((a, b) => b - a);
  container.innerHTML = '';
  // numeros.forEach(element => {
  //   element.hidden = true;
  // });

  // label_hidden.forEach(element => {
  //   element.hidden = true;
  // });
}

//* Funcion para calcular el salario y mostrarlo al usuario
function setOrden() {
  ordenNumber();
  numbers_text.textContent = `Numeros ordenados: ${numbers.join(', ')}`;
  btn_orden.hidden = true;
  numbers_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  numbers.splice(0, numbers.length);
  numeros_input.value = '';
  numeros_input.hidden = false;
  number_label.hidden = false;
  btn_next.hidden = false;
  btn_orden.hidden = true;
  numbers_text.hidden = true;
  btn_clear.hidden = true;
}
