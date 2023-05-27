// array destructuring
// let num=[12,34,56,78,98,65];
// let[num1,num2,num3,num4,num5]=num;
// console.log(num1);
// console.log(num2);
// console.log(num3);

// // swap
// let a=10,b=20;
// [a,b]=[b,a];
// console.log(a,b);

// object destructure

// const studentInfo ={
//     id:101,
//     name:"shapla",
//     gpa:3.50,

//     language : {
//         native:"bangla",
//         begginer:"english",

//     }
// }

// const {name,id,language}=studentInfo;
// console.log(id,language.native);

// destructure function parameter
// const student = ({ name, id }) => {
//   console.log(`${name},${id}`);
// };
// const studentInfo = {
//   name: "shapla",
//   id: 101,
// };
// student(studentInfo);
// let number=[12,34,23,65,56];
// let firstevenNumber= number.find(x=>x%2===0);
// console.log(firstevenNumber);

const student = [
  {
    id: 1,
    gpa: 3.6,
  },
  {
    id: 2,
    gpa: 3.7,
  },
  {
    id: 3,
    gpa: 3.9,
  },
  {
    id: 4,
    gpa: 3.8,
  },
];

console.log(student.find((x) => x.gpa > 3.7));
