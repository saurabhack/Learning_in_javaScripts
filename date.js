let mydate=new Date()
console.log(mydate.toString())
let myCreatedDate=new Date(2024,6,5)
console.log(myCreatedDate.toLocaleString())
let mydate2=new Date("2024-05-5")
console.log(mydate2.toLocaleString())
let myTimeStamp=Date.now()
console.log(myTimeStamp)
console.log(mydate2.getTime())
console.log(Math.floor(Date.now()/1000))


let usr={
    name:"saurabh",
    age:"20"
};
function atLeast(anyObject){
    console.log("username is ",anyObject.name,"and  age i",anyObject.age)    
}
atLeast(usr)

function arrayManagement(...arr){
    return arr
}

console.log(arrayManagement([1,2,3,4,5]))
