let tasks = [];
let editingTaskId = null; // Variable para controlar si estamos editando una tarea

const taskForm = document.getElementById('task-form');
const taskList = document.getElementById('task-list');
const filterStatus = document.getElementById('filter-status');
const filterAssignee = document.getElementById('filter-assignee');
const formSubmitBtn = document.getElementById('form-submit-btn');

taskForm.addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('title').value;
  const description = document.getElementById('description').value;
  const assignee = document.getElementById('assignee').value;
  const priority = document.getElementById('priority').value;
  const status = document.getElementById('status').value;

  if (editingTaskId !== null) {
    // Modo Edición: Actualizar tarea existente
    tasks = tasks.map(task => {
      if (task.id === editingTaskId) {
        return { ...task, title, description, assignee, priority, status };
      }
      return task;
    });
    editingTaskId = null;
    formSubmitBtn.textContent = 'Agregar Tarea';
  } else {
    // Modo Creación: Registrar nueva tarea
    const newTask = {
      id: Date.now(),
      title,
      description,
      assignee,
      priority,
      status
    };
    tasks.push(newTask);
  }

  renderTasks();
  taskForm.reset();
});

function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
  if (editingTaskId === id) {
    editingTaskId = null;
    formSubmitBtn.textContent = 'Agregar Tarea';
    taskForm.reset();
  }
  renderTasks();
}

function editTask(id) {
  const taskToEdit = tasks.find(task => task.id === id);
  if (!taskToEdit) return;

  document.getElementById('title').value = taskToEdit.title;
  document.getElementById('description').value = taskToEdit.description;
  document.getElementById('assignee').value = taskToEdit.assignee;
  document.getElementById('priority').value = taskToEdit.priority;
  document.getElementById('status').value = taskToEdit.status;

  editingTaskId = id;
  formSubmitBtn.textContent = 'Actualizar Tarea';
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
        <button class="btn-edit" onclick="editTask(${task.id})" style="background-color: #f39c12; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; font-size: 14px; margin-right: 5px;">Editar</button>
        <button class="btn-delete" onclick="deleteTask(${task.id})">Eliminar</button>
      </div>
    `;
    taskList.appendChild(card);
  });
}

filterStatus.addEventListener('change', renderTasks);
filterAssignee.addEventListener('input', renderTasks);