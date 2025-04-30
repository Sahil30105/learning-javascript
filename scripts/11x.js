const trial=[];
let todoList=[];

updateTodoList();
renderTodoList();

function updateTodoList(){
  todoList = JSON.parse(localStorage.getItem('tasks')) || [];
}
function renderTodoList() {
  let todoListHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const todoObject=todoList[i];
    const {name,dueDate}=todoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button class="delete-todo-button" onclick="
      deleteTask(${i},1);
    ">Delete</button>
  `;
  todoListHTML+=html;
  }
  document.querySelector('.js-todo-list').innerHTML = todoListHTML;
}

function addTodo() {
  const inputELement = document.querySelector('.js-name-input');
  const name = inputELement.value;

  const dateInputElement=document.querySelector('.js-due-date-input');
  const dueDate=dateInputElement.value;

  trial.push({
    name,
    dueDate
  });
  localStorage.setItem('tasks',JSON.stringify(trial));

  inputELement.value = '';
  updateTodoList();
  renderTodoList();
}
function deleteTask(index,value){
  todoList.splice(index,value);
  localStorage.setItem('tasks',JSON.stringify(todoList));
  updateTodoList();
  renderTodoList();
}