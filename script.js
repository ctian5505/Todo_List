const inputBox = document.getElementById("input-box");
const addTaskButton = document.getElementById("add-task-btn");
const listContainer = document.getElementById("list-container");

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

  task.forEach(function (t, index) {
    const li = document.createElement("li");
    li.textContent = t.task;

    if (t.status) {
      li.classList.add("checked");
    }

    li.addEventListener("click", function () {
      t.status = !t.status;
      UpdateTaskList();
    });

    listContainer.appendChild(li);
  });
}
