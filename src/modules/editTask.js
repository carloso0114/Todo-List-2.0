import { saveLocalstorage } from './localstorage.js';
import showTasks from './showTasks.js';
import { taskList } from './taskClass.js';

const editTask = () => {
  const labelSelector = document.querySelectorAll('label[id]');
  const newInput = document.createElement('input');
  newInput.classList.add('no-border');
  newInput.setAttribute('type', 'text');
  labelSelector.forEach((e) => {
    e.addEventListener('click', (event) => {
      newInput.setAttribute('id', `${event.target.id}`);
      newInput.value = `${event.target.innerText}`;
      event.target.parentNode.append(newInput);
      newInput.focus();
      newInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
          taskList[e.id].description = newInput.value;
          console.log(taskList[e.id].description);
          saveLocalstorage();
          showTasks();
        }
      });
      event.target.remove();
    });
  });
};

export default editTask;