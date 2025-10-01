let tasks = []

function addTaskAttributes() {
  tasks.push({
    id: Date.now(),
    text: text,
    completed: false
  });
}


function ToDo() {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    const container = document.getElementById('list');

    button.addEventListener('click', () => {
      
      //addTaskAttributes();
      
      const task = input.value.trim();
      if (task === "") return;

      const div = document.createElement('div');
      div.classList.add('item');
      container.appendChild(div);
      
      const span = document.createElement('span')
      span.classList.add('text')
      span.textContent = task;
      div.appendChild(span);
      
      const removeButton = document.createElement('div');
      removeButton.classList.add('remove');
      removeButton.textContent = '-';
      div.appendChild(removeButton);

      removeButton.addEventListener('click', function(e) {
        this.closest('.item').remove();
        //e.target.parentNode.remove();
      });

      const checkbox = document.createElement('input');
      checkbox.classList.add('checkbox');
      checkbox.type = 'checkbox';
      checkbox.checked = task.completed;
      div.appendChild(checkbox)

      input.value = "";
      });

}
ToDo();