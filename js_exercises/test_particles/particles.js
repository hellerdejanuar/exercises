const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let audio = new Audio('resources/sounds/knock.mp3');


// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('click', function(e){
    //audio.play();
});
window.addEventListener('mousemove', function(event){
    mouse.x = event.x;
    mouse.y = event.y;
    //console.log(mouse.x, mouse.y);
});

/*ctx.fillStyle = 'white';
ctx.font = '30px Verdana';
ctx.fillText('A', 0, 30);
ctx.strokeStyle = 'white';
const data = ctx.getImageData(0, 0, 100, 100);*/

class Particle {
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.size = Math.random() * 2 + 3;
        this.baseX = this.x; // remember original position
        this.baseY = this.y; // to return after displacement
        this.density = (Math.random() * 30) + 1;
    }
    draw(){
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
    }
    update(){
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.hypot(dx, dy);
        if (distance < 200) {
            this.size = 10;
        } else {
            this.size = 3;
        }
    }
}

function init() {
    particleArray = [];
    for (let i = 0; i < 500; i++) {              // create 10 particles
        let x = Math.random() * canvas.width;   // randomly spread
        let y = Math.random() * canvas.height;  // across the canvas
        particleArray.push(new Particle(x, y));
    }
}
init();
//console.log(particleArray);

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particleArray.length; i++){
        particleArray[i].draw();
        particleArray[i].update();

    }
    requestAnimationFrame(animate);
}
animate();