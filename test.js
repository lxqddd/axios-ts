class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    return `Hello, my name is ${this.name}`
  }
}

const p = new Person('John')

console.log(p)

const propto = Object.getPrototypeOf(p)

console.log(propto)

for (let k in p) {
  console.log(k)
}
