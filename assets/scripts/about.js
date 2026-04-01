'use strict';
document.addEventListener("DOMContentLoaded", function () {
    let videos = document.querySelectorAll(".video-slide");
    let prevBtn = document.querySelector(".prev-btn");
    let nextBtn = document.querySelector(".next-btn");
    let index = 0;

    let loginBtn = document.getElementById("login-menu-btn");
    let loginModal = document.getElementById("login-modal");

    function showVideo(i) {
        videos.forEach(function(video) {
            video.classList.remove("active");
            video.pause();
            video.currentTime = 0;
        });

        videos[i].classList.add("active");
        videos[i].play();
    }

    if (nextBtn && prevBtn && videos.length > 0) {
        nextBtn.addEventListener("click", function () {
            index = (index + 1) % videos.length;
            showVideo(index);
        });

        prevBtn.addEventListener("click", function () {
            index = (index - 1 + videos.length) % videos.length;
            showVideo(index);
        });
    }

     if (loginBtn && loginModal) {
        loginBtn.addEventListener("click", function () {
            loginModal.classList.toggle("hidden");
        });
    }
});