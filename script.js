let currentIndex = 0;
const images = document.querySelectorAll('.carousel-images img');
const totalImages = images.length;

function showNextImage() {
    images[currentIndex].style.display = 'none';
    currentIndex = (currentIndex + 1) % totalImages;
    images[currentIndex].style.display = 'block';
}

images.forEach((img, index) => {
    img.style.display = index === 0 ? 'block' : 'none';
});

setInterval(showNextImage, 2000);