"use strict";

const loginBtn = document.getElementById("login-menu-btn");
const loginModal = document.getElementById("login-modal");
const gallery = document.querySelector('.gallery');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const testimonyContainer = document.querySelector('.testimony-container');
const testimonyPrev = document.getElementById('testimonyPrev');
const testimonyNext = document.getElementById('testimonyNext');

loginBtn.addEventListener("click", () => {
    loginModal.classList.toggle("hidden");
});

// Calculates the scroll distance: Image width (350) + gap(15).
// This ensures the gallery scrolls exactly one item at a time without cutting off images.
const scrollAmount = 365; 
nextBtn.addEventListener('click', () => {
    gallery.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    gallery.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

// 400px (card width) + 20px (gap) = 420px
const testimonyScrollAmount = 420; 

testimonyNext.addEventListener('click', () => {
    testimonyContainer.scrollBy({
        left: testimonyScrollAmount,
        behavior: 'smooth'
    });
});

testimonyPrev.addEventListener('click', () => {
    testimonyContainer.scrollBy({
        left: -testimonyScrollAmount,
        behavior: 'smooth'
    });
});
