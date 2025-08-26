
let n = 'b'

let vowels = ['a','e',"i", "o", "u" ]

if(vowels.includes(n)) {
    console.log('it is a vowel')
} else{
    console.log('it is a consonant')
}


// ---------------------


let eventcount = 0
let oddcount = 0

for(let i = 1; i<10; i++) {

    if(i%2 == 0) {
        eventcount++
    } else {
        oddcount++
    }

}

console.log(oddcount,'odd')
console.log(eventcount,'even')


let str = 'hello'

let arr = str.split('')

let count = 0

let target = 'l'


for(let i =0; i<arr.length; i++) {

    if( arr[i] == target) {
        count++
    }

}

console.log(count,'count of L')


// large number in array

let arr1 = [1,3,5,2,4]

let largeNum = arr1[0] //--- consider first one as largest number

for(let i =0; i < arr1.length; i++) {

    if(arr1[i] > largeNum) {

        largeNum = arr1[i]

    }

}

console.log(largeNum,'largest number')








