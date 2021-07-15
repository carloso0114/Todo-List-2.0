/* eslint-disable import/no-cycle */
/* eslint-disable no-console */
import { saveLocalstorage } from './localstorage.js';
import { taskList } from './taskClass.js';
import showTasks from './showTasks.js';

const sorting = () => {
  const draggables = document.querySelectorAll('.draggable');
  let dragged = null;
  let dropped = null;
  draggables.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('test');
      dragged = e.children[0].children[0].id;
    });

    e.addEventListener('dragend', () => {
      e.classList.remove('test');
    });

    e.addEventListener('dragenter', (event) => {
      if (dragged !== event.target) { e.classList.add('test2'); }
    });

    e.addEventListener('dragleave', () => {
      e.classList.remove('test2');
    });

    e.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    e.addEventListener('drop', () => {
      e.classList.remove('test2');
      dropped = e.children[0].children[0].id;
      const swap = (arr, draggedIndex, droppedIndex) => {
        const temp = arr[droppedIndex];
        arr[droppedIndex] = arr[draggedIndex];
        arr[draggedIndex] = temp;
        console.log(`you swap ${draggedIndex} to ${droppedIndex}`);
        showTasks();
        saveLocalstorage();
      };
      if (dragged !== dropped) {
        if (e.classList.contains('droppable')) {
          swap(taskList, dragged, dropped);
        }
      }
    });
  });
};

export default sorting;