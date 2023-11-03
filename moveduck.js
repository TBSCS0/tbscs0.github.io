const movingImage = document.getElementById('duckWalk');
let x = 0;
let y = 0;
let speedX = 2;
let speedY = 2;

function moveImage() {
    x += speedX;
    y += speedY;

    // Set new position
    movingImage.style.left = x + 'px';
    movingImage.style.top = y + 'px';

    // Reverse direction when the image hits the page boundaries
    if (x + movingImage.clientWidth > window.innerWidth || x < 0) {
        speedX = -speedX;
    }

    if (y + movingImage.clientHeight > window.innerHeight || y < 0) {
        speedY = -speedY;
    }

    requestAnimationFrame(moveImage);
}

moveImage();
