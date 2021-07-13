export const taskList = [
  {
    description: 'take the trash out',
    completed: true,
    index: 0,
  },
  {
    description: 'Do the dishes',
    completed: false,
    index: 1,
  },
];

export class Task {
  constructor(description, completed = false, index = taskList.length) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }
}
