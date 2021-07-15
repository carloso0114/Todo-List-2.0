const taskList = [];

class Task {
  constructor(description, completed = false, index = taskList.length) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}

export { taskList, Task };