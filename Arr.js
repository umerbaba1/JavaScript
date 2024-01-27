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