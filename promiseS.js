let promise=new Promise(function(resolve,reject){
    let age=10
    if(age>=18){
        resolve()
    }else{
        reject()
    }
})
promise.then(function(){
    console.log("you are eligible for voting")
}).catch(function(){
    console.log("you are not eligible for voting")
});
