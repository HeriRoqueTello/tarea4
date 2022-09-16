/* A un profesor le pagan según sus horas y una tarifa de pago por horas. 
  Si la cantidad de horas trabajadas es mayor a 40 horas, 
  la tarifa se incrementa en un 50 % para las horas extras. 
  Calcular el salario del profesor dadas las horas trabajadas y la tarifa
 */
//* Declarar las variables de los inputs
const employee = document.getElementById('employee');
const hours = document.getElementById('hours');
const rate = document.getElementById('rate');
const hr = document.querySelector('hr');
const employee_text = document.getElementById('employee-text');
const hrs_text = document.getElementById('hrs-text');
const rate_text = document.getElementById('rate-text');
const bonus_text = document.getElementById('bonus-text');
const salary_text = document.getElementById('salary-text');
const btn_salary = document.getElementById('salary');
const btn_clear = document.getElementById('clear');
//* Funcion para calcular el salario y mostrarlo al usuario
function setSalary() {
  var bonus = addBonus();
  var salary = parseInt(hours.value) * parseFloat(rate.value) + bonus;
  console.log(hours.value, rate.value, salary);
  employee_text.textContent = 'Docente: ' + employee.value;
  hrs_text.textContent = 'Horas: ' + hours.value;
  rate_text.textContent = 'Tarifa por hora: S/' + rate.value;
  if (addBonus() != 0) {
    bonus_text.textContent = 'Bonus por horas extras: S/' + bonus;
  }
  salary_text.textContent = 'Salario Total: S/' + salary;
  bonus_text.hidden = false;
  btn_salary.hidden = true;
  employee.disabled = true;
  hours.disabled = true;
  rate.disabled = true;
  hr.hidden = false;
  employee_text.hidden = false;
  hrs_text.hidden = false;
  rate_text.hidden = false;
  salary_text.hidden = false;
  btn_clear.hidden = false;
}
function addBonus() {
  var hrs = parseInt(hours.value);
  var rates = parseFloat(rate.value);
  if (hrs > 40) {
    extra_hrs = hrs - 40;
    rate_increment = rates * 0.5;
    return extra_hrs * rate_increment;
  } else {
    bonus_text.textContent = 'Empleado sin horas extras';
    return 0;
  }
}
//* Funcion para limpiar los input del form
function clearInput() {
  employee.value = '';
  hours.value = '0';
  rate.value = '0';
  btn_salary.hidden = false;
  employee.disabled = false;
  hours.disabled = false;
  rate.disabled = false;
  hr.hidden = true;
  employee_text.hidden = true;
  hrs_text.hidden = true;
  rate_text.hidden = true;
  bonus_text.hidden = true;
  salary_text.hidden = true;
  btn_clear.hidden = true;
}
