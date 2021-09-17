// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

const nameInputref = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

function setNameOutput() {
  const curentTargetValue = event.currentTarget.value
  if (curentTargetValue === '') {
    nameOutput.textContent = 'незнакомец'
  } else {
    nameOutput.textContent = curentTargetValue
  }
}

nameInputref.addEventListener('blur', setNameOutput)
