// Напиши скрипт который, при наборе текста в инпуте
// input#name - input(событие input), подставляет его текущее значение
// в span#name - output.Если инпут пустой, в спане должна отображаться
// строка 'незнакомец'.

const nameInputref = document.getElementById('name-input')
const nameOutput = document.getElementById('name-output')

function setNameOutput() {
  const curentTargetValue = event.currentTarget.value
  curentTargetValue === ''
    ? (nameOutput.textContent = 'незнакомец')
    : (nameOutput.textContent = curentTargetValue)
}

nameInputref.addEventListener('blur', setNameOutput)
