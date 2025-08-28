document.addEventListener("DOMContentLoaded", () => {
  document.body.style.backgroundColor = "lightblue";
});

// https://copilot.microsoft.com/shares/n7jG3fEtukT9sNhDCzwaY
// https://copilot.microsoft.com/shares/8uRvgHvrS6aV4xWft9bnF
// https://copilot.microsoft.com/shares/z4P9LwKk5c2u9Y6eyUgre
// https://copilot.microsoft.com/shares/61NLwEgXq6d8RLqJUv76x   



** start of script.js **

let lunches = [];

const addLunchToEnd = (lunches , tacos) => {
   lunches.push(tacos);
 console.log(`${tacos} added to the end of the lunch menu.`);
 return lunches;
}
console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToEnd(["Pizza", "Tacos"], "Burger"));

const addLunchToStart = (lunches, sushi) => {
  lunches.unshift(sushi);
  console.log( `${sushi} added to the start of the lunch menu.`);
  return lunches;
}
console.log(addLunchToStart(lunches, "sushi"));
console.log(addLunchToStart(["Burger", "Sushi"], "Pizza"));

const removeLastLunch = (lunches) => {
      
      if(lunches.length === 0){
        console.log("No lunches to remove.");
      
      return lunches;
      }
      const newArr = lunches.pop();
      console.log(`${newArr} removed from the end of the lunch menu.`);
      return lunches;    
};
console.log(removeLastLunch([]));
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));

const removeFirstLunch = (lunches) => {
    if(lunches.length === 0){
      console.log("No lunches to remove."); 
    }
    let su = lunches.shift();
     console.log(`${su} removed from the start of the lunch menu.`);
   return lunches;  
}
console.log(removeFirstLunch([]));
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));

const getRandomLunch = (lunches) => {

    if(lunches.length === 0){
      console.log("No lunches available.");
    }
   const randomIndex = Math.floor(Math.random() * lunches.length);
    const selectedLunch = lunches[randomIndex];
    console.log(`Randomly selected lunch: ${selectedLunch}`);
    return selectedLunch;
    } 

console.log(getRandomLunch([]));
console.log(getRandomLunch(lunches));

    const showLunchMenu = (lunches) => {
     if(lunches.length === 0){
       console.log("The menu is empty.");
     }
  else {
    console.log(`Menu items: ${lunches.join(", ")}`);
  }
     return lunches;
    } 
  console.log(showLunchMenu([]));console.log(showLunchMenu(["Greens", "Corns", "Beans"]));






** end of script.js **

