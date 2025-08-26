
// duplicates in the string

let str = 'hello world';

// str to array

let arr = str.split('');

let duplicates = []

console.log(arr,'arr')

console.log(str.indexOf('w') ) // first occurence position

console.log(str.lastIndexOf('w') ) // last occurence postion

for(let i = 0; i<arr.length; i++) {


    if(str.indexOf(arr[i]) != str.lastIndexOf(arr[i])) {

        // console.log(arr[i])
        duplicates.push(arr[i])

    }


}

// console.log(duplicates,'dup')


// reverse a str

let str1 = 'sadhik'

// split('') is used to convert the str into arr
let arr1 = str1.split('')

// join('') is used to convert the arr to str
console.log(arr1.reverse().join(''))


// highest in array

let arr3 = [3,2,4,6]

// console.log(arr3.sort())

// spread operators (using ...) ---- it will give the inside of anything
console.log(Math.max(arr3),'h1')

console.log(Math.max(3,2,4,6),'h2')

console.log(Math.max(...arr3),'h3')


let arr4 = [1,2,3,4,5]

arr4.splice(4,1,77,22)

console.log(arr4)