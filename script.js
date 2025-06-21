document.addEventListener("DOMContentLoaded", function () {
    const taskInputEl = document.getElementById("taskInput");
    const addBtnEl = document.getElementById("addBtn");
    const taskListEl = document.getElementById("taskList");
  
    addBtnEl.addEventListener("click", function () {
      const taskText = taskInputEl.value.trim();
  
      if (taskText === "") {
        alert("Please enter a task.");
        return;
      }
  
      const li = document.createElement("li");
  
      const taskSpan = document.createElement("span");
      taskSpan.innerText = taskText;
  
      taskSpan.addEventListener("click", function () {
        li.classList.toggle("completed");
      });
  
      const deleteBtn = document.createElement("button");
      deleteBtn.innerText = "Delete";
      deleteBtn.className = "deleteBtn";
  
      deleteBtn.addEventListener("click", function () {
        li.remove();
      });
  
      li.appendChild(taskSpan);
      li.appendChild(deleteBtn);
      taskListEl.appendChild(li);
  
      taskInputEl.value = "";
    });
  });
  