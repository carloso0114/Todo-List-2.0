/* eslint-disable import/no-cycle */
import { saveLocalstorage } from './localstorage.js';
import { taskList } from './taskClass.js';
import showTasks from './showTasks.js';

const sorting = () => {
  const draggables = document.querySelectorAll('.draggable');
  let dragged = null;
  let dropped = null;
  draggables.forEach((e) => {
    e.addEventListener('dragstart', () => {
      e.classList.add('hover');
      dragged = e.children[0].children[0].id;
    });

    e.addEventListener('dragend', () => {
      e.classList.remove('hover');
    });

    e.addEventListener('dragenter', (event) => {
      if (dragged !== event.target) { e.classList.add('hover2'); }
    });

    e.addEventListener('dragleave', () => {
      e.classList.remove('hover2');
    });

    e.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    e.addEventListener('drop', () => {
      e.classList.remove('hover2');
      dropped = e.children[0].children[0].id;
      const swap = (arr, draggedIndex, droppedIndex) => {
        const temp = arr[droppedIndex].description;
        arr[droppedIndex].description = arr[draggedIndex].description;
        arr[draggedIndex].description = temp;
        const temp2 = arr[droppedIndex].completed;
        arr[droppedIndex].completed = arr[draggedIndex].completed;
        arr[draggedIndex].completed = temp2;
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