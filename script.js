const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUl = document.getElementById("todos");

const todos = JSON.parse(localStorage.getItem("todos"));

if (todos) {
  todos.forEach((todo) => {
    addTodo(todo);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;

    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    }

    todosUl.prepend(todoEl);

    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
      updateLS();
    });

    todoEl.addEventListener("contextmenu", (e) => {
      e.preventDefault();

      todoEl.remove();
      updateLS();
    });

    input.value = "";
    updateLS();
  }
}

function updateLS() {
  const todosEl = document.querySelectorAll("li");
  const todos = [];
  todosEl.forEach((todo) => {
    todos.push({
      text: todo.innerText,
      completed: todo.classList.contains("completed"),
    });
  });

  localStorage.setItem("todos", JSON.stringify(todos));
}
