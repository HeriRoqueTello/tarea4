/*
  Calcular el perímetro de una circunferencia dado su radio.
  Luego calcule el perímetro de la misma si se reduce al 50%. 
  Luego calcule el perímetro de la misma si se reduce al 25% 
  con respecto al resultado anterior
*/
//* Declarar las variables de los inputs
const hr = document.querySelectorAll('hr');
const radio_input = document.getElementById('radio');
const radio_text = document.getElementById('radio-text');
const perimetro_text = document.getElementById('perimetro-text');
const radio_50_text = document.getElementById('radio-50-text');
const perimetro_50_text = document.getElementById('perimetro-50-text');
const radio_50_25_text = document.getElementById('radio-50-25-text');
const perimetro_50_25_text = document.getElementById('perimetro-50-25-text');
const btn_perimetro = document.getElementById('perimetro');
const btn_clear = document.getElementById('clear');
//* Funcion mostrar el resultado al usuario
function setPerimetro() {
  calcularPerimetro();
  calcularPerimetro50();
  calcularPerimetro25();
  btn_perimetro.hidden = true;
  radio.disabled = true;
  hr.forEach((element) => {
    element.hidden = false;
  });
  radio_text.hidden = false;
  perimetro_text.hidden = false;
  radio_50_text.hidden = false;
  perimetro_50_text.hidden = false;
  radio_50_25_text.hidden = false;
  perimetro_50_25_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  radio.value = '';
  btn_perimetro.hidden = false;
  radio.disabled = false;
  hr.forEach((element) => {
    element.hidden = true;
  });
  radio_text.hidden = true;
  perimetro_text.hidden = true;
  radio_50_text.hidden = true;
  perimetro_50_text.hidden = true;
  radio_50_25_text.hidden = true;
  perimetro_50_25_text.hidden = true;
  btn_clear.hidden = true;
}
//* Funcion para calcular el perimetro
function calcularPerimetro() {
  var radio = radio_input.value;
  var perimetro = 2 * Math.PI * radio;
  //console.log(radio, perimetro);
  radio_text.textContent = 'Radio: ' + radio;
  perimetro_text.textContent = 'Perimetro: ' + perimetro.toFixed(2);
}
//* Funcion para calcular el perimetro se reduce al 50%
function calcularPerimetro50() {
  var radio = parseFloat(radio_input.value) * 0.5;
  var perimetro = 2 * Math.PI * radio;
  //console.log(radio, perimetro);
  radio_50_text.textContent = 'Radio reducido 50%: ' + radio;
  perimetro_50_text.textContent = 'Perimetro(50%): ' + perimetro.toFixed(2);
}
//* Funcion para calcular el perimetro se reduce al 25% del resultado anterior
function calcularPerimetro25() {
  var radio = parseFloat(radio_input.value) * 0.25;
  var perimetro = 2 * Math.PI * radio;
  //console.log(radio, perimetro);
  radio_50_25_text.textContent = 'Radio reducido 25%: ' + radio;
  perimetro_50_25_text.textContent = 'Perimetro(25%): ' + perimetro.toFixed(2);
}
