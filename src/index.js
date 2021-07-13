import './style.css';
import { Task, taskList } from './modules/taskClass.js';

const inputSelector = document.querySelector('#inputTask');
const ulSelector = document.querySelector('#taskUl');

const showTasks = () => {
  ulSelector.innerHTML = '';
  taskList.forEach((e) => {
    const li = document.createElement('li');
    if (e.completed) {
      li.innerHTML = `
          <input class="checkbox m-2" type="checkbox" id="${e.index}" checked>
          <label class="description" for="${e.index}">${e.description}</label>
          <i class="fas fa-ellipsis-v justify-content-end "></i>


        `;
    } else {
      li.innerHTML = `
          <input class="checkbox m-2" type="checkbox" id="${e.index}">
          <label class="description" for="${e.index}">${e.description}</label>
          <i class="fas fa-ellipsis-v"></i>
        `;
    }
    li.classList.add('list-group-item');
    ulSelector.appendChild(li);
  });
};

showTasks();

inputSelector.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const task = new Task(inputSelector.value);
    taskList.push(task);
    showTasks();
    inputSelector.value = '';
  }
});
