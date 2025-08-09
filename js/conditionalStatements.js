
// conditional statements ---- based on the condition, output will changed;

// ---- if ur > 18, u can able to vote, if not 'don't have any rights to vote 

// syntax : 

// if(condtion ---- true only ) {

//     // set of code

// } else if (condition ---- true only) {

// }

// else {
//     // set of code
// }

let age = 18

if (age >= 18) {
    console.log('u r eligible to vote')
} else {
    console.log('u r minor')
}


let marks = 20;

let grade = null

if (marks >= 80) {
    console.log('A grade')
    grade = 'A'
} else if (marks >= 50) {
    console.log('B grade')

    grade = 'B'

} else if (marks >= 35) {
    console.log("c grade")
    grade = 'C'

} else {
    console.log("f grade")
    grade = 'f'

}

console.log(grade,'this is grade')

// ternary operators ---- if else in the single line

// syntax

// (condition) ? if code : else code

let age1 = 50

let op = (age1 > 18) ? "vote" : 'not to vote'

console.log(op, 'op')



