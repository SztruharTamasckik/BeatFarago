function ToDo() {
    const input = document.getElementById('input');
    const button = document.getElementById('btn');
    const container = document.getElementById('list');

    button.addEventListener('click', () => {
      const task = input.value.trim();
    //   if (task === "") return;

      const div = document.createElement('div');
      div.classList.add('item');
      div.textContent = task;

      container.appendChild(div);

      input.value = "";
      });
}

ToDo();