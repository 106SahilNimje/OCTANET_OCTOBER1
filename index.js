// JavaScript logic
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

document.getElementById('addTask').addEventListener('click', addTask);

function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    const newTask = document.createElement('li');
    newTask.className = 'todo-item';
    newTask.innerHTML = `
        <span onclick="toggleTask(this)">${taskText}</span>
        <button onclick="deleteTask(this.parentElement)" class="delete-button">Delete</button>
    `;
    taskList.appendChild(newTask);
    taskInput.value = '';
}

function toggleTask(taskSpan) {
    taskSpan.classList.toggle('completed');
}

function deleteTask(taskItem) {
    taskItem.remove();
}
