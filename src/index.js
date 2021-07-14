import './style.css';
import { Task, taskList } from './modules/taskClass.js';
import showTasks from './modules/showTasks.js';
import { getLocalstorage, saveLocalstorage } from './modules/localstorage.js';
import sort from './modules/sort.js';

getLocalstorage();

const inputSelector = document.querySelector('#inputTask');

inputSelector.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    const task = new Task(inputSelector.value);
    taskList.push(task);
    showTasks();
    saveLocalstorage();
    inputSelector.value = '';
  }
});
