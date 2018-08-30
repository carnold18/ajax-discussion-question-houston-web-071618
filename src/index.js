const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  fetch('https://randomuser.me/api/')
  .then( res => res.json() )
  .then( data => {
  	debugger
    console.log(data) 
  })
  console.log("CONTENT LOADED!");
});


