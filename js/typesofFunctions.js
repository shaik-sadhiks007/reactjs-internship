// function ---- it is a reusable code, and it will run when we call it

// 1. named function

function sadhik() {
    console.log('testing')
}

// 2. parameterized function

function addtion(a,b) {

    // let a = 5

    // let b = 10

    console.log(a + b)

}

addtion(5,10)

addtion(20,30)

// 3. anonymous function (a fun without name)

let zVariable = function(a,b) {

    console.log(a * b) 

}

zVariable(5,15)

// 4. arrow functions --- 

let xVariable = () => {
    console.log('testing x variable')
}

xVariable()

// 5. callback function --- a function calling the another function

function division(c,d) {

    console.log(c/d,'divison')

}

function testing() {

    let a = 50

    let b = 10

    division(a,b)


}

testing()


