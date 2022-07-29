const btn = document.querySelector("button");
const form = document.getElementById("addform");
var section = document.querySelector("section");
var p = document.querySelector("#new-p");
var str = document.querySelector("#input").value;
const palindrome = (e, str) => {
  e.preventDefault();
  str = document.querySelector("#input").value;
  if(str!=" " &&str!= ""){
  var split = str.split("");
  for (let i = 0; i < split.length; i++) {
    if (split[i] == " ") {
      split.splice(i, 1);
    }
  }

  var strjoin = split.join("");
  var reverse = split.reverse();
  var check = reverse.join("");

  if (strjoin.toLowerCase() === check.toLowerCase()) {
    p.textContent = `${str} is a palindrome`;
  } else {
    p.textContent = `${str} is not a palindrome`;
  }
  }
  else{
     p.textContent = `Invalid Input`;
  }

};
form.addEventListener("submit", palindrome);
