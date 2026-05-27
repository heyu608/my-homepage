let currentAlbumIndex = 0;
const albumImages = [
    "imgs/album1.jpg",
    "imgs/album2.jpg",
    "imgs/album3.jpg",
    "imgs/album4.jpg"
];

const albumImg = document.getElementById("album-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".album-dot");
const sections = document.querySelectorAll(".section");
const navBtns = document.querySelectorAll(".nav-btn");
const sideDots = document.querySelectorAll(".dot");

function showAlbumImage(index) {
    albumImg.src = albumImages[index];
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentAlbumIndex = index;
}

prevBtn.addEventListener("click", () => {
    currentAlbumIndex = (currentAlbumIndex - 1 + albumImages.length) % albumImages.length;
    showAlbumImage(currentAlbumIndex);
});

nextBtn.addEventListener("click", () => {
    currentAlbumIndex = (currentAlbumIndex + 1) % albumImages.length;
    showAlbumImage(currentAlbumIndex);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showAlbumImage(index);
    });
});

function switchSection(index) {
    sections.forEach((sec, i) => {
        sec.classList.toggle("active", i === index);
    });
    navBtns.forEach((btn, i) => {
        btn.classList.toggle("active", i === index);
    });
    sideDots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
}

navBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        switchSection(index);
    });
});

sideDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        switchSection(index);
    });
});

document.querySelector(".arrow-down").addEventListener("click", () => {
    switchSection(1);
});