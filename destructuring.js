//array destructuring
let arr=["saurabh","vikas","kamane"]
let x;
let y;
[x,y]=["saurabh","kamane"]
console.log(x)
console.log(y)
//object destructuring
let z;
let a;
({z,a}={z:"saurabh",a:"kamane"})
console.log(z)
console.log(a)

//destructuring in array
let b;
let c;
let d;
[b,c,...d]=[11,20,30,40,50]
console.log(b)
console.log(c)
console.log(d)

//destructuring in object
let e;
let f;
let g;
({e,f,...g}={e:10,f:20,h:30,i:40})
console.log(e)
console.log(f)
console.log(g)

//another object

let object={
    name:"saurabh",
    age:20,
    marks:{
        maths:90,
        statistics:99,
        computer:89,
        english:70
    },
    favor:{
        topic:"marathi"
    }
}

console.log(object)
console.log(object.marks)
console.log(object.favor.topic)