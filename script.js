console.log("JS WORKING");

window.addEventListener("DOMContentLoaded", function () {

  const signInBtn = document.getElementById("signin-btn");
  const mobileBtn = document.getElementById("signin-btn-mobile");
  const modal = document.getElementById("signin-modal");

  if (signInBtn && modal) {

    signInBtn.addEventListener("click", function (e) {
      e.preventDefault();
      modal.classList.add("show");
    });

    if (mobileBtn) {
      mobileBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.classList.add("show");
      });
    }

    window.addEventListener("click", function (e) {
      if (e.target === modal) {
        modal.classList.remove("show");
      }
    });
  }

  const toggle = document.querySelector(".menu-toggle");
  const menu = document.querySelector(".dropdown-menu");

  if (toggle && menu) {
    toggle.addEventListener("click", function () {
      menu.classList.toggle("show");
    });

    window.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && !toggle.contains(e.target)) {
        menu.classList.remove("show");
      }
    });
  }

});

function closeModal() {
  document.getElementById("signin-modal").classList.remove("show");
}

function saveUser() {

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const error = document.getElementById("error");
  const btn = document.getElementById("signin-btn");

  if (username === "" || email === "" ||  !email.includes("@")) {
    error.style.display = "block";
    return;
  }

  error.style.display = "none";

  localStorage.setItem("username", username);
  localStorage.setItem("email", email);

if (btn) {
    btn.innerText = username;
  }

  closeModal();
}
