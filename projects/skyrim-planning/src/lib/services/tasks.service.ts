import { Task } from './../tasks/task.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  cache: {};

  constructor() { }

  listAll(): Task[] {
    const Tasks = localStorage.Tasks;
    return Tasks ? JSON.parse(Tasks) : [];
  }

   register(Task: Task): void {
     const Tasks = this.listAll();
     Task.id = new Date().getTime();
     Tasks.push(Task);
     localStorage.Tasks = JSON.stringify(Tasks);
   }

  findById(id: number): Task {
    const Tasks: Task[] = this.listAll();
    return Tasks.find(Task => Task.id === id);
  }

  atualizar(Task: Task): void {
    const Tasks: Task[] = this.listAll();
    Tasks.forEach((obj, index, objs) => {
      if (Task.id === obj.id ) {
          objs[index] = Task;
      }
      localStorage.Tasks = JSON.stringify(Tasks);
    });
  }

  remove(id: number): void {
    let Tasks: Task[] = this.listAll();
    Tasks = Tasks.filter(Task => Task.id !== id);
    localStorage.Tasks = JSON.stringify(Tasks);
  }

  changeStatus(id: number): void {
    const Tasks: Task[] = this.listAll();
    Tasks.forEach((obj, index, objs) =>  {
      if (id === obj.id) {
        objs[index].done = !obj.done;
      }
    });
    localStorage.Tasks = JSON.stringify(Tasks);
  }
}
