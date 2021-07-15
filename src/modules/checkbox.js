import { saveLocalstorage } from './localstorage.js';
import { taskList } from './taskClass.js';

export default () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  for (let i = 0; i < checkboxes.length; i += 1) {
    checkboxes[i].addEventListener('change', () => {
      if (checkboxes[i].checked) {
        const index = checkboxes[i].id;
        taskList[index].completed = true;
        saveLocalstorage();
      } else {
        const index = checkboxes[i].id;
        taskList[index].completed = false;
        saveLocalstorage();
      }
    });
  }
};