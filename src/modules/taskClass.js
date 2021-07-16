const taskList = [];

class Task {
  constructor(description, completed = false, id = taskList.length) {
    this.description = description;
    this.completed = completed;
    this.id = id;
  }
}

export { taskList, Task };