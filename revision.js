let user={
    name:"saurabh vikas kamane",
    password:"202100",
    age:19,
}
if(user.age>18){
    console.log("user is eligible for voting")
}else{
    console.log("you are not eligible for voting")
}

function users(id,name,password,age){
    this.id=id;
    this.name=name;
    this.password=password;
    this.age=age;
}
let saurabh=new users(1,"saurabh vikas kamane",2021,19)
let karan=new users(2,"karan tanaji phalke",2000,15)
let sameer=new users(3,"sameer vinod kamane",4050,17)


function ageFInder(obj){
    if(obj.age<18){
        return obj.name;
    }
}
let arr=[saurabh,karan,sameer]
let names=[];
let obj={
    saurabh,
    sameer,
    karan
} 
let element;
for(let i=0;i<arr.length;i++){
    element=ageFInder(arr[i])
    names.push(element)
}
console.log(names)

