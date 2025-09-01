

let todos = []

async function fetchTodos(a, b, c) {

    // fetch is a function which initial the api call
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/")

    // status from 200 - 299 --- successful

    // 400 - 499 --- failure

    // 500 -599 --- backend failure

    // console.log(res,'res')

    console.log('3')

    // to retrive the data from the res we are using the res.json()
    let data = await res.json()

    todos = data

    console.log(data, 'data')

}

// fetchTodos()


function multiply(a, b) {

    let op = a * b
    output(op)

    // console.log(a*b,'op')
}

function output(op) {

    console.log(op, 'op')

}
// multiply(2,3)

// syntax

class Book {

    // constructor is function which run while obj creation by default
    constructor(noofpages, author) {

        this.noofpages = noofpages

        this.author = author

        console.log('cu running')

    }



    typeofbook() {
        console.log(`${this.author} has ${this.noofpages}`)
    }

}

// obj creation ---- class call
let b = new Book(100, 'sadhik')

console.log(b.typeofbook(), 'b')


class Animal {
    constructor(name, gender) {
        this.animalname = name

        this.animalgender = gender
    }

    walk() {
        console.log(`${this.animalname} is walking`)
    }

    climb() {
        console.log(`${this.animalname} is climbing`)

    }
}

let a = new Animal('lion','male')

console.log(a.climb())







