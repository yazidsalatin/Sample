// Function to add a new task
function addTask() {
    let taskTitle = document.getElementById('taskTitle').value;
    
    if (taskTitle === "") {
        alert("Please enter a task title");
        return;
    }

    let taskList = document.getElementById('taskList');

    // Create a new list item
    let li = document.createElement('li');
    li.innerHTML = `
        ${taskTitle} 
        <span class="remove-task" onclick="removeTask(this)">&#x2716;</span>
    `;

    taskList.appendChild(li);

    // Clear the input
    document.getElementById('taskTitle').value = "";
}

// Function to remove a task
function removeTask(element) {
    let li = element.parentNode;
    li.parentNode.removeChild(li);
}
