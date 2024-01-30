let array=[56,98,90,98]   ///  Strings are immutable while  array are mutable
console.log(array)
console.log(array.length)  // property

console.log(typeof array)

let family_memeber=["Nighat ara","Shabbir  Ahmad", "Assadullah Tarfarosh","Wasif baba"]
console.log(family_memeber)
console.log(family_memeber.length)

// to print the array indices
// console.log(array[2])
// console.log(family_membeer[2])

// to change the value in array -- marks
array[2]=34;
console.log(array)
;
// strings changed
// family_member[0]="Umer"
// console.log(family_member)

//loop in array if i have to print individual  name in stringa in array loops are iterable
// array length lastindx+1

// for(let  idx=0;idx<family_member.length;idx++){
//     console.log(family_member[idx])
// }

//for of loop
// for (const iterator of family_member) {
//     console.log(iterator)
// }

// print cities in upper case in array
// let cities=["rajbagh","srinagar","lal chowkh", "badgam"]
// for (const city of cities) {
//     console.log(city.toUpperCase());
    
// }

// POP,PUSH,toString
// array can be change or changed in array

let loee=["Umer","Kounsain","Arsheda","Latham"]
loee.push("Assadullah","Trench")// push
let ress=loee.push("nighta")
console.log(loee)

//pop
let oo=["umer ","loop","virat","rohit sharma"]
let reees=oo.pop()
console.log(oo)
console.log("The deleted variable is ",reees)

// to string 
// console.log(o.toString())

//to join mutiple array
// console.log(o.concat(loe,cities))
// //or
// let joined=o.concat(loe,cities)
// console.log(joined)

//to add the indixes in array

let supereHeros=["Spiderman","Shaktiman","Krishna"]
supereHeros.unshift("Antman")
console.log (supereHeros)

// to remove the indixes in array
// let deel=superHeros.shift("")
// console.log(`The deleted val is${deel}`)
// console.log(superHeros)
//SLICE
// let sliie=superHeros.slice(0,2)
// console.log(sliie)

//splice
// let familyyMember=["Umer","Kounsain","Wasif","John","Alvarez"]
// var splic=familyyMember.splice(1,0,"Ara")
// console.log(familyyMember)
// var splic=familyyMember.splice(1,1,"Tar")
// console.log(familyyMember)

//Example
let opam=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"]
let delee=opam.shift()
let channge=opam.splice(1,1,"OLA")
let neeew=opam.push("Amazon");
console.log(opam)