const form = document.getElementById("form");
const input = document.getElementById("input");
const todos = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const todoText = input.value;

  if (todoText) {
    const todoEl = document.createElement("li");
    todoEl.innerText = todoText;
    todos.appendChild(todoEl);
    todoEl.addEventListener("click", () => {
      todoEl.classList.toggle("completed");
    });

    input.value = "";
  }
});
