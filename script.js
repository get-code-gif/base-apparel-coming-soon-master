// document.addEventListener("DOMContentLoaded", () => {
//   document.body.style.backgroundColor = "lightblue";
//   document.body.style.color = "lightblack";
// });

// https://copilot.microsoft.com/shares/n7jG3fEtukT9sNhDCzwaY
// https://copilot.microsoft.com/shares/8uRvgHvrS6aV4xWft9bnF
// https://copilot.microsoft.com/shares/z4P9LwKk5c2u9Y6eyUgre
// https://copilot.microsoft.com/shares/61NLwEgXq6d8RLqJUv76x

document.addEventListener("DOMContentLoaded", () => {
  let input = document.querySelector("input");
  let button = document.querySelector("button"); // Make sure you select the button too
  let error = document.querySelector(".error-text");
  let errorIcon = document.querySelector(".error-icon img");
  if (!input || !button || !error || !errorIcon) {
    console.warn("All elements found:", { input, button, error, errorIcon });
    return;
  }
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  //start hidden

  error.style.display = "none";
  error.textContent = "";

  button.addEventListener("click", (e) => {
    e.preventDefault();
    const email = input.value.trim();

    if (email === "") {
      error.style.display = "flex";
      error.textContent = "Email field cannot be empty!";
      error.style.color = "red";
      errorIcon.style.display = "block";
      input.focus();
      return;
    }

    if (regex.test(email)) {
      alert("hello");
      input.value = "";
      error.style.display = "none";
      errorIcon.style.display = "none";
      error.textContent = "";
      console.log("Valid email:", email);
      return;
      // clear;
    }
    error.textContent = "Please provide a valid email!";
    error.style.color = "red";
    error.style.display = "flex";
    errorIcon.style.display = "block";
    console.log("Invalid email:", email);
    input.focus();
  });
});

let dayNumber = 5;
let count = 0;
let cc = (dayNumber) => {
  count = 6;
  switch (dayNumber) {
    case 1:
      if (count == 2 || count == 3 || count == 4 || count == 5 || count == 6)
        count = 6 - 1;
      return `${count} Bet`;
    case 2:
      return `${count} Bet`;
    case 3:
      return `${count} Bet`;
    case 4:
      return `${count} Hold`;
    case 5:
      count == 2 || count == 3 || count == 4 || count == 5 || count == 6;
      count = 6 - 1;
      return `${count} Bet`;
    case 6:
      count == 2 || count == 3 || count == 4 || count == 5 || count == 6;
      count = 6 - 1;
      return `${count} Bet`;
    case 7:
      count == 2 || count == "J" || count == 9 || count == 2;
      count = 1;
      return `${count} Bet`;
    case 8:
      return `${count} Bet`;
    case 9:
      count == 7 || count == 8;
      count = 0;
      return `${count} Hold`;
    case 10:
      count == 2 || count == 2;
      count = 1;
      return `${count} Bet`;
    case "A":
      count == "J" || count == "Q" || count == "K" || count == 10;
      count = -5;
      return `${count} Hold`;
    case "A":
      count == "J" || count == "Q" || count == "K" || count == 10;
      count = -5;
      return `${count} Hold`;
    case "K":
      count == 3 || count == 2 || count == "A" || count == 10;
      count = -1;
      return `${count} Hold`;
    default:
      count == 2 || count == 2;
      count = 1;
      return `${count} Bet`;
  }
};

console.log(cc(6)); // Output: Thursday
console.log(cc(9)); // Output: Thursday
console.log(cc(7)); // Output: Thursday
console.log(cc(10)); // Output: Thursday
console.log(cc("K")); // Output: Thursday
console.log(cc("A")); // Output: Thursday
console.log(cc("A")); // Output: Thursday
