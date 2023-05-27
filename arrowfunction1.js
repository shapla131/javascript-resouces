//traditional function
const students = [
    {
        id:101,
        name:"shapla",
        gpa:3.60
    },
    {
        id:102,
        name:"tusi",
        gpa:3.40
    },
    {
        id:103,
        name:"sarah",
        gpa:3.20
    },
    {
        id:104,
        name:"misha",
        gpa:3.80
    },
    {
        id:105,
        name:"shrabon",
        gpa:3.90
    },
];

// function student(){
//      return students.filter(function(x){
//         return x.gpa>3.50;
//     }).map(function(y){
//         return y.name;
//     });

// }
// console.log(student());
//arrow function

// const student = () => students.filter((x) => x.gpa > 3.50).map((y)=>y.name);

const student = () =>{
 return students.filter((x) => x.gpa > 3.50).map((y)=>y.name);}
console.log(student());