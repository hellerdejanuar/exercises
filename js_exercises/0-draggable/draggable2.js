let audio = new Audio('resources/sounds/knock.mp3');
let wrapper = document.getElementById('container');
let draggableElem = wrapper.querySelector('#box');

let initialX = 0,
    initialY = 0;
let moveElement = false;
let deviceType = null;

// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150,
}

function onDrag({movementX, movementY}){ // from event grab only movementX, and movementY
    let getStyle = window.getComputedStyle(draggableElem);
    let left = parseInt(getStyle.left);
    let top = parseInt(getStyle.top);
    draggableElem.style.left = `${left + movementX}px`;
    draggableElem.style.top = `${top + movementY}px`;
}

draggableElem.addEventListener("mousedown", () => {
    draggableElem.addEventListener("mousemove", onDrag);
    draggableElem.style.cursor = "grabbing";
    audio.play();
});

document.addEventListener("mouseup", () => {
    draggableElem.removeEventListener("mousemove", onDrag);
    draggableElem.style.cursor = "grab";
});
