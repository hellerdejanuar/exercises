let audio = new Audio('resources/sounds/knock.mp3');
let draggableElem = document.getElementById('box');
let initialX = 0,
    initialY = 0;
let moveElement = false;
let deviceType = null;

//Events Object (switches actions based on mouse or touch)
let events = {
    mouse: {
        down: "mousedown",
        move: "mousemove",
        up: "mouseup",
    },
    touch: {
        down: "touchstart",
        move: "touchmove",
        up: "touchend",
    },
};

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150,
}

document.getElementById('box').addEventListener('click', function(e){
    console.log("bang");
    audio.play();
})

const isTouchDevice = () => {
    try {
        document.createEvent("TouchEvent");
        deviceType = "touch";
        return true;
    } catch (e) {
        deviceType = "mouse";
        return false;
    }
};
isTouchDevice();

// Start (mouse down // touch start)
draggableElem.addEventListener(events[deviceType].down, (e) => {
    e.preventDefault();
    // initial x and y points
    initialX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
    initialY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;

    // start movement
    moveElement = true;
});

// Move
window.addEventListener(events[deviceType].move, (e) => {
    // if movement == true then set top and left  to new X and Y while removing any offset
    if (moveElement) {
        e.preventDefault;
        let newX = !isTouchDevice() ? e.clientX : e.touches[0].clientX;
        let newY = !isTouchDevice() ? e.clientY : e.touches[0].clientY;
        draggableElem.style.top = draggableElem.offsetTop - ((initialY - newY) / 40) + "px";
        draggableElem.style.left = draggableElem.offsetLeft - ((initialX - newX) / 40) + "px";
        console.log(draggableElem.offsetTop);
        console.log("deltaY" + (initialY - newY));
    }
});

// End : mouse up / touch end
window.addEventListener(events[deviceType].up, 
    stopMovement = (e) => {
        moveElement = false;
    }
);