/*
 Dada las horas trabajadas de una persona y la tarifa de pago por hora, calcular su salario y escribirla. 
 y los valores porcentuales a su salario en 10%, 30%, 60% y 80%
*/

//* Declarar las variables de los inputs
const employee = document.getElementById('employee');
const hours = document.getElementById('hours');
const rate = document.getElementById('rate');
const hr = document.querySelector('hr');
const employee_text = document.getElementById('employee-text');
const salary_text = document.getElementById('salary-text');
const salary_10_text = document.getElementById('salary-10-text');
const salary_30_text = document.getElementById('salary-30-text');
const salary_60_text = document.getElementById('salary-60-text');
const salary_80_text = document.getElementById('salary-80-text');
const btn_salary = document.getElementById('salary');
const btn_clear = document.getElementById('clear');
//* Funcion para mostrar el resultado al usuario
function setSalary() {
  calcularSalario();
  btn_salary.hidden = true;
  employee.disabled = true;
  hours.disabled = true;
  rate.disabled = true;
  hr.hidden = false;
  employee_text.hidden = false;
  salary_text.hidden = false;
  salary_80_text.hidden = false;
  salary_60_text.hidden = false;
  salary_30_text.hidden = false;
  salary_10_text.hidden = false;
  btn_clear.hidden = false;
}
//* Funcion para limpiar los input del form
function clearInput() {
  employee.value = '';
  hours.value = '';
  rate.value = '';
  btn_salary.hidden = false;
  employee.disabled = false;
  hours.disabled = false;
  rate.disabled = false;
  hr.hidden = true;
  employee_text.hidden = true;
  salary_text.hidden = true;
  salary_10_text.hidden = true;
  salary_30_text.hidden = true;
  salary_60_text.hidden = true;
  salary_80_text.hidden = true;
  btn_clear.hidden = true;
}
function calcularSalario() {
  var salary = parseInt(hours.value) * parseFloat(rate.value);
  var salary_80 = salary * 0.8;
  var salary_60 = salary * 0.6;
  var salary_30 = salary * 0.3;
  var salary_10 = salary * 0.1;
  //console.log(hours.value, rate.value, salary);
  employee_text.textContent = 'Empleado: ' + employee.value;
  salary_text.textContent = 'Salario: S/' + salary.toFixed(2);
  salary_80_text.textContent = 'Salario(80%): S/' + salary_80.toFixed(2);
  salary_60_text.textContent = 'Salario(60%): S/' + salary_60.toFixed(2);
  salary_30_text.textContent = 'Salario(30%): S/' + salary_30.toFixed(2);
  salary_10_text.textContent = 'Salario(10%): S/' + salary_10.toFixed(2);
}
