export class App {
  constructor() {
    this.tasks = [];
    this.taskDescription = ''
  }

  addTask() {
    if (this.taskDescription) {
      this.tasks.push({
        description: this.taskDescription,
        done: false
      });
      this.taskDescription = '';
    }
  }

  removeTask(task) {
    const index = this.tasks.indexOf(task);
    if (index !== -1) {
      this.tasks.splice(index, 1);
    }
  }
}
