document.addEventListener("DOMContentLoaded", function () {
  const taskInputEl = document.getElementById("taskInput");
  const addBtnEl = document.getElementById("addBtn");
  const taskListEl = document.getElementById("taskList");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.forEach((task) => {
    addTaskToDOM(task.text, task.completed);
  });

  addBtnEl.addEventListener("click", function () {
    const taskText = taskInputEl.value.trim();

    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }

    const newTask = { text: taskText, completed: false };
    tasks.push(newTask);
    saveToLocalStorage();

    addTaskToDOM(taskText, false);
    taskInputEl.value = "";
  });

  function addTaskToDOM(taskText, completed) {
    const li = document.createElement("li");
    if (completed) {
      li.classList.add("completed");
    }

    const taskSpan = document.createElement("span");
    taskSpan.innerText = taskText;

    taskSpan.addEventListener("click", function () {
      li.classList.toggle("completed");

      const index = tasks.findIndex((task) => task.text === taskText);
      if (index !== -1) {
        tasks[index].completed = li.classList.contains("completed");
        saveToLocalStorage();
      }
    });

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.className = "deleteBtn";

    deleteBtn.addEventListener("click", function () {
      li.remove();
      tasks = tasks.filter((task) => task.text !== taskText);
      saveToLocalStorage();
    });

    li.appendChild(taskSpan);
    li.appendChild(deleteBtn);
    taskListEl.appendChild(li);
  }

  function saveToLocalStorage() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }
});
