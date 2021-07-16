/* eslint-disable import/no-cycle */
import { saveLocalstorage } from './localstorage.js';
import { taskList } from './taskClass.js';

const checkboxListener = () => {
  const checkboxes = document.querySelectorAll('.checkbox');
  checkboxes.forEach((e) => {
    e.addEventListener('change', () => {
      const index2 = e.id;
      if (e.checked) {
        taskList[index2].completed = true;
        e.nextSibling.nextSibling.classList.add('completed');
        saveLocalstorage();
      } else {
        taskList[index2].completed = false;
        saveLocalstorage();
      }
    });
  });
};

export default checkboxListener;