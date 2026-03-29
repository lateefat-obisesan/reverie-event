"use strict";

const loginBtn = document.getElementById("login-menu-btn");
const loginModal = document.getElementById("login-modal");

loginBtn.addEventListener("click", () => {
    loginModal.classList.toggle("hidden");
});
