//* Declarar las variables de los inputs
const velocidad = document.getElementById('velocidad');
const hr = document.querySelector('hr');
const velocidad_text = document.getElementById('velocidad-text');
const result_text = document.getElementById('result-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
//* Funcion para convertir la velocidad
function convertirVelocidad(velocidad) {
  kmH = velocidad * 3.6;
  return kmH;
}
//* Funcion para mostrar al usuario
function setVelocidad() {
  velocidad_text.innerHTML = `Velocidad<span style='text-transform: lowercase;'>(m/s)</span>: ${velocidad.value}`;
  result_text.innerHTML = `Velocidad<span style='text-transform: lowercase;'>(kmH)</span>: ${convertirVelocidad(
    parseInt(velocidad.value)
  )}`;
  btn_total.hidden = true;
  velocidad.disabled = true;
  hr.hidden = false;
  velocidad_text.hidden = false;
  result_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  velocidad.value = '0';
  btn_total.hidden = false;
  velocidad.disabled = false;
  hr.hidden = true;
  velocidad_text.hidden = true;
  result_text.hidden = true;
  btn_clear.hidden = true;
}
