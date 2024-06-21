let arr=[1,2,3,4,5]
let size=arr.length
let number=5
let counter=-1
for(let i =0; i<size;i++){
    if(number==arr[i]){
        counter=i
        break
    }
}
if(counter != -1){
    console.log("number is exist at the index of "+counter)
}else{
    console.log("number is not exists ")
}