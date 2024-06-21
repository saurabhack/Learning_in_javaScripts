let name="saurabh"
let arr=new Array()
for(let i=0;i<name.length;i++){
    arr.push(name[i])
}
let arr2=new Array()
let size=arr.length
for(let i=0;i<size;i++){
    let element=arr.pop()
    arr2.push(element)
}
let reverse=" "
for(let i=0;i<size;i++){
    reverse+=arr2[i]
}
console.log(reverse)