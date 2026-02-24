/* NAVBAR */

const navbar = document.querySelector('.navbar');
const burger = document.getElementById('burger');
const mobileMenu = document.getElementById('mobileMenu');

window.addEventListener('scroll', () => {
    if(window.scrollY > 100){
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    mobileMenu.classList.toggle('active');
});

/* LIGHTBOX SWIPE */

const images = document.querySelectorAll('.portfolio-grid img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');

let currentIndex = 0;
let startX = 0;

function showImage(index){
    lightboxImg.style.opacity = 0;

    setTimeout(() => {
        lightboxImg.src = images[index].src;
        lightboxImg.style.opacity = 1;
    }, 150);

    currentIndex = index;
}

images.forEach((img, index) => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        showImage(index);
    });
});

lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox){
        lightbox.classList.remove('active');
    }
});

lightbox.addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

lightbox.addEventListener('touchend', (e) => {
    let diff = e.changedTouches[0].clientX - startX;

    if(diff > 80){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    else if(diff < -80){
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

lightbox.addEventListener('mousedown', (e) => {
    startX = e.clientX;
});

lightbox.addEventListener('mouseup', (e) => {
    let diff = e.clientX - startX;

    if(diff > 80){
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }
    else if(diff < -80){
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }
});

document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape'){
        lightbox.classList.remove('active');
    }
});