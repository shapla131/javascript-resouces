"use strict"
// function message(text){
//     console.log(`${text}`);
// }message("i love Js");
// function message(text= "hello this is default parameter"){
//     console.log(`${text}`);
// }
// message();
// message("i love Js");

//rest
function message(x, y,...z){
    console.log(`x=${x}, y = ${y},z= ${z}`);
}
message();
message(20 ,30, 50, 40, 98,60,68 );