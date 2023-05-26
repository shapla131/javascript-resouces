// const names =["s1","s2","s3"];
// for( let name of names){
//     console.log(name);
// }

let students={
    id:101,
    name:"shapla",
    cgpa:3.60

}
for( let x in students){
    //console.log(x);
    //console.log(students[x]);
    console.log(`${x} : ${students[x]}`);
}