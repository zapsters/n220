var todoList = [];
function addItem(itemName = "null") {
  todoList.push(itemName);
  document.getElementById("list").innerHTML += `<li>${itemName}</li>`;
  console.log(todoList);
}
function summarizeList() {
  document.getElementById("summary").innerHTML = ``;
  document.getElementById("summary").innerHTML += `Total Items: ${todoList.length}<br />`;
  document.getElementById("summary").innerHTML += `First Item: ${todoList[0]}<br />`;
  document.getElementById("summary").innerHTML += `Last Item: ${
    todoList[todoList.length - 1]
  }<br />`;
}
