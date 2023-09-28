// Start here

// Step 1 - Welcome and introduction

alert(
  `Welcome to our Javascript Pizzeria. Ready to Start? - Click 'OK' to begin.`
)
const firstName = prompt("Please tell me your name")
alert(`Hello  ${firstName}!` );

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
let choseTopping="";
let topping=[];

switch(selectedFood) {
  case "1":
  choseTopping= prompt(
      `Select a topping for your pizza.
      1 - Cheese
      2 - Olives
      3 - Prawns
      Please enter the number of your choice.`
    );
    topping= ["Cheese", "Olives", "Prawns"];
    break;

    case "2":
    choseTopping = prompt(
      `Select a topping for your pasta.
      1 - Pesto
      2 - Arribiata
      3 - Carbonara
      Please enter the number of your choice.`
    );
    topping= ["Pesto", "Arribiata", "Carbonara"];
    break;

    case "3":
    choseTopping= prompt(
      `Select a topping for your salad.
      1 - Greek
      2 - Ceasar
      3 - Potatoe
      Please enter the number of your choice.`
    );
    topping= ["Greek", "Ceasar", "Potatoe"];
    break;

    default:
      alert(`Invalid choice, please start again.`);
    exit();
}


// Step 4 - Age


// Step 5 - Order confirmation

