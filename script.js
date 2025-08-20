
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");


let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
tasks.forEach(task => addTaskToDOM(task));


function addTask() {
    const text = input.value.trim();
    if (!text) return;

    const task = {
        text: text,
        completed: false
    };
    tasks.push(task);
    addTaskToDOM(task);
    saveTasks();
    input.value = "";
}


function addTaskToDOM(task) {
    const li = document.createElement("li");
    li.textContent = task.text;

    if (task.completed) li.classList.add("completed");


    li.addEventListener("click", () => {
        task.completed = !task.completed;
        li.classList.toggle("completed");
        saveTasks();
    });


    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        taskList.removeChild(li);
        tasks = tasks.filter(t => t !== task);
        saveTasks();
    });
    li.appendChild(delBtn);
    taskList.appendChild(li);
}


function saveTasks() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


addBtn.addEventListener("click", addTask);


input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});
