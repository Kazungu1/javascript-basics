// arrays
// creating a new array
const friendsAge = [23,22,24,21,19,20];

// array of different data types and nested arrays
const myArray = ['sam','grevians',true,23,56,[23,54,78]];
console.log(myArray);

// checking length of array
console.log(friendsAge.length);

// fucntion of arrays
function ourAges(age) {
    console.log("Our ages are: ", age);
}
ourAges(friendsAge);

// accessing elements in arrays
console.log(friendsAge[0]);
console.log(friendsAge[2]);

// updating elements in arrays
myArray[0] = 'Samuel';
console.log(myArray[0]);

// array as 2d matrix to replace nesting
const myArrays = [
    [1,2,3],
    ['kim','sam','Ken'],
    [true, false,true,false],
];
console.log(myArrays);
// accessing element of nested arrays
console.log(myArrays[0][0]);

// array methods
const favouriteMovies = ['blacklist','gotham','prisonbreak','badlands'];
// push-add elements to the end
favouriteMovies.push('six_undergound','taken');
console.log(favouriteMovies);
// unshift method-add to the begining of the array
favouriteMovies.unshift('Osofia in london','Hawaii');
console.log(favouriteMovies);