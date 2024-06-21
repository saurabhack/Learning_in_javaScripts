let promise=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task is completed")
        resolve()
    },1000)
})
promise.then(function(){
    console.log("promise consum");
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("task 2")
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consume")

})


let promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({ name:"saurabh vikas kamane", email:"kamanesaurabh68@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user)
})

let promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false
        if(!error){
            resolve({username:"saurabh kamane",password:123})
        }else{
            reject("Error:something went wrong")
        }
    },1000)
})
promiseFour.then(function(user){
    console.log(user)
    return user.password
}).then(function(password){
    console.log(password)
}).catch(function(error){
    console.log(error)
}).finally(function(){
    console.log("may be your system is crashed")
})

let promiseFive=new Promise(function(resolve,reject){
    let error=true
    if(!error){
        resolve({name:"javascript programming",class:19})
    }else{
        reject("something went wrong in your code")
    }
})

async function promiseConsume(){
    try{
         let response= await promiseFive
         console.log(response)
    }catch(error){
        console.log(error)
    }
} 

promiseConsume()

/*async function getAllUsers(){
    try{
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    
    const data= await response.json()
    console.log(data)
    }catch(error){
        console.log("E:",error)
    }
}
getAllUsers()*/

fetch('https://jsonplaceholder.typicode.com/users')
.then(function(response){
    return response.json()
})
.then(function(data){
    console.log(data)
}).catch(function(error){
    console.log(error)
})

