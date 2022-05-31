//  if statement
const myScore= 80;
let levelComment;
if(myScore>70){
    levelComment ="Congratulations";
};
console.log(levelComment)

// example 2
const myBirthyear = 1998;
let age =2022-myBirthyear;
let nationalId;
if(age>=18){
    nationalId = true;

}
console.log(nationalId)

// else using ternary operator - returns a falsey value
const applicantAge =17;
let applicationStatus;
applicantAge >=18 ? (applicationStatus ='Approve loan'):(applicationStatus='Loan Denied');
console.log(applicationStatus)

