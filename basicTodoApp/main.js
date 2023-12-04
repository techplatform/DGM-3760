const toDoList = document.getElementById("toDoList");
const newToDoInput = document.getElementById("newToDo");
const todoRemainingSpan = document.getElementById("todoRemaining");

function addToDo() {
  const todoText = newToDoInput.value.trim();
  if (todoText === "") return;

  const todoItem = document.createElement("li");
  todoItem.innerHTML = `
            <input type="checkbox" onchange="updateTodosRemaining()">
            <span>${todoText}</span>
            <button onclick="editTodo(this)">Edit</button>
            <button onclick="deleteTodo(this)">Delete</button>
        `;

  toDoList.appendChild(todoItem);
  newToDoInput.value = "";
  updateTodosRemaining();
}

function editTodo(button) {
  const todoItem = button.parentElement;
  const todoText = todoItem.querySelector("span");
  const newText = prompt("Edit todo:", todoText.innerText);
  if (newText !== null) {
    todoText.innerText = newText;
  }
}

function deleteTodo(button) {
  const todoItem = button.parentElement;
  toDoList.removeChild(todoItem);
  updateTodosRemaining();
}

function updateTodosRemaining() {
  const checkboxes = document.querySelectorAll(
    '#toDoList input[type="checkbox"]'
  );
  const todoRemaining = Array.from(checkboxes).filter(
    (checkbox) => !checkbox.checked
  ).length;
  todoRemainingSpan.innerText = todoRemaining;
}

function clearCompleted() {
  const completedTodos = document.querySelectorAll(
    '#toDoList input[type="checkbox"]:checked'
  );
  completedTodos.forEach((checkbox) => {
    const todoItem = checkbox.parentElement;
    toDoList.removeChild(todoItem);
  });
  updateTodosRemaining();
}
