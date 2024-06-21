function is_array(as){
    let type=typeof(as)
    if(type=="object"){
        return true
    }
}

let arr=[1,2,3,4,5]
let ans=is_array(arr)
if(!ans){
 console.log("this is not array")
}else{
    console.log("this is array")
}