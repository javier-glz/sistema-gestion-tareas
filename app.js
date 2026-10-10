// Arreglo global para almacenar las tareas
let tasks = [];

// Elementos del DOM
const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

// Escuchar el evento de envío del formulario
taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;

  const newTask = {
    id: Date.now(),
    title: title,
    description: description
  };

  tasks.push(newTask);
  renderTasks();
  taskForm.reset();
});

// Función para renderizar las tareas
function renderTasks() {
  if (tasks.length === 0) {
    taskList.innerHTML = '<p class="empty-msg">No hay tareas registradas.</p>';
    return;
  }

  taskList.innerHTML = '';
  tasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';
    card.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description || 'Sin descripción'}</p>
    `;
    taskList.appendChild(card);
  });
}