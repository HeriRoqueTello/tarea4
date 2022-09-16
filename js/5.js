/*  
  ! Un alumno desea saber cuál será su calificación final en la materia de Algoritmos.  
  ! Dicha calificación se compone de los siguientes porcentajes:
  ! 55% del promedio de sus tres calificaciones parciales.
  ! 30% de la calificación del examen final. 
  ! 15% de la calificación de un trabajo final
*/
//* Declarar las variables de los inputs
const student = document.getElementById('student');
const unit1_grade1 = document.getElementById('unit1-grade1');
const unit1_grade2 = document.getElementById('unit1-grade2');
const unit1_grade3 = document.getElementById('unit1-grade3');
const examen_final = document.getElementById('examen-final');
const trabajo_final = document.getElementById('trabajo-final');
const unit1_text = document.getElementById('unit1-text');
const final_text = document.getElementById('examen-text');
const trabajo_text = document.getElementById('trabajo-text');
const student_text = document.getElementById('student-text');
const average_text = document.getElementById('units-average-text');
const aprobacion_text = document.getElementById('aprobacion-text');
const btn_average = document.getElementById('average');
const btn_clear = document.getElementById('clear');
//* Funcion para mostrar el resultado al usuario
function setAverage() {
  if (student.value == '') {
    alert('Tienes que llenar el formulario.');
    return false;
  } else {
    var parciales = calcularPromedio(
      parseFloat(unit1_grade1.value),
      parseFloat(unit1_grade2.value),
      parseFloat(unit1_grade3.value)
    );
    var calificacionFinal = parciales * 0.55 + examen_final.value * 0.3 + trabajo_final.value * 0.15;
    unit1_text.textContent = 'Promedio Parciales: ' + parciales.toFixed(1);
    student_text.textContent = 'Alumno: ' + student.value;
    average_text.textContent = 'Promedio Total: ' + calificacionFinal.toFixed(1);
    if (calificacionFinal > 11) {
      aprobacion_text.innerHTML = `<span style='color: #0F0;'>APROBASTE</span>`;
    } else {
      aprobacion_text.innerHTML = `<span style='color: #f00'>DESAPROBASTE</span>`;
    }
    btn_average.hidden = true;
    student.disabled = true;
    unit1_grade1.disabled = true;
    unit1_grade2.disabled = true;
    unit1_grade3.disabled = true;
    trabajo_final.disabled = true;
    examen_final.disabled = true;
    aprobacion_text.hidden = false;
    unit1_text.hidden = false;
    student_text.hidden = false;
    average_text.hidden = false;
    btn_clear.hidden = false;
  }
}
//* Funcion para limpiar los input del form
function clearInput() {
  student.value = '';
  unit1_grade1.value = '0';
  unit1_grade2.value = '0';
  unit1_grade3.value = '0';
  examen_final.value = '0';
  trabajo_final.value = '0';
  btn_average.hidden = false;
  student.disabled = false;
  unit1_grade1.disabled = false;
  unit1_grade2.disabled = false;
  unit1_grade3.disabled = false;
  trabajo_final.disabled = false;
  examen_final.disabled = false;
  aprobacion_text.hidden = true;
  unit1_text.hidden = true;
  student_text.hidden = true;
  average_text.hidden = true;
  btn_clear.hidden = true;
}
//* Funcion para calcular el promedio
function calcularPromedio(nota1, nota2, nota3) {
  var promedio = (nota1 + nota2 + nota3) / 3;
  return promedio;
}
