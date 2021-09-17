// Напиши скрипт создания и очистки коллекции элементов.Пользователь
// вводит количество элементов в input и нажимает кнопку Создать,
// после чего рендерится коллекция.При нажатии на кнопку Очистить,
// коллекция элементов очищается.

// Создай функцию createBoxes(amount), которая принимает 1 параметр amount - число.
// Функция создает столько div, сколько указано в amount и добавляет их в div#boxes.

// Каждый созданный div:

// Имеет случайный rgb цвет фона
// Размеры самого первого div - 30px на 30px
// Каждый следующий div после первого, должен быть шире и выше предыдущего на 10px
// Создай функцию destroyBoxes(), которая очищает div#boxes.

const renderBtnref = document.querySelector('[data-action="render"]')
const destroyBtnRef = document.querySelector('[data-action="destroy"]')
const amountBoxRef = document.querySelector('#controls > input')

function render() {
  let currentBoxWidth = 30
  const arrNewBox = []
  for (let i = 0; i < amountBoxRef.valueAsNumber; i += 1) {
    const newBox = document.createElement('div')
    newBox.setAttribute('id', `box-${i + 1}`)
    newBox.style.backgroundColor = generateColorRGB()
    newBox.style.width = `${currentBoxWidth}px`
    newBox.style.height = `${currentBoxWidth}px`

    arrNewBox.push(newBox)
    currentBoxWidth += 10
  }
  document.querySelector('#boxes').append(...arrNewBox)
}

function destroy() {
  const boxesRef = document.querySelector('#boxes')
  boxesRef.innerHTML = ''
}

function generateColorRGB() {
  return `rgb(${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)},
            ${Math.round(Math.random() * 255)})`
}

renderBtnref.addEventListener('click', render)

destroyBtnRef.addEventListener('click', destroy)
