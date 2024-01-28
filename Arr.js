let array=[56,98,90,98]   ///  Strings are immutable while  array are mutable
console.log(array)
console.log(array.length)  // property

console.log(typeof array)

let family_member=["Nighat ara","Shabbir  Ahmad", "Assadullah Tarfarosh","Wasif baba"]
console.log(family_member)
console.log(family_member.length)

// to print the array indices
console.log(array[2])
console.log(family_member[2])

// to change the value in array -- marks
array[2]=34;
console.log(array)
;
// strings changed
// family_member[0]="Umer"
// console.log(family_member)

//loop in array if i have to print individual  name in stringa in array loops are iterable
// array length lastindx+1

for(let  idx=0;idx<family_member.length;idx++){
    console.log(family_member[idx])
}

//for of loop
// for (const iterator of family_member) {
//     console.log(iterator)
// }

// print cities in upper case in array
let cities=["rajbagh","srinagar","lal chowkh", "badgam"]
for (const city of cities) {
    console.log(city.toUpperCase());
    
}

// POP,PUSH,toString
// array can be change or changed in array

let loe=["Umer","Kounsain","Arsheda","Latham"]
loe.push("Assadullah","Trench")// push
let res=loe.push("nighta")
console.log(loe)

//pop
let o=["umer ","loop","virat","rohit sharma"]
let rees=o.pop()
console.log(o)
console.log("The deleted variable is ",rees)

// to string 
console.log(o.toString())

//to join mutiple array
console.log(o.concat(loe,cities))
//or
let joined=o.concat(loe,cities)
console.log(joined)

//to add the indixes in array

let superHeros=["Spiderman","Shaktiman","Krishna"]
superHeros.unshift("Antman")
console.log(superHeros)

//to remove the indixes in array
let del=superHeros.shift("")
console.log(`The deleted val is${del}`)
console.log(superHeros)
//SLICE
let slie=superHeros.slice(0,2)
console.log(slie)

//splice
let familyMember=["Umer","Kounsain","Wasif","John","Alvarez"]
var splic=familyMember.splice(1,0,"Ara")
console.log(familyMember)
var splic=familyMember.splice(1,1,"Tar")
console.log(familyMember)

//Example
let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
let dele=companies.shift()
let change=companies.splice(1,1,"OLA")
let neew=companies.push("Amazon")
console.log(companies)

