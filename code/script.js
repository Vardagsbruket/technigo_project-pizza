// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const firstName = prompt("Please tell me your name")
alert("Hello " + ${firstName} + "!" );

// Step 2 - Food choice

const foodChoice = prompt(
  `What would you like to eat?
  1 - Pizza
  2 - Pasta
  3 - Salad
  Please enter the number of your choice.`
);

let selectedFood="";

if(foodChoice==="1") {
  selectedFood= "Pizza";
} else if(foodChoice==="2") {
  selectedFood = "Pasta";
} else if (foodChoice==="3") {
  selectedFood = "Salad";
} else {
  alert("Invalid choice, please start again.");
  exit();
}

alert(`You have chosen ${selectedFood}.`);

// Step 3 - Subtype choice


// Step 4 - Age


// Step 5 - Order confirmation

