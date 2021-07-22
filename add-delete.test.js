import { EnterEvent } from './src/modules/EnterEvent.js';

document.body.innerHTML = `
<input type="text" class="form-control" id="inputTask" placeholder="Add to your list..." />
<i class="input-group-text fs-2 bi bi-arrow-return-left"></i>
<ul class="list-group" id="taskUl"></ul>
<span class="clearBtn" id="clear">Clear all completed</span>
`;

describe('Test add functionality', () => {
  it('Add one new item to the list and check the li', () => {
    EnterEvent();
    const inputSelector = document.querySelector('#inputTask');
    inputSelector.value = 'Clean the house';
    const inputIcon = document.querySelector('.bi-arrow-return-left');
    inputIcon.click();
    const li = document.querySelectorAll('#taskUl li');
    expect(li).toHaveLength(1);
  });

  test('Delete one item of the task list and check the li', () => {
    const checkboxes = document.querySelectorAll('.checkbox');
    expect(checkboxes).toHaveLength(2);
  });
  // test('delete one task from the list', () => {
  //   const label = document.querySelector("label[id='1']");
  //   editTask();
  //   label.click();
  //   const trashBtn = document.querySelector("i[id='1']");
  //   trashBtn.click();
  //   const li = document.querySelectorAll('#taskUl li');
  //   expect(taskList).toHaveLength(1);
  //   expect(li).toHaveLength(1);
  // });
});