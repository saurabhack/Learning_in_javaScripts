let promise=new Promise(function(resolve,reject){
    let error=false
    if(!error){
        resolve("you have entered successfully")
    }else{
        reject("something went wrong !")
    }

})
promise.then(function(successHandler){
    console.log(successHandler)
}).catch(function(error){
    console.log(error)
})