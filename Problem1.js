// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

let name= "Amolya Sharma"


let ans= {}

for(let ch of name){
    // skip space
    if(ch==' ')continue;
    
    let val = ch.toLowerCase()
    
    if(ans[val])
    ans[val]++
    else ans[val]=1;
}

console.log(ans)
