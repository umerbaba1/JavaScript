// for in loop
let name={
    umer:98,
    kounsain:99,
    wasif:100,
    x:500
}
let result=Object.values(name)
let answer=Object.keys(name)
console.log(result, answer)
for (const key in name) {
    console.log(key+" has scored "+name[key])
    
}
//for of loop
for (const iterator of "umer is good") {
    console.log(iterator)
    
}