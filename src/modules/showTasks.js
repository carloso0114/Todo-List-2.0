import { taskList } from './taskClass.js';
import sort from './sort.js';

const ulSelector = document.querySelector('#taskUl');

export default () => {
  ulSelector.innerHTML = '';
  taskList.forEach((e) => {
    const li = document.createElement('li');
    if (e.completed) {
      li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center droppable">
      <div class="droppable"> 
      <input class="checkbox m-2" type="checkbox" id="${e.index}" checked>
      <label for="${e.index}">${e.description}</label>
      </div>
      <i class="fas fa-ellipsis-v"></i>
      </div>
      `;
    } else {
      li.innerHTML = `
      <div class="d-flex justify-content-between align-items-center droppable">
      <div class="droppable"> 
      <input class="checkbox m-2" type="checkbox" id="${e.index}" unchecked>
      <label class="droppable" for="${e.index}">${e.description}</label>
      </div>
      <i class="fas fa-ellipsis-v droppable" ></i>
      </div>
      `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable');
    li.setAttribute('draggable', 'true');
    ulSelector.appendChild(li);
  });
  sort();
};
