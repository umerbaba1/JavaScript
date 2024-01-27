// To print thge average of number
let student_marks =[85,97,44,37,76,60]
let no =student_marks.length

let result=0;
for (const val of student_marks) {
    result+=parseFloat(val)
}
console.log(result/no)

