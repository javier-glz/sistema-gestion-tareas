let tasks = [];

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterStatus = document.getElementById('filter-status');
const filterAssignee = document.getElementById('filter-assignee');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const newTask = {
    id: Date.now(),
    title: document.getElementById('title').value,
    description: document.getElementById('description').value,
    assignee: document.getElementById('assignee').value,
    priority: document.getElementById('priority').value,
    status: document.getElementById('status').value
  };

  tasks.push(newTask);
  renderTasks();
  taskForm.reset();
});

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  renderTasks();
}

function renderTasks() {
  const selectedStatus = filterStatus.value;
  const searchAssignee = filterAssignee.value.toLowerCase();

  let filteredTasks = tasks.filter(task => {
    const matchesStatus = selectedStatus === 'Todos' || task.status === selectedStatus;
    const matchesAssignee = task.assignee.toLowerCase().includes(searchAssignee);
    return matchesStatus && matchesAssignee;
  });

  if (filteredTasks.length === 0) {
    taskList.innerHTML = '<p class="empty-msg">No se encontraron tareas con los filtros seleccionados.</p>';
    return;
  }

  taskList.innerHTML = '';
  filteredTasks.forEach(task => {
    const card = document.createElement('div');
    card.className = 'task-card';

    // Formatear clases CSS para las insignias
    const priorityClass = task.priority.toLowerCase();
    const statusClass = task.status.toLowerCase().replace(' ', '-');

    card.innerHTML = `
      <div class="task-info">
        <h3>${task.title}</h3>
        <p>${task.description || 'Sin descripción'}</p>
        <div class="task-meta">
          <span>👤 <strong>${task.assignee}</strong></span>
          <span class="badge ${priorityClass}">Prioridad: ${task.priority}</span>
          <span class="badge ${statusClass}">${task.status}</span>
        </div>
      </div>
      <div class="task-actions">
        <button class="btn-delete" onclick="deleteTask(${task.id})">Eliminar</button>
      </div>
    `;
    taskList.appendChild(card);
  });
}

// Eventos para los filtros
filterStatus.addEventListener('change', renderTasks);
filterAssignee.addEventListener('input', renderTasks);