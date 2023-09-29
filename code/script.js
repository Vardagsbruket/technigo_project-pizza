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

switch (selectTopping) {
  case "Pizza":
    choseTopping = prompt(
      `Select a topping for your pizza.
      1 - Cheese
      2 - Olives
      3 - Prawns
      Please enter the number of your choice.`
    );
    topping= ["Cheese", "Olives", "Prawns"];
    break;

    case "Pasta":
      choseTopping = prompt(
      `Select a topping for your pasta.
      1 - Pesto
      2 - Arribiata
      3 - Carbonara
      Please enter the number of your choice.`
    );
    topping= ["Pesto", "Arribiata", "Carbonara"];
    break;

    case "Salad":
      choseTopping = prompt(
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
      exit(1);
}

if (selectTopping === "1") {
  alert(
    `Great choice! You have selected ${selectedFood} with ${topping[0]}.`
  );
} else if (selectTopping === "2") {
  alert(
    `Great choice! You have selected ${selectedFood} with ${topping[1]}.`
  );
} else if (selectTopping === "3") {
  alert(
    `Great choice! You have selected ${selectedFood} with ${topping[2]}.`
  );
}

// Step 4 - Age


// Step 5 - Order confirmation

