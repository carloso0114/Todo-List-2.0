import deleteTask from './src/modules/delete.js';
import { editDescription } from './src/modules/editTask.js';
import { EnterEvent } from './src/modules/EnterEvent.js';
import { saveLocalstorage } from './src/modules/localstorage.js';
import showTasks from './src/modules/showTasks.js';
import { taskList } from './src/modules/taskClass.js';

document.body.innerHTML = `
<input type="text" class="form-control" id="inputTask" placeholder="Add to your list..." />
<i class="input-group-text fs-2 bi bi-arrow-return-left"></i>
<ul class="list-group" id="taskUl"></ul>
<span class="clearBtn" id="clear">Clear all completed</span>
`;

describe('Test Edit/Update and Clear all completed task functionality', () => {
  it('Add many new tasks to the list and check the li', () => {
    EnterEvent();
    const inputSelector = document.querySelector('#inputTask');
    inputSelector.value = 'Clean the house';
    const inputIcon = document.querySelector('.bi-arrow-return-left');
    inputIcon.click();
    inputSelector.value = 'Clean the car';
    inputIcon.click();
    inputSelector.value = 'Get money';
    inputIcon.click();
    const li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(3);
  });

  it('Editing the task description from the first task in the list', () => {
    editDescription(0, 'hello world');
    saveLocalstorage();
    showTasks();
    expect(taskList[0].description).toBe('hello world');
    expect(taskList[0].description).toBe(JSON.parse(localStorage.getItem('taskListKey'))[0].description);
  });
});