// Напиши скрипт, который бы при потере фокуса на инпуте, проверял его
// содержимое на правильное количество символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество, то border инпута становится зеленым,
// если неправильное - красным.
// Для добавления стилей, используй CSS-классы valid и invalid.

const validationInputRef = document.getElementById('validation-input')

function takeClassByLength() {
  const curentTarget = event.currentTarget
  const dataLengthAttribut = Number(curentTarget.getAttribute('data-length'))
  if (curentTarget.value.length === dataLengthAttribut) {
    curentTarget.classList.remove('invalid')
    curentTarget.classList.add('valid')
  } else {
    curentTarget.classList.add('invalid')
    curentTarget.classList.remove('valid')
  }
}

validationInputRef.addEventListener('blur', takeClassByLength)
