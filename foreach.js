// var number=[10,20,30,40];
// number.forEach(function(x){
//     console.log(x);
// });

// const numbers =[20,30,40,50];
// const newNumbers=[];
// numbers.forEach(function(x){
//     newNumbers.push(x*x);
// });console.log(newNumbers);

// const numbers =[20,30,40,50];
// const newNumbers=[];
// numbers.forEach(function(x){
//     newNumbers.push(x+5);
// });console.log(newNumbers);

const numbers =[20,30,40,50];
numbers.forEach(function(x, index,arr){
    arr[index]=x+5;
});console.log(numbers);