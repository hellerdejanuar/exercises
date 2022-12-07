let audio = new Audio('resources/sounds/knock.mp3');


// handle mouse
const mouse = {
    x: null,
    y: null,
    radius: 150
}

document.getElementById('box').addEventListener('click', function(e){
    console.log("bang");
    audio.play();
})