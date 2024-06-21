
let promise=new Promise(setTimeout(function(resolve,reject){
    let age=10
    if(age>=18){
        resolve("yess you are eligible for voting")
    }else{
        reject("you are not eligible for voting")
    }
}),1000)
promise.then(function(successHandler){
    console.log(successHandler)
}).catch(function(error){
    console.log(error)
})