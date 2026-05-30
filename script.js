console.log("JS WORKING");

window.addEventListener("DOMContentLoaded", function () {

  // =========================
  // SIGN IN MODAL
  // =========================

  const signInBtn = document.getElementById("signin-btn");
  const modal = document.getElementById("signin-modal");

  if (signInBtn && modal) {

    signInBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("show");
    });

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });

  } else {
    console.log("Modal elements not found");
  }


  // =========================
  // HAMBURGER MENU (☰)
  // =========================

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".dropdown-menu");

  if (toggle && menu) {

    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });

    // إغلاق القائمة عند الضغط خارجها
    window.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show");
      }
    });

  } else {
    console.log("Menu elements not found");
  }

});


// =========================
// MODAL FUNCTIONS
// =========================

function closeModal() {
  document.getElementById("signin-modal").classList.remove("show");
}


// =========================
// SAVE USER (LOCAL STORAGE)
// =========================

function saveUser() {

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");
  const btn = document.getElementById("signin-btn");

  if (username === "" ||  email === "" || !email.includes("@")) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

  btn.innerText = username;

  closeModal();
}
