const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3001; //port number - can be changed

let todos = [
  {
    id: 1,
    text: "Get Eggs",
    completed: false,
  },
  {
    id: 2,
    text: "Buy Lotion",
    completed: true,
  },
  {
    id: 3,
    text: "Call Grandma",
    completed: false,
  },
];
let categories = [
  { id: 1, name: "Work" },
  { id: 2, name: "School" },
  { id: 3, name: "Shopping" },
];

//getting the todos
app.get("/todos", (req, res) => {
  res.json(todos);
});

//post
app.post("/todos", (req, res) => {
  const newTodo = req.body;
  todos.push(newTodo);
  res.json(newTodo);
});

//put
app.put("/todos/:id", (req, res) => {
  const id = req.params.id;
  const updatedTodo = req.body;

  todos = todos.map((todo) => (todo.id === id ? updatedTodo : todo));

  res.json(updatedTodo);
});

//delete
app.delete("/todos/:id", (req, res) => {
  const id = req.params.id;
  todos = todos.filter((todo) => todo.id !== id);

  res.json({ message: "Todo deleted" });
});

// category todos
app.get("/todos/category/:category", (req, res) => {
  const category = req.params.category;
  const categoryTodos = todos.filter((todo) => todo.category === category);

  res.json(categoryTodos);
});

//get categories
app.get("/categories", (req, res) => {
  res.json(categories);
});

//post categorie
app.post("/categories", (req, res) => {
  const newCategory = req.body;
  categories.push(newCategory);
  res.json(newCategory);
});

//put categories
app.put("/categories/:id", (req, res) => {
  const id = req.params.id;
  const updatedCategory = req.body;

  categories = categories.map((category) =>
    category.id === id ? updatedCategory : category
  );

  res.json(updatedCategory);
});

//delete catagories
app.delete("/categories/:id", (req, res) => {
  const id = req.params.id;
  categories = categories.filter((category) => category.id !== id);

  res.json({ message: "Category deleted" });
});

//server point
app.listen(PORT, () => {
  console.log(`App is running on http://localhost:${PORT}`);
});
