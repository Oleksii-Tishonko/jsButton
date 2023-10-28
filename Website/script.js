console.log("👋 🌎");

const myElement = document.getElementById("root");

let button = document.createElement("button");
button.innerText = "click me";

myElement.appendChild(button);
button.classList.add("square");

console.log(myElement);

button.setAttribute("onClick", "buttonHandler()");

function buttonHandler(){
    console.dir(myElement);
}