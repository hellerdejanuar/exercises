let audio = new Audio('resources/sounds/knock.mp3');
let draggableElem = document.getElementById('box');
let initialX = 0,
    initialY = 0;
let moveElement = false;
let deviceType = null;

//Events Object 
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
    
});