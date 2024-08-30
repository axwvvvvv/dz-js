// const text = document.createElement('p')

// const  qu1 = prompt('ссылку а картинку')
// const  qu2 = prompt('введите имя')
// const  qu3 = prompt('введите фамилия')
// const  qu4 = prompt('введите возраст')


// text.innerText = qu1


// const body = document.querySelector('body')

// body.append(text)



const  qu1 = prompt('введите ссылку на 1 картинку')
const  qu11 = prompt('введите ссылку на 2 картинку')
const  qu2 = prompt('введите имя')
const  qu3 = prompt('введите фамилия')
const  qu4 = prompt('введите возраст')


const box = document.createElement('div')
const photo1 = document.createElement('img')
const photo2 = document.createElement('img')

const name = document.createElement('h1')
const surname = document.createElement('h2')
const age = document.createElement('h3')

const button1 = document.createElement('button')
const button2 = document.createElement('button')


const body = document.querySelector('body')

photo1.src = qu1
photo2.src = qu11
name.innerText = qu2
surname.innerText = qu3
age.innerText = qu4

button1.innerText = 'yes'
button2.innerText = 'no'


box.append(photo1)
box.append(photo2)
box.append(name)
box.append(surname)
box.append(age)
box.append(button1)
box.append(button2)


box.classList = 'box'
photo1.style.width = '100px'
photo2.style.width = '100px'
box.style.border = '1px solid black'
box.style.width = '200px'
box.style.margin = '0 auto'



body.append(box)

