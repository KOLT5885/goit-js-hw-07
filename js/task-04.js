// Счетчик состоит из спана и кнопок, которые должны увеличивать
// и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса

let counterValue = 0
const btnForIncrement = document.querySelector(
  '#counter button[data-action="increment"]',
)
const btnForDecrement = document.querySelector(
  '#counter button[data-action="decrement"]',
)

function setCounterValue() {
  document.getElementById('value').textContent = counterValue
}

function increment() {
  counterValue += 1
  setCounterValue()
}

function decrement() {
  counterValue -= 1
  setCounterValue()
}

btnForIncrement.addEventListener('click', increment)
btnForDecrement.addEventListener('click', decrement)
