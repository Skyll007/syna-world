console.log("JS WORKING");

window.addEventListener("DOMContentLoaded", function () {

  let signInBtn = document.getElementById("signin-btn");
  let modal = document.getElementById("signin-modal");

  console.log("BTN =", signInBtn); // 👈 مهم جداً

  if (!signInBtn || !modal) {
    console.log("ELEMENTS NOT FOUND");
    return;
  }

  signInBtn.addEventListener("click", function(e){
    e.preventDefault();
    console.log("clicked");
    modal.classList.add("show");
  });

  window.addEventListener("click", function(e){
    if (e.target === modal) {
      modal.classList.remove("show");
    }
  });

});
function closeModal(){
  document.getElementById("signin-modal").classList.remove("show");
}

function saveUser(){
  let username = document.getElementById("username").value.trim();
  let email = document.getElementById("email").value.trim();
  let error = document.getElementById("error");
  let btn = document.getElementById("signin-btn");

  // validation 
  if(username === "" || email === "" || !email.includes("@")){
    error.style.display = "block";
    return;
  }

  error.style.display = "none";

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  btn.innerText = username;

  closeModal();
}
let toggle = document.querySelector(".menu-toggle");
let menu = document.querySelector(".dropdown-menu");

if (toggle && menu) {
  toggle.addEventListener("click", function () {
    menu.classList.toggle("show");
  });}
