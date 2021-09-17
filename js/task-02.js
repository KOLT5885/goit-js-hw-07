// Напиши скрипт, который для каждого элемента массива ingredients
// создаст отдельный li, после чего вставит все li за одну операцию
// в список ul.ingredients.Для создания DOM - узлов используй
// document.createElement().

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
]

const newLiRef = []

ingredients.forEach((item) => {
  const liRef = document.createElement('li')
  liRef.textContent = item
  newLiRef.push(liRef)
})

document.querySelector('#ingredients').append(...newLiRef)
