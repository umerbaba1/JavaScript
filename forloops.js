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

// JUST DONT PRINT THIS ONE   // in here condition will be alkways true
// for(let y=150;y>100;y++){
//     console.log(y)
// }


 // while loop

// while (o=1,o<=10) {
//     console.log("Umer is greatest of all time")
//     o++
// }

// Do--while loop
let new1=0;  
do {
    console.log("What are you doing");
    new1++;

} while (new1<=10);




















