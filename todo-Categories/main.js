const toDoList = document.getElementById("toDoList");
const newToDoInput = document.getElementById("newToDo");
const categorySelect = document.getElementById('categorySelect');
const categoryList = document.getElementById('categoryList');
const newCategoryInput = document.getElementById('newCategory');
const todoRemainingSpan = document.getElementById("todoRemaining");

function addToDo() {
  const todoText = newToDoInput.value.trim();
    const selectedCategory = categorySelect.value;

    if (todoText === '' || selectedCategory === 'default') return;

    const todoItem = document.createElement('li');
    todoItem.setAttribute('data-category', selectedCategory);
    todoItem.innerHTML = `
        <input type="checkbox" onchange="updateTodoRemaining()">
        <span>${todoText}</span>
        <span class="categoryName">(${selectedCategory})</span>
        <button onclick="editToDo(this)">Edit</button>
        <button onclick="deleteToDo(this)">Delete</button>
    `;

    toDoList.appendChild(todoItem);
    newToDoInput.value = '';
    updateTodosLeft();
}

function editToDo(button) {
  const todoItem = button.parentElement;
  const todoText = todoItem.querySelector("span");
  const newText = prompt("Edit todo:", todoText.innerText);
  if (newText !== null) {
    todoText.innerText = newText;
  }
}

function deleteToDo(button) {
  const todoItem = button.parentElement;
  toDoList.removeChild(todoItem);
  updateTodosLeft();
}

function updateTodosLeft() {
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
  updateTodosLeft();
}

function addCategory() {
    const newCategoryText = newCategoryInput.value.trim();
    if (newCategoryText === '') return;

    const categoryItem = document.createElement('li');
    categoryItem.innerHTML = `
        ${newCategoryText}
        <button onclick="editCategory(this)">Edit</button>
        <button onclick="deleteCategory(this)">Delete</button>
    `;

    categoryList.appendChild(categoryItem);
    newCategoryInput.value = '';
    updateCategorySelect();
}

function editCategory(button) {
    const categoryItem = button.parentElement;
    const categoryText = categoryItem.firstChild;
    const newText = prompt('Edit category:', categoryText.nodeValue);
    if (newText !== null) {
        categoryText.nodeValue = newText;
        updateCategorySelect();
    }
}

function deleteCategory(button) {
    const categoryItem = button.parentElement;
    categoryList.removeChild(categoryItem);
    updateCategorySelect();
}

function updateCategorySelect() {
    // Clear existing options
    categorySelect.innerHTML = '<option value="default">Select Category</option>';

    // Populate category options from the categoryList
    const categories = categoryList.getElementsByTagName('li');
    for (const category of categories) {
        const categoryName = category.firstChild.nodeValue;
        const option = document.createElement('option');
        option.value = categoryName;
        option.textContent = categoryName;
        categorySelect.appendChild(option);
    }
}

function updateCategory() {
    const selectedCategory = categorySelect.value;

    // Highlight selected category in the categoryList
    const categories = categoryList.getElementsByTagName('li');
    for (const category of categories) {
        category.classList.remove('selected-category');
        if (category.firstChild.nodeValue === selectedCategory) {
            category.classList.add('selected-category');
        }
    }
}
