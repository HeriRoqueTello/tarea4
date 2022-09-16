/*
!  En un hospital existen tres áreas: Ginecología, Pediatría, Traumatología. 
!  El presupuesto anual del hospital se reparte conforme a la sig. tabla:
!    Área:       		% del presupuesto:
!    Ginecología                   		40%
!    Traumatología     		30%
!    Pediatría             		30%
!  Obtener la cantidad de dinero que recibirá cada área, para cualquier monto presupuestal
*/

//* Declarar las variables de los inputs
const presupuesto = document.getElementById('base-salary');
const hr = document.querySelector('hr');
const presupuesto_text = document.getElementById('base-salary-text');
const gine_text = document.getElementById('ginecologia-text');
const trauma_text = document.getElementById('traumatologia-text');
const pedia_text = document.getElementById('pediatria-text');
const btn_total = document.getElementById('total');
const btn_clear = document.getElementById('clear');
///* Funcion para calcular el presupuesto para las areas
function calcularPresupuesto(monto) {
  var ginecologia = monto * 0.4;
  var traumatologia = monto * 0.3;
  var pediatria = monto * 0.3;
  gine_text.textContent = `Presupuesto ginecología(40%): ${ginecologia}`;
  trauma_text.textContent = `Presupuesto traumatología(30%): ${traumatologia}`;
  pedia_text.textContent = `Presupuesto pediatria(30%): ${pediatria}`;
}
//* Funcion para mostrar al usuario
function setPresupuesto() {
  calcularPresupuesto(presupuesto.value);
  presupuesto_text.textContent = `Presupuesto total: ${presupuesto.value}`;
  btn_total.hidden = true;
  presupuesto.disabled = true;
  hr.hidden = false;
  presupuesto_text.hidden = false;
  gine_text.hidden = false;
  trauma_text.hidden = false;
  pedia_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  presupuesto.value = '0';
  btn_total.hidden = false;
  presupuesto.disabled = false;
  hr.hidden = true;
  presupuesto_text.hidden = true;
  gine_text.hidden = true;
  trauma_text.hidden = true;
  pedia_text.hidden = true;
  btn_clear.hidden = true;
}
