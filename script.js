const inputBox = document.getElementById("input-box");
const addTaskButton = document.getElementById("add-task-btn");
const listContainer = document.getElementById("list-container");
const finishedTaskContainer = document.getElementById(
  "finished-task-container"
);

let task = [];

// Retrive Input Task

addTaskButton.addEventListener("click", function () {
  const newTask = inputBox.value;

  if (newTask === "") {
    alert("Write Something");
  }
  task.push({ task: newTask, status: false });
  console.log(task); // To remove
  UpdateTaskList();
  inputBox.value = "";
});

// t = task | stat = status
function UpdateTaskList() {
  listContainer.innerHTML = "";
  finishedTaskContainer.innerHTML = "";

  task.forEach(function (t, index) {
    const li = document.createElement("li");
    const deleteBtn = document.createElement("span");
    deleteBtn.innerHTML = "&#10005";
    deleteBtn.classList.add("remove-btn");
    li.textContent = t.task;
    li.appendChild(deleteBtn);

    if (t.status) {
      li.classList.add("checked");
    }

    li.addEventListener("click", function () {
      t.status = !t.status;
      UpdateTaskList();
    });

    deleteBtn.addEventListener("click", () => {
      li.remove();

      task.splice(index, 1);
      UpdateTaskList();
    });

    if (!t.status) {
      listContainer.appendChild(li);
    } else {
      finishedTaskContainer.appendChild(li);
    }
  });
}
