import deleteTask from './src/modules/delete.js';
import { EnterEvent } from './src/modules/EnterEvent.js';
import { taskList } from './src/modules/taskClass.js';

document.body.innerHTML = `
<input type="text" class="form-control" id="inputTask" placeholder="Add to your list..." />
<i class="input-group-text fs-2 bi bi-arrow-return-left"></i>
<ul class="list-group" id="taskUl"></ul>
<span class="clearBtn" id="clear">Clear all completed</span>
`;

describe('Test add and remove functionality', () => {
  it('Add one new item to the list and check the li', () => {
    EnterEvent();
    const inputSelector = document.querySelector('#inputTask');
    inputSelector.value = 'Clean the house';
    const inputIcon = document.querySelector('.bi-arrow-return-left');
    inputIcon.click();
    const li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(1);
  });

  it('Check lenght of array', () => {
    expect(taskList).toHaveLength(1);
  });

  it('Delete one item of the task list and check the li', () => {
    const label = document.querySelector("label[id='0']");
    label.click();
    const trashBtn = document.querySelector("i[id='0']");
    trashBtn.click();
    const li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(0);
  });

  it('Delete many tasks from the list', () => {
    const inputSelector = document.querySelector('#inputTask');
    const inputIcon = document.querySelector('.bi-arrow-return-left');
    inputSelector.value = 'Clean the house';
    inputIcon.click();
    inputSelector.value = 'Take out the trash';
    inputIcon.click();
    let li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(2);
    deleteTask();
    let checkboxSelector = document.querySelector(".checkbox[id='0']");
    checkboxSelector.click();
    checkboxSelector = document.querySelector(".checkbox[id='1']");
    checkboxSelector.click();
    const clearBtnSelector = document.querySelector('#clear');
    clearBtnSelector.click();
    li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(0);
  });
  it('Match taskList array length with localStorage length', () => {
    expect(taskList.length).toBe(JSON.parse(localStorage.getItem('taskListKey')).length);
  });
});