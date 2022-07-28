// const inputData=document.querySelector('#input');
const btn= document.querySelector('button');
const form = document.getElementById("addform");
var section = document.querySelector("section");
// var p = document.createElement("p");
var p = document.querySelector("#new-p");
// section.append(p);
var str=document.querySelector('#input').value;
const palindrome=(e,str)=>{
    e.preventDefault();
    str = document.querySelector('#input').value;

  var check = str.split("").reverse().join("");

// //   for (let i = 0; i < mainsplit.length; i++) {
//     if (main[i] == " ") {
//       check.splice(i,1);

//     //   console.log(i);
//     } else {
//       continue;
//     }
//   }
 
  var output;
  if (str.toLowerCase() === check.toLowerCase()) {
   
    p.textContent = `${str} is a palindrome`;
  } else {
   
    p.textContent= `${str} is not a palindrome`;
  }

  console.log(output.toUpperCase());
 

};
form.addEventListener('submit',palindrome);

