const inputArea = document.querySelector("input");
console.log(inputArea); // Check if the input area is correctly selected


const addButton = document.querySelector("#addTask");
console.log(addButton);// Check if the button is correctly selected


addButton.addEventListener("click", addTodoListItem);


const toDoList = document.querySelector("#toDoList");
console.log(toDoList);// Check if the toDoList div is correctly selected


function addTodoListItem() {

 console.log("Button clicked");

// console.log(inputArea.value)

 const toDodiv = document.createElement("div");
toDodiv.className =
  "flex items-center justify-between p-2 bg-gradient-to-r from-green-100 to-white rounded shadow";

const Item = document.createElement("p");
Item.className = "text-gray-800 text-lg";
Item.innerHTML = inputArea.value;

toDodiv.appendChild(Item);

// Validation (check input before appending delete button)
if (inputArea.value === "") {
  alert("Please enter a task");
  return;
} else if (inputArea.value.length > 30) {
  alert("Task is too long");
  return;
}

const deleteButton = document.createElement("button");
deleteButton.className =
  "font-bold transition-transform duration-200 hover:scale-110 hover:text-red-700 gap-2";
deleteButton.innerHTML = "✖";

// Delete functionality

toDodiv.appendChild(deleteButton);


 toDoList.appendChild(toDodiv)
    inputArea.value = "";

 console.log(toDodiv);
 console.log(toDoList);

}
toDoList.addEventListener("click", deleteItem);

function deleteItem(e) {
    const item = e.target;
    console.log(item);
    if (item.innerHTML === "✖") {
        const toDo = item.parentElement;
        toDo.remove();
    }

}