//General keyframes

//Menu keyframe animation (prototype)
let menuBtn = document.getElementById("menu");

menuBtn.style.position = "absolute";

let menuMovementKeyFrames = [
    { top: "0%", left: "0%", offset: 0 },
    { top: "0%", left: "-50%", offset: 0.7 },
    { top: "-10%", left: "0%", offset: 0.85 },
    { top: "0%", left: "0%", offset: 1 }
];

let menuMovementProperties ={
    duration: 2000,
    fill: "forwards"
}

let menuAnimation = menuBtn.animate(menuMovementKeyFrames, menuMovementProperties);

menuAnimation.pause();

menuBtn.addEventListener("click", function(event){
    menuAnimation.play();
});

