

// loops types ----

// 1. for loops

// 2. foreach loops

// 3. map loops

// 4. filter

// 5. find

let arr = ['sadhik', 'bhaumik', 'mohammad', "Naveen", "Akash"]

// console.log(arr.length, 'length')
// console.log(arr[0],'arr')

// console.log(arr[1],'arr')

// console.log(arr[2],'arr')

// console.log(arr[3],'arr')

// for(let i=0; i < arr.length; i++) {

//     console.log(arr[i],'arr')

// }

// using foreach loop : array retrive

// syntax : 

// arr.forEach(

//     (ele, index ) => {

//         console.log(ele,index,'arr foreach')
//     }
// )


let arr2 = [10,20,30,40] 

// foreach is used for to retrive the data not to manipulate the data and storing it 

// let output = arr2.forEach(

//     (ele,index) => {
//         // console.log(ele,index,'arr2')

//        return ele * 2
//     }

// )

// console.log(output,'op')



// map is used for to retrive the data not to manipulate the data and storing it 


// using map function we can store the updated array in another variable
// let output1 = arr2.map(

//     (ele,index) => {
//         // console.log(ele,index,'arr2')

//        return ele * 2
//     }

// )

// console.log(output1,'op1')


let filteredData = arr2.map(

    (ele,index) => {
        if(ele > 20){

            return ele

        }

        return 0
    }
)

console.log(filteredData,'filtereddata')

// to filter the data i have to use the if condition in the map, 
// instead of that i can use filter and i will directly give the if condition in the return keyword

let fildata = arr2.filter(
    (ele,index) => {
        return ele > 20
    }
)

console.log(fildata,'fildata')


// find is similar to filter, but find will give one result , 
// but filter will give the all the results which satisfy the condition

let finddata = arr2.find(
    (ele,index) => ele > 20

)

console.log(finddata,'finddata')




