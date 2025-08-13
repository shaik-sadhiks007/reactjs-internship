// js is a interpreter (which runs line by line, if u got the error , then other lines wont run)

console.log('hi sadhik')

// error handling ---- we will write the code in the try and catch block


try {
    // in the try block , 
    // we will write the code which has probability to get error

    let username = "sadhik"

    console.log(username, 'username')

    console.log(age,'age')


} catch (error) {
    console.log('username variable giving the error', error.message)
}


console.log('how r u ?')