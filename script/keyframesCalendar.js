let h1= document.querySelector("h1");

//Animation for color of heading
let h1ColorKeyFrames = [
    {
        color: "Beige",
    },
    {
        color: "Bisque",
    },
    {
        color: "BurlyWood",
    },
    {
        color: "DarkGoldenRod",
    },
    {
        color: "DarkKhaki",
    }
];

//Configuration of animation
let h1ColorProperties = {
    //miliseconds 7s
    duration: 1000,
    //three times
    iterations: "Infinity",
    //hold last frame
    fill: "forwards",
    //smoother
    direction: "alternate"
}

let h1Animation= h1.animate(h1ColorKeyFrames, h1ColorProperties);

//Control animation with mouse
//play animtion before it can even play
h1Animation.pause();

h1.addEventListener("click", function(event){
    h1Animation.play();
})


//Calendar Keyframes
let snowflake1 = document.getElementById("snowflake1");
let snowflake2 = document.getElementById("snowflake2");

snowflake1.style.position = "fixed";

let sf1MovementKeyFrames = [
    { top: "-5%", left: "0%", offset: 0, transform: "scale(0.5) rotate(0deg)" },
    { top: "10%", left: "10%", offset: 0.1, transform: "scale(0.6) rotate(36deg)"},
    { top: "20%", left: "0%", offset: 0.2, transform: "scale(0.7) rotate(72deg)"},
    { top: "30%", left: "10%", offset: 0.3, transform: "scale(0.8) rotate(108deg)"},
    { top: "40%", left: "0%", offset: 0.4, transform: "scale(0.9) rotate(144deg)"},
    { top: "50%", left: "10%", offset: 0.5, transform: "scale(1) rotate(200deg)"},
    { top: "60%", left: "0%", offset: 0.6, transform: "scale(1.1) rotate(236deg)"},
    { top: "70%", left: "10%", offset: 0.7, transform: "scale(1.2) rotate(272deg)"},
    { top: "80%", left: "0%", offset: 0.8, transform: "scale(1.3) rotate(308deg)"},
    { top: "90%", left: "10%", offset: 0.9, transform: "scale(1.4) rotate(316deg)"},
    { top: "100%", left: "0%", offset: 1, transform: "scale(1.5) rotate(360deg)"}
];

let sf1MovementProperties ={
    duration: 8000,
    //three times
    iterations: "Infinity",
    //hold last frame
    fill: "forwards"
}

let sf1Animation = snowflake1.animate(sf1MovementKeyFrames, sf1MovementProperties);

sf1Animation.play();

snowflake2.style.position = "fixed";

let sf2MovementKeyFrames = [
    { top: "-5%", right: "0%", offset: 0, transform: "scale(0.5) rotate(0deg)" },
    { top: "10%", right: "10%", offset: 0.1, transform: "scale(0.6) rotate(36deg)"},
    { top: "20%", right: "0%", offset: 0.2, transform: "scale(0.7) rotate(72deg)"},
    { top: "30%", right: "10%", offset: 0.3, transform: "scale(0.8) rotate(108deg)"},
    { top: "40%", right: "0%", offset: 0.4, transform: "scale(0.9) rotate(144deg)"},
    { top: "50%", right: "10%", offset: 0.5, transform: "scale(1) rotate(200deg)"},
    { top: "60%", right: "0%", offset: 0.6, transform: "scale(1.1) rotate(236deg)"},
    { top: "70%", right: "10%", offset: 0.7, transform: "scale(1.2) rotate(272deg)"},
    { top: "80%", right: "0%", offset: 0.8, transform: "scale(1.3) rotate(308deg)"},
    { top: "90%", right: "10%", offset: 0.9, transform: "scale(1.4) rotate(316deg)"},
    { top: "100%", right: "0%", offset: 1, transform: "scale(1.5) rotate(360deg)"}
];

let sf2MovementProperties ={
    duration: 8000,
    //three times
    iterations: "Infinity",
    //hold last frame
    fill: "forwards"
}

let sf2Animation = snowflake2.animate(sf2MovementKeyFrames, sf2MovementProperties);

sf2Animation.play();