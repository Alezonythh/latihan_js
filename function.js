// var a = 1;
// var a = 2;
// console.log(a); 
// b = 3;




// // function hello(name) {
// //     console.log("Hello " + name);
// // }
// // hello("John");

// document.getElementById("myButton").addEventListener("click", function() {
//     alert("Hello World!");
// });
//get data from api
fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => console.log(json))