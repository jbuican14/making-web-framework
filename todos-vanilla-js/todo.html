// State of the app
// Accessibility 
// First iniit 
// Todo will manipulate DOM directly and will be convert into framework React like 
// Readme file point A (read more)
const todosArray = [
  { desc: 'Clean up the bedroom', done: false },
  { desc: 'Arrange the furniture', done: false },
  { desc: 'Put stuf out', done: false },
  { desc: 'Cooking', done: false },
];

// html element ref
const addTodoInput = document.getElementById('todo-input');
const addTodoBtn = document.getElementById('add-todo-btn');
const todosList = document.getElementById('todos-list');

// Init the view
for (const todo of todosArray) {
  todosList.append(renderTodoInReadMode(todo));
}

addTodoInput.addEventListener('input', () => {
  addTodoBtn.disabled = addTodoInput.value.length < 3;
});

addTodoInput.addEventListener('keydown', ({ key }) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoInput.addEventListener('keypress', ({ key }) => {
  if (key === 'Enter' && addTodoInput.value.length >= 3) {
    addTodo();
  }
});

addTodoBtn.addEventListener('click', () => {
  addTodo();
});

// Fn
function renderTodoInReadMode(todo) {
  const li = document.createElement('li');

  const span = document.createElement('span');
  span.textContent = todo.desc;

  if (todo.done) {
    span.classList.add('done');
  }

  if (!todo.done) {
    span.addEventListener('dblclick', () => {
      const idx = todosArray.indexOf(todo);
      todosList.replaceChild(renderTodoInEditMode(todo), todosList.childNodes[idx]);
    });
  }
  li.append(span);

  if (!todo.done) {
    const button = document.createElement('button');
    button.textContent = 'Done';
    button.addEventListener('click', () => {
      const idx = todosArray.indexOf(todo);
      removeTodo(idx);
    });
    li.append(button);
  }

  return li;
}

function renderTodoInEditMode(todo) {
  const li = document.createElement('li');
  li.setAttribute('role', 'dialog');
  li.setAttribute('aria-label', 'Edit Todo');

  const input = document.createElement('input');
  input.type = 'text';
  input.value = todo.desc;
  input.setAttribute('aria-label', 'Editable input');
  li.append(input);
  input.focus();
  input.setSelectionRange(todo.length, todo.length);

  const saveBtn = document.createElement('button');
  saveBtn.textContent = 'Save';
  saveBtn.setAttribute('aria-label', 'Save changes');
  saveBtn.addEventListener('click', () => {
    const idx = todosArray.indexOf(todo);
    updateTodo(idx, input.value);
  });
  li.append(saveBtn);

  const cancelBtn = document.createElement('button');
  cancelBtn.textContent = 'Cancel';
  cancelBtn.setAttribute('aria-label', 'Cancel changes');
  cancelBtn.addEventListener('click', () => {
    const idx = todosArray.indexOf(todo);
    todosList.replaceChild(renderTodoInReadMode(todo), todosList.childNodes[idx]);
  });
  li.appendChild(cancelBtn);

  return li;
}

function addTodo() {
  const desc = addTodoInput.value;

  todosArray.push({ desc, read: false });
  const todo = renderTodoInReadMode({ desc, read: false });
  todosList.append(todo);

  addTodoInput.value = '';
  addTodoBtn.disabled = true;
}

function removeTodo(idx) {
  todosArray[idx].done = true;
  const newNode = renderTodoInReadMode(todosArray[idx]);
  todosList.replaceChild(newNode, todosList.childNodes[idx]);
}

function updateTodo(idx, desc) {
  todosArray[idx].desc = desc;
  const todo = renderTodoInReadMode({ desc });
  todosList.replaceChild(todo, todosList.childNodes[idx]);
}
