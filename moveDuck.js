const duckWalk = document.getElementById('duckWalk');

const speed = 0.5; // Pixels to move in each step
const screenWidth = window.innerWidth - duckWalk.clientWidth; // Width of the screen minus duck's width
const screenHeight = window.innerHeight - duckWalk.clientHeight; // Height of the screen minus duck's height

let x = getRandomInt(0, screenWidth);
let y = getRandomInt(0, screenHeight);
let xDirection = 1; // 1 for right, -1 for left
let yDirection = 1; // 1 for down, -1 for up

moveDuck()

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function moveDuck() {
    // Update the duck's position
    x += speed * xDirection;
    y += speed * yDirection;

    // Check if the duck has reached the screen boundaries
    if (x + duckWalk.clientWidth > screenWidth || x < 0) {
        xDirection *= -1;
    }
    if (y + duckWalk.clientHeight > screenHeight || y < 0) {
        yDirection *= -1;
    }

    let rand = getRandomInt(1,100);
    if(rand % 97 === 0 && rand % 2 === 0){
        xDirection *= -1;
    }
    if(rand % 97 === 0 && rand % 2 !== 0){
        yDirection *= -1;
    }


    // Apply the new position to the duck
    duckWalk.style.left = x + 'px';
    duckWalk.style.top = y + 'px';

    requestAnimationFrame(moveDuck);
}