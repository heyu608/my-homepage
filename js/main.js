// main.js - 路径已全部改成根目录版
let currentAlbumIndex = 0;
// 相册图片数组，全部用 imgs/ 开头
const albumImages = [
    "imgs/album1.jpg",
    "imgs/album2.jpg",
    "imgs/album3.jpg",
    "imgs/album4.jpg"
];

// DOM 元素
const albumImg = document.getElementById("album-img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const dots = document.querySelectorAll(".album-dot");
const sections = document.querySelectorAll(".section");
const navBtns = document.querySelectorAll(".nav-btn");
const sideDots = document.querySelectorAll(".dot");

// 切换相册图片
function showAlbumImage(index) {
    albumImg.src = albumImages[index];
    // 圆点激活
    dots.forEach((dot, i) => {
        dot.classList.toggle("active", i === index);
    });
    currentAlbumIndex = index;
}

// 上一张
prevBtn.addEventListener("click", () => {
    currentAlbumIndex = (currentAlbumIndex - 1 + albumImages.length) % albumImages.length;
    showAlbumImage(currentAlbumIndex);
});

// 下一张
nextBtn.addEventListener("click", () => {
    currentAlbumIndex = (currentAlbumIndex + 1) % albumImages.length;
    showAlbumImage(currentAlbumIndex);
});

// 点击圆点切换
dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showAlbumImage(index);
    });
});

// 页面切换（导航 + 侧边圆点）
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

// 向下箭头切换到第二页
document.querySelector(".arrow-down").addEventListener("click", () => {
    switchSection(1);
});