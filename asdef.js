function factorial(num){
    return num*num
}

let arr=[1,2,3,4,5,6,7]
let ans=arr.map(factorial)
console.log(ans)

function fact(a,b){
    return a=a*b
}
arr=[1,2,3,4,5]
let a=arr.reduce(fact)
console.log(a)


function management(name){
    if(name=="saurabh"){
        return name
    }
}
arr=["saurabh","sameer","samadhan"]
let x=arr.filter(management)
console.log(x)