

// what is a api --- application programming interface 

// which is a mediator , used for communication b/w frontend,  backend

// using fetch function we can communicate


// api ----- types of operation --- read, create , update, delete


// by default ----- js is synchronous (line by line)

// async --- we have to wait to get the data from backend in this function


let a = 5


async function fetchTodos() {


    let response = await fetch('https://jsonplaceholder.typicode.com/todos/')

    // await keyword ---- this is the exact line you have wait for 

    // response data into js obj
    let data = await response.json()
    ///

    // console.log(response,'res')

    console.log(data,'data')

}

fetchTodos()






