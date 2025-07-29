const taskInput = document.getElementById("taskInput"); 
const addTaskBtn = document.getElementById("addTask"); 
const taskList = document.getElementById("taskList"); 

let tasks = []; addTaskBtn.addEventListener("click", function () { 
    const taskText = taskInput.value.trim();
    if (taskText !== "") { 
        tasks.push({ text: taskText, completed: false});
        taskInput.value = ""; 
        displayTasks(); 
    } }); 
    
function displayTasks() {
    taskList.innerHTML = ""; 
    tasks.forEach((task, index) => {
        const li = document.createElement("li"); 

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        const span = document.createElement("span");
        span.textContent = task.text;
        
        if (task.completed) {
            span.classList.add("completed")
        }

        
        checkbox.addEventListener("change", function () { 

            task.completed = this.checked;
            displayTasks();
            });
            
            const deleteBtn = document.createElement("button");
            deleteBtn.textContent = "Delete";
            deleteBtn.addEventListener("click", function () {
                tasks.splice(index, 1); 
                displayTasks();
            });
            
            li.appendChild(checkbox);
            li.appendChild(span);  
            li.appendChild(deleteBtn);  
            taskList.appendChild(li);  }); }

const toggle = document.getElementById("themeToggle");

toggle.addEventListener("change", function() {
    document.body.classList.toggle("dark-mode");
});