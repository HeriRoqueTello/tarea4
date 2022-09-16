/*
  Escribir un programa que me indique un monto en billetes y soles. 
  Considerar billetes de: 10 – 20 – 50 y monedas de 1 – 5
  Por ejemplo convertir: 118
    Billetes de 50:  		2
    Billetes de 20:  		0
    Billetes de 10:  		1
    Monedas de 5: 		1
    Monedas de 1:		3
*/
//* Declarar las variables
const monto_input = document.getElementById('monto');
const hr = document.querySelector('hr');
const dinero_text = document.getElementById('dinero-text');
const B50_text = document.getElementById('50-text');
const B20_text = document.getElementById('20-text');
const B10_text = document.getElementById('10-text');
const M5_text = document.getElementById('5-text');
const M1_text = document.getElementById('1-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
var B50 = 0;
var B20 = 0;
var B10 = 0;
var M5 = 0;
var M1 = 0;
//* Funcion para colocar los billetes para mostrarlo al usuario
function setDinero() {
  calcularBilletes();
  btn_total.hidden = true;
  monto_input.disabled = true;
  hr.hidden = false;
  dinero_text.hidden = false;
  B50_text.hidden = false;
  B20_text.hidden = false;
  B10_text.hidden = false;
  M5_text.hidden = false;
  M1_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para calcular los billetes
function calcularBilletes() {
  var totalMonto = parseInt(monto_input.value);
  dinero_text.innerHTML = `<span style='color: var(--dark);'>S/${totalMonto}<span>`;
  B50 = Math.floor(totalMonto / 50);
  totalMonto = totalMonto - B50 * 50;
  B20 = Math.floor(totalMonto / 20);
  totalMonto = totalMonto - B20 * 20;
  B10 = Math.floor(totalMonto / 10);
  totalMonto = totalMonto - B10 * 10;
  M5 = Math.floor(totalMonto / 5);
  totalMonto = totalMonto - M5 * 5;
  M1 = Math.floor(totalMonto / 1);
  B50_text.innerHTML = `Billetes de 50: <span>${B50}<span>`;
  B20_text.innerHTML = `Billetes de 20: <span>${B20}<span>`;
  B10_text.innerHTML = `Billetes de 10: <span>${B10}<span>`;
  M5_text.innerHTML = `Monedas de 5: <span>${M5}<span>`;
  M1_text.innerHTML = `Monedas de 1: <span>${M1}<span>`;
  //console.log(B50, B20, B10, M5, M1);
}
//* Funcion para limpiar los input del form
function clearInput() {
  monto_input.value = '0';
  btn_total.hidden = false;
  monto_input.disabled = false;
  dinero_text.hidden = true;
  hr.hidden = true;
  B50_text.hidden = true;
  B20_text.hidden = true;
  B10_text.hidden = true;
  M5_text.hidden = true;
  M1_text.hidden = true;
  btn_clear.hidden = true;
}
