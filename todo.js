let tasks = []

function addTask() {
  const input = document.getElementById('input');
  const text = input.value.trim();
  
  if (text === "") return;
  
  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });
  
  input.value = "";
  renderTasks();
}

function ToDo() {
  const button = document.getElementById('btn');
  button.addEventListener('click', addTask);
  
  const inputBox = document.getElementById('inputBox');
  inputBox.addEventListener('keypress', function(e) {
    if (e.key === 'Enter') addTask();
  });
}


function deleteTask(id) {  // New function
  tasks = tasks.filter(t => t.id !== id);
  renderTasks();
}

function toggleTask(id) {
  const task = tasks.find(t => t.id === id);
  if (task) {
    task.completed = !task.completed;
    renderTasks();
  }
}

function moveTaskUp(index) {
  if (index > 0) {
      [tasks[index], tasks[index - 1]] = [tasks[index - 1], tasks[index]];
      renderTasks();
  }
}

function moveTaskDown(index) {
  if (index < tasks.length - 1) {
      [tasks[index], tasks[index + 1]] = [tasks[index + 1], tasks[index]];
      renderTasks();
  }
}
  
function renderTasks() {
  const container = document.getElementById('list');
  container.innerHTML = '';
  
  tasks.forEach((task, index) => {
    const div = document.createElement('div');
    div.classList.add('item');
    
    const span = document.createElement('span')
    span.classList.add('text')
    span.textContent = task.text;
    
    const removeButton = document.createElement('div');
    removeButton.classList.add('remove');
    removeButton.textContent = '-';

    const leftContainer = document.createElement('div');
    leftContainer.classList.add('leftContainer');
    
    const checkbox = document.createElement('div');
    checkbox.classList.add('checkbox');
    let isChecked = task.completed;
    if (isChecked) checkbox.classList.add('checked');
    checkbox.addEventListener('click', () => {
      checkbox.classList.toggle('checked');
      toggleTask(task.id);
    });

    const moveUp = document.createElement('button');
    moveUp.classList.add('arrow');
    moveUp.textContent = '▲';
    moveUp.disabled = index === 0;
    
    const moveDown = document.createElement('button');
    moveDown.classList.add('arrow');
    moveDown.textContent = '▼';
    moveDown.disabled = index === tasks.length - 1;

    removeButton.addEventListener('click', () => deleteTask(task.id))

    moveUp.addEventListener('click', () => moveTaskUp(index));
    moveDown.addEventListener('click', () => moveTaskDown(index));


    
    
    
    container.appendChild(div);
    div.appendChild(span);
    div.appendChild(removeButton);
    div.appendChild(leftContainer)
    leftContainer.appendChild(moveUp);
    leftContainer.appendChild(checkbox);
    leftContainer.appendChild(moveDown);
  });
}
ToDo();