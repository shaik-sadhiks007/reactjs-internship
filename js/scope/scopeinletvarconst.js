
// var ----- declare a variable, update the variable, reassign the variable

// let ----- declare a variable, update the variable

// const ----- declare a variable,

// ---------------------------------------------------

// var ---- functional scope 

// let and const --- block scope


function username() {

    if (true) {

        var a = 5

        let b = 10

        const c = 15

        // console.log(a, 'a')

        // console.log(b, 'b')

        // console.log(c, 'c')

    }

    console.log(a, 'a')

    console.log(b, 'b')

    // console.log(c, 'c')

}

username()


