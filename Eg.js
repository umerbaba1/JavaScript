// To print thge average of number
// let student_marks =[85,97,44,37,76,60]
// let no =student_marks.length

// let result=0;
// for (const val of student_marks) {
//     result+=parseFloat(val)
// }
// console.log(result/no)

//  New example // Imade
// let items=[250,645,300,900,50]
// let res;
// let neres;
// let  discount=10/100;
// for (const cos of items) {
//     res=cos*discount
//     neres=cos-res
//     console.log(neres)
    
// }
//  Apma college
// let nam=[250,645,300,900,50]
// let i=0;

// for (const inter of nam) {
//     let offer = inter/10
//     nam[i]=nam[i]-offer
//    console.log(`The value after discount is ${nam[i]}`)
// }
// extra thing
//  let umere=[87,90,89,100]
//  let a =umere[2]
//  console.log(a)



//
 let umer = [100, 200, 300, 1000];
for (let i = 1; i <umer.length; i++) {
  let discount = umer[i] * 0.1;
  umer[i] = umer[i] - discount;
  console.log(umer[i]);
}
console.log(umer)