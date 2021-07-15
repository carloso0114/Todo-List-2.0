import { taskList } from './taskClass.js';
// eslint-disable-next-line import/no-cycle
import showTasks from './showTasks.js';

export default () => {
  const draggables = document.querySelectorAll('.draggable');
  let dragged;
  draggables.forEach((e) => {
    e.addEventListener('dragstart', (event) => {
      e.classList.add('dragging');
      dragged = event.target;
    });

    e.addEventListener('dragend', () => {
      e.classList.remove('dragging');
    });

    e.addEventListener('dragover', (event) => {
      event.preventDefault();
    });

    e.addEventListener('drop', (event) => {
      event.preventDefault();

      for (let i = 0; i < event.target.classList.length; i += 1) {
        if (event.target.classList[i] === 'droppable') {
          const draggedIndex = taskList[dragged.children[0].children[0].children[0].id].index;
          const droppedIndex = taskList[e.children[0].children[0].children[0].id].index;
          const tempDescription = taskList[draggedIndex].description;
          const tempDescription2 = taskList[droppedIndex].description;
          const tempChecked = taskList[draggedIndex].completed;
          const tempChecked2 = taskList[droppedIndex].completed;
          taskList[draggedIndex].index = droppedIndex;
          taskList[droppedIndex].index = draggedIndex;
          taskList[droppedIndex].description = tempDescription;
          taskList[draggedIndex].description = tempDescription2;
          taskList[droppedIndex].completed = tempChecked;
          taskList[draggedIndex].completed = tempChecked2;
          showTasks();
        }
      }
    });
  });
};