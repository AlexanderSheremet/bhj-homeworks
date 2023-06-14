const tasksForm = document.getElementById("tasks__form");
const taskInput = document.getElementById("task__input");
const tasksAdd = document.getElementById("tasks__add");
const tasksList = document.getElementById("tasks__list");

function createTask(title) {
  const task = document.createElement("div");
  tasksList.appendChild(task).className = "task";
  const taskTitel = document.createElement("div");
  task.appendChild(taskTitel).className = "task__title";
  taskTitel.innerText = title;
  const taskRemove = document.createElement("a");
  task.appendChild(taskRemove).className = "task__remove";
  taskRemove.href = "#";
  taskRemove.innerHTML = "&times;";
  taskRemove.addEventListener("click", () => {
    task.remove();
  });
  return task;
}

function addTask() {
  const taskTitel = taskInput.value.trim();
  if (taskTitel) {
    const taskElem = createTask(taskTitel);
    tasksList.appendChild(taskElem);
    taskInput.value = "";
  }
}

tasksForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask();
});
