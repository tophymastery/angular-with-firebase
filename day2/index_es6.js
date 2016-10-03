const add = (x, y) => {
    const result = x + y
    return result
}

// ================

const obj = {
    a: 10,
    b: 20,
    sum () {
        return this.a + this.b
    }
}

function Person (name) {
    this.name = name
    this.talk = function () {
        console.log('Hi in, ' + this.name)
    }
}

console.log(add(3, 5))
console.log(obj.sum())

Person.prototype.talk = function () {
        console.log('Hi, ' + this.name)
}

const tophy = new Person('tophy')
tophy.talk()

// ================

console.log(' ===== ')
class Animal {
    constructor (name) {
        this.name = name
    }

    talk () {
        console.log('...')
    }

    hi () {
        console.log('H, ' + this.name)
    }
}

class Cat extends Animal {
    constructor (name, age) {
        super(name)
        this.age = age
    }

    talk () {
        console.log(' Cat ' + this.age)
    }
}

const ani = new Animal('animal')
const cat = new Cat('animal', 3)

console.log(ani.talk())
console.log(cat.talk())

// =============
console.log(' ===== ')

const obj2 = {
    name: 'tophy',
    score: 5,
    rating: 3
}

const { name2, score2 } = obj2

const name = obj2.name
const score = obj2.score

console.log(name + ' ' + score)
console.log(name2 + ' ' + score2)

const messages = [
    '1',
    '2',
    '3',
    '4'
]

const [ first, ...last ] = messages
console.log(first)
console.log(last)

// =============
console.log(' ===== ')
const obj3 = {
    name: 'a',
    email: 'tophy@gmail.com'
}

console.log(obj3)

const newObj = obj3
newObj.id = 10

console.log(obj3)
console.log(newObj)

const newObj2 = {
    ...obj3,
    id: 10
}

console.log("newObj2")
console.log(newObj2)

// =============
console.log(' ===== ')
