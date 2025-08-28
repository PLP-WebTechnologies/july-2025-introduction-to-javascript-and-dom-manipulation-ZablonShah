// =======================
// 🎯 Part 1: Basics
// =======================

// Variable declaration
let userName = "Alice";
let userAge = 20;

// Conditional
if (userAge >= 18) {
  console.log(userName + " is an adult.");
} else {
  console.log(userName + " is a minor.");
}

// =======================
// ❤️ Part 2: Functions
// =======================

// Function 1: Calculate total price with tax
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
console.log("Total price:", calculateTotal(100, 0.16));

// Function 2: Toggle text in the DOM
function toggleMessage() {
  const msg = document.getElementById("message");
  msg.textContent = msg.textContent === "Hello 👋" ? "Goodbye 👋" : "Hello 👋";
}

// =======================
// 🔁 Part 3: Loops
// =======================

// Loop 1: Countdown using for
for (let i = 5; i > 0; i--) {
  console.log("Countdown:", i);
}

// Loop 2: Iterate over an array with forEach
let fruits = ["🍎 Apple", "🍌 Banana", "🍇 Grapes"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// =======================
// 🌐 Part 4: DOM Manipulation
// =======================

// 1. Change title on page load
document.getElementById("title").textContent = "🔥 JavaScript in Action 🔥";

// 2. Add click event listener
document.getElementById("actionBtn").addEventListener("click", () => {
  toggleMessage(); // function from Part 2
});

// 3. Dynamically create list items
fruits.forEach(fruit => {
  let li = document.createElement("li");
  li.textContent = fruit;
  document.getElementById("list").appendChild(li);
});
