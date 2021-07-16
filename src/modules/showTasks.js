/* eslint-disable import/no-cycle */
import { taskList } from './taskClass.js';
import sort from './sort.js';
import checkbox from './checkbox.js';

const showTasks = () => {
  const ulSelector = document.querySelector('#taskUl');
  ulSelector.innerHTML = '';
  taskList.forEach((e) => {
    const li = document.createElement('li');
    if (e.completed === true) {
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${e.index}" checked>
      <label for="${e.index}">${e.description}</label>
      </div>
      <i class="fs-5 bi bi-three-dots-vertical"></i>
      `;
    } else {
      li.innerHTML = `
      <div>
      <input class="checkbox m-2" type="checkbox" id="${e.index}">
      <label for="${e.index}">${e.description}</label>
      </div>
      <i class="fs-5 bi bi-three-dots-vertical"></i>
      `;
    }
    li.classList.add('list-group-item', 'draggable', 'droppable', 'd-flex', 'justify-content-between', 'align-items-center');
    li.setAttribute('draggable', 'true');
    ulSelector.appendChild(li);
  });
  sort();
  checkbox();
};

export default showTasks;
