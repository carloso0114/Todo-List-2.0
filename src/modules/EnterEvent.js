import showTasks from './showTasks.js';
import { saveLocalstorage } from './localstorage.js';
import { Task, taskList } from './taskClass.js';

const addnewTask = (description) => {
  const task = new Task(description);
  taskList.push(task);
};

const EnterEvent = () => {
  const inputSelector = document.querySelector('#inputTask');
  inputSelector.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      addnewTask(inputSelector.value);
      showTasks();
      saveLocalstorage();
      inputSelector.value = '';
    }
  });
  const inputIcon = document.querySelector('.bi-arrow-return-left');
  inputIcon.addEventListener('click', () => {
    addnewTask(inputSelector.value);
    showTasks();
    saveLocalstorage();
    inputSelector.value = '';
  });
};

export { EnterEvent, addnewTask };
