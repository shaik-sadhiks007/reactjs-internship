// what is a scope in js ? ---- variables within border


// 1. global scope --- (central govt rules)

// 2. function scope ---- (it is applicable within the function (state rules))

// 3. block scope ----

// 4. lexical scope ----


// 1. global scope ---- variable declared in the out of functions and blocks

// let a = 5;

// function username() {
//     console.log(a, "in function")
// }

// username()

// // if-block, for block

// if (true) {
//     console.log(a,'in block')
// }



// 2. functional scope


// function username() {
//     let b = 10
//     console.log(b, "b in function")
// }

// username()

// console.log(b,'b outside function')

// // if-block, for block

// if (true) {
//     console.log(b,' b in block')
// }


// 3. block scope

// if-block, for block

// if (true) {
//     let c = 20
//     console.log(c, ' c in block')
// }


// function username() {
//     console.log(c, "c in function")
// }

// username()

// console.log(c, 'c outside function')

// 4. lexical scope --- nested function (a function has another function)

function outerFunction() {

    let d = 50;

    function innerFuntion() {
        console.log(d, 'd inside of inner function')
    }

    innerFuntion()
}

outerFunction()