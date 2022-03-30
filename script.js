//JavaScript Document

//const person = {}
const person = new Object({
  name: 'Maximus',
  age: 25,
  greet: function () {
    console.log('Greet!')
  },
})
Object.prototype.sayHello = function () {
  console.log('Hello!')
}
Math.E
