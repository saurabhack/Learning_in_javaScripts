let ask= new Promise(function(resolve,reject){
    let rate=100
    if(rate>=200){
        resolve();
    }else{
        reject();
    }
})
ask.then(function(){
    console.log("you are not able to buy these product")
}).catch(function(){
    console.log("you are not able to buy these product")
})