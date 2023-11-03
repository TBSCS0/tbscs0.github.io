const duckWalk = document.getElementById('duckWalk');

const speed = 0.5;
const screenWidth = window.innerWidth - duckWalk.clientWidth;
const screenHeight = window.innerHeight - duckWalk.clientHeight;

let x = getRandomInt(0, screenWidth);
let y = getRandomInt(0, screenHeight);
let xDirection = 1; // 1 for right, -1 for left
let yDirection = 1; // 1 for down, -1 for up

moveDuck()

function getRandomInt(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function moveDuck() {
    x += speed * xDirection;
    y += speed * yDirection;

    if (x + duckWalk.clientWidth > screenWidth || x < 0) {
        xDirection *= -1;
    }
    if (y + duckWalk.clientHeight > screenHeight || y < 0) {
        yDirection *= -1;
    }

    let randOne = getRandomInt(1,100);
    let randTwo = getRandomInt(1,2);
    if(randOne % 97 === 0 && randTwo % 2 === 0){
        xDirection *= -1;
    }
    if(randOne % 97 === 0 && randTwo % 2 !== 0){
        yDirection *= -1;
    }

    duckWalk.style.left = x + 'px';
    duckWalk.style.top = y + 'px';

    requestAnimationFrame(moveDuck);
}