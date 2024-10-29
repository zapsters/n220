const letUnorderedList = document.getElementById("container").getElementsByTagName("ul")[0];

// 1
document.getElementById("title").innerHTML = "DOM Manipulation";
// 2
document.getElementById("container").style.backgroundColor = "lightblue";
// 3
const newListItem = document.createElement("li");
const newContent = document.createTextNode("Item 7");
newListItem.appendChild(newContent);
letUnorderedList.append(newListItem);

// 4,5,6
letUnorderedList.children[0].style.color = "crimson";
letUnorderedList.children[2].style.backgroundColor = "pink";
letUnorderedList.children[4].style.backgroundColor = "yellow";

// 7
letUnorderedList.children[6].style.backgroundColor = "lightGrey";
letUnorderedList.children[6].style.color = "royalBlue";

// 8
const newListItem2 = document.createElement("li");
const newContent2 = document.createTextNode("Erin");
newListItem2.appendChild(newContent2);
letUnorderedList.append(newListItem2);

// 9
letUnorderedList.children[3].remove();

// 10
document.getElementById("btn").innerHTML = "<i>Click Me</i>";
document.getElementById("btn").style.backgroundColor = "rebeccaPurple";
document.getElementById("btn").style.color = "white";

document.getElementById("btn").style.border = "3px solid white";
