let first={name:"saurabh",age:19,state:"maharashtra"}
console.log(first.name)
first.age=20
console.log(first)

function person(name,age,state){
    this.name=name
    this.age=age
    this.state=state
    this.nationality="india"
}

let second=new person("saurabh",20,"maharashtra")
console.log(second)
let third=new person("karan",18,"gujarat")
console.log(third)
let fourth=new person("sameer",89,"afganistan")
console.log(fourth)