import deleteTask from './src/modules/delete.js';
import { editDescription } from './src/modules/editTask.js';
import { EnterEvent } from './src/modules/EnterEvent.js';
import { saveLocalstorage } from './src/modules/localstorage.js';
import showTasks from './src/modules/showTasks.js';
import { swap } from './src/modules/sort.js';
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

  it('Update the completed status of the task', () => {
    const checkboxSelector = document.querySelector(".checkbox[id='0']");
    checkboxSelector.click();
    expect(taskList[0].completed).toBe(true);
    expect(taskList[0].completed).toBe(JSON.parse(localStorage.getItem('taskListKey'))[0].completed);
  });

  it('Update objects values for drag and drop tasks', () => {
    swap(taskList, 1, 0);
    expect(taskList[1].description).not.toBe('Clean the car');
    expect(taskList[1].description).toBe('hello world');
    expect(taskList[1].id).toBe(1);
    expect(taskList[1].completed).toBe(true);
    saveLocalstorage();
    showTasks();
  });

  it('Remove many tasks from the list', () => {
    deleteTask();
    let checkboxSelector = document.querySelector(".checkbox[id='0']"); // completed true
    checkboxSelector.click();
    checkboxSelector = document.querySelector(".checkbox[id='1']"); // completed false
    checkboxSelector.click();
    checkboxSelector = document.querySelector(".checkbox[id='2']"); // completed true
    checkboxSelector.click();
    const clearBtnSelector = document.querySelector('#clear');
    clearBtnSelector.click();
    const li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(1);
    expect(taskList).toHaveLength(1);
    expect(taskList.length).toBe(JSON.parse(localStorage.getItem('taskListKey')).length);
  });
});