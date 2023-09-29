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
const userAge = prompt(`Is this meal for a child or an adult?
  1 - Adult
  2 - Child
  Please enter the number corresponding to your meal size.`
);

let mealPrice = "";

if (userAge === "1") {
  mealPrice === "adult 150 SEK";
} else if (userAge === "2") {
  mealPrice === "child 90 SEK";
} else {
  alert("Invalid age, please start again and add a number as your age.");
  exit(1);
}

alert(`You have selected meal size ${mealPrice}.`);

// Step 5 - Order confirmation


const confirmation = prompt(`You have selected ${selectedFood} with ${topping} meal size ${mealPrice}. 
Would you like to confirm your order?
Type Yes or No.`);

if (confirmation === "Yes" && "yes") {
  alert(`Thank you for your order! Your meal is being prepared.`);
} else if (confirmation === "No" && "no") {
  alert(`Your order has been cancelled. We hope you come back to order from us soon!`);
} else {
  alert(`Invalid choice, please start again.`);
  exit(1);
}