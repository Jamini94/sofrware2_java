const name = prompt("Enter your name:");

const student = (name && name.trim()) ? name.trim() : "Student";

const draw = Math.floor(Math.random() * 4) + 1;

let house;
switch (draw) {
  case 1:
    house = "Gryffindor";
    break;
  case 2:
    house = "Slytherin";
    break;
  case 3:
    house = "Hufflepuff";
    break;
  case 4:
    house = "Ravenclaw";
    break;
  default:
    house = "Unknown";
}

document.getElementById("result").textContent = `${student}, you are ${house}.`;
