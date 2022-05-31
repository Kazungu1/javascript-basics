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

// const friendAge = 28;
// // let isAdult;
// // friendAge >18 ? (isAdult ="ID approved"):(isAdult ="ID Denied");
// isAdult = friendAge >=18 ? true : false;
// console.log(isAdult)

// else  if statement-check multiple conditions
const validAge = 11;
let isAdult,canWork , canEnlist ,canDrink;
if (validAge >=21){
    canWork = true;
    canEnlist = true;
    isAdult = true;
    canDrink = true;
} else if (validAge<=18){
    canWork = true;
    canEnlist = true;
    isAdult = true;

} else if (validAge >=16){
    canWork = true;
}
console.log(canDrink);
console.log(canEnlist);
console.log(canWork);
console.log(isAdult);
