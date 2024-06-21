let s="sAuRaBh"
let same=s.toUpperCase()
let sample=" "
for(let i=0;i<s.length;i++){
    if(same.charAt(i)==s.charAt(i)){
        sample+=s.charAt(i).toLowerCase()
    }else{
        sample+=s.charAt(i).toUpperCase()
    }
}

