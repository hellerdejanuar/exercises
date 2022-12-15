const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let particleArray = [];
let audio = new Audio('resources/sounds/knock.mp3');
let gravity = 1.5;
let surface_friction = 0.1;
let air_friction = 0.1;


// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

window.addEventListener('click', function(e){
    create_by_click();
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
        this.speed_x = 1;
        this.speed_y = 1;
        this.bounce_state = false; // false for falling, true for rebound

        this.size = 10;

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

    bounce() {
        audio.play();
        this.speed_y = this.speed_y / (gravity + surface_friction) * -1;
        this.bounce_state = !this.bounce_state;
    }

    start_falling() {
        this.speed_y = 1;
        this.bounce_state = !this.bounce_state;
    }

    move() {
        this.y = this.y + this.speed_y ;     // update pos
        this.x = this.x + this.speed_x - (this.speed_x * air_friction);

        this.speed_y = this.speed_y * (this.bounce_state ? 1 / gravity : gravity) // accelerate
                     - (air_friction * this.speed_y);           
        this.speed_x = this.speed_x - (air_friction * this.speed_x);
    }

    update() {
        this.move();

        // case for bouncing
        if (this.y + this.speed_y >= canvas.height) { 
            this.bounce();
        // case for when it reaches the top    
        } else if ( this.bounce_state && this.speed_y >= -1) { 
            this.start_falling();
        }
    }
}

/*function init() {
    particleArray = [];
    for (let i = 0; i < 500; i++) {              // create 10 particles
        let x = Math.random() * canvas.width;   // randomly spread
        let y = Math.random() * canvas.height;  // across the canvas
        particleArray.push(new Particle(x, y));
    }
}
init();*/

function create_by_click() {
    particleArray.push(new Particle(mouse.x, mouse.y));
    audio.play();
}
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