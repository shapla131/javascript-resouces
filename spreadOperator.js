// function addNum(x,y,z){
//     return x+y+z
// }
// let numbers1=[1,2,3];
// // console.log(addNum(...numbers));

// // let numbers1=[6,7, ...numbers];
// // console.log(numbers1);

// let numbers2=[6,8,9];
// let numbers=[...numbers1, ...numbers2];
// console.log(numbers);

let p1={
    name:"shapla",
    age:30
}
let p2={
    nationality:"bangladeshi",
    occupation:"student"
}

let p={...p1, ...p2};
console.log(p);