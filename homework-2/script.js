function addTo(elementId, content) {
  document.getElementById(elementId).innerHTML += content;
}

// Tickets & Dating!
addTo("ticketNum", "3");
addTo("ticketCost", "14");
addTo("ttCost", 3 * 14);

// Shopping!

let shoppingCurrentTotal = 235.87;
const jacketCost = 70;
const sweater = 55;
const shirt = 35;
const pants = 75;
const skirt = 49;
const sandals = 30;
const shoes = 60;
shoppingCurrentTotal -= shirt + pants + shoes;

addTo("bank", "total left $" + shoppingCurrentTotal);

addTo("addJacket", shoppingCurrentTotal > jacketCost);

// Pizza!
const totalSlices = 4 * 8;
const studentsFed = totalSlices / 2.5;
const leftOverPizzaSlices = totalSlices % 2.5;
addTo("profPizza", "total slices = " + totalSlices);
addTo("profPizza", "<br> studentsFed = " + Math.floor(studentsFed));
addTo(
  "profPizza",
  "<br> leftOverPizzaSlices = " + Math.floor(leftOverPizzaSlices)
);

// Monty's Meg
const adultCost = 12;
const childCost = 6;
const drinkCost = 1.5;

const cost = 2 * adultCost + 1 * childCost + 3 * drinkCost;

addTo("Monty", "$" + cost);

// Average Earned Tips
const totalEarnedTips = 202.45 + 134.97 + 256.63 + 178.22;
const averageTips = totalEarnedTips / 4;
addTo("tips", "$" + averageTips);
addTo("tips", "<br>Weekly average = $" + averageTips.toFixed(2));
