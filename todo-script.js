var taskInput = document.getElementById("new-task");
var addButton = document.getElementById("add-task");
var todoList = document.getElementById("todo-list");
addButton.addEventListener("click", addTask);

function addTask() {
  var taskText = taskInput.value;
  if (taskText === "") {
    return;
  }
  var newTask = document.createElement("li");
  newTask.classList.add("todo-item");
  newTask.innerHTML = `
    <input type="checkbox" class="todo-checkbox">
    <span class="todo-text">${taskText}</span>
    <span class="todo-delete">x</span>
  `;
  todoList.appendChild(newTask);
  taskInput.value = "";
  addEventListeners(newTask);
}

function addEventListeners(task) {
  var checkbox = task.querySelector(".todo-checkbox");
  var deleteButton = task.querySelector(".todo-delete");
  checkbox.addEventListener("change", toggleComplete);
  deleteButton.addEventListener("click", deleteTask);
}

function toggleComplete() {
  var task = this.parentNode;
  task.classList.toggle("completed");
  if(task.classList.contains("completed")){
    todoList.appendChild(task);
  }
}

function deleteTask() {
  var task = this.parentNode;
  todoList.removeChild(task);
}
