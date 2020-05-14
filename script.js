var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var random = document.getElementById("random");
var body = document.getElementById("gradient");
console.log(random);

function initialize() {
  color1.value = "#ff0000";
  color2.value = "#ffff00";
  setGradient();
}

function getRandomColorHex() {
    const colorLetters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += colorLetters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setRandomGradient() {
  console.log("It works");
  color1.value = getRandomColorHex();
  color2.value = getRandomColorHex();
  setGradient();
}

function setGradient(){
    body.style.background = "linear-gradient(to right," + color1.value + ", " + color2.value + ")";
    css.textContent = body.style.background + ";";
}

initialize();

random.addEventListener("click",setRandomGradient);

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);
