// functions are also called as methods

// user defined functions
function marriage() {
    console.log("hi sadhik")
}

marriage() // function call

// inbuilt functions in js 

// string functions / methods

let str = "hello world"


// properties --- contains --- non actionable things

// functions ---- actions --- acceleration, 
console.log(str.length,'length')

console.log(str.toUpperCase(),'upper')

console.log(str.toLowerCase(),'lower')

console.log(str.charAt(0),'char at')

// str.slice(startPosition,endingpostion --- excluded)
console.log(str.slice(0,5),'slice')

console.log(str.includes(" hello"),'includes')


let str1 = '         sadhik              '

// trim will remove the spaces on start and end , not in between 
console.log(str.trim(),'trim')


// indexOf will give first match position
console.log(str.indexOf('l'),'L pos start')

console.log(str.lastIndexOf('l'),'L pos last')

// substring won't accept the negative values but slice will do ?
console.log(str.substring(0,5),'substr')

console.log(str.slice(-1),'negative indexing in the slice')

console.log(str.substring(-1),'negative indexing in the substring')


let str3 = 'shaik'

let str4 = " sadhik"



// 1. add the strings
console.log(str3 + " " + str4)

// 2. concat

console.log(str3.concat(str4),'concat')

// 3. string literals

console.log(`${str3} ${str4} is a person`)

console.log("str3 str4 is a person")


/// number methods

let num = 10.999

console.log(num.toFixed(1),"to fixed")

console.log(Math.round(num),"round")

console.log(Math.ceil(num),'ceil')

console.log(Math.floor(num),'floor')

// random value from 0 to 1


// 0 - 6

console.log(Math.ceil(6 * Math.random()),"random")

console.log(Math.max(2,1,4),'max')

console.log(Math.min(2,1,4),'min')

// objects --- 

let car = {

    name : 'bmw',
    year : 2025

}

console.log(Object.keys(car),'keys')

console.log(Object.values(car),'keys')


// array methods

let arr = ['bmw',"tesla",'tata']

// push --- to add in the end

arr.push("range rover")

// unshift --- to add in the starting

arr.unshift("first")

// pop --- to delete the end position

arr.pop()

// shift --- to delete the first value

arr.shift()




console.log(arr,'array')





















