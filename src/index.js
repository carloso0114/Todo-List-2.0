import "./style.css";
import {Task, taskList} from "./modules/taskClass"

const inputSelector=document.querySelector("#inputTask")
const ulSelector = document.querySelector("#taskUl")

const showTasks = () => {
    ulSelector.innerHTML=""
    taskList.forEach((e) => {
      const li = document.createElement('li');
      if (e.completed) {
        li.innerHTML = `
          <input class="checkbox" type="checkbox" id="${e.index}" checked>
          <label class="description" for="${e.index}">${e.description}</label>
        `;
      } else {
        li.innerHTML = `
          <input class="checkbox" type="checkbox" id="${e.index}">
          <label class="description" for="${e.index}">${e.description}</label>
        `;
      }
      ulSelector.appendChild(li);
    });
  };
  
  showTasks();

inputSelector.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        const task = new Task(inputSelector.value);
        taskList.push(task)
        showTasks()
        inputSelector.value=""
    }
});


