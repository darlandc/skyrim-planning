import { ITask } from './../../shared/interfaces/task.interface';
import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'sky-tasks',
  templateUrl: './tasks.component.html'
})
export class TasksComponent implements OnInit {

  @Output() addTask = new EventEmitter();
  @Output() deleteMe = new EventEmitter();

  @Input() task: Partial<ITask>;

  addTaskForm: FormGroup;
  error = false;
  posts: any;
  controls: {};
  id = 0;
  log = 'valid log';
  tasks;

  constructor(private fb: FormBuilder) {
  this.addTaskForm = this.fb.group({
    code: [null, Validators.required],
    title: ['', Validators.required],
    labels: ['', Validators.required],
    estimate: [null, Validators.required],
  });
}

ngOnInit(): void {
  this.tasks = [
    { id: 1, name: 'Task one' },
    { id: 2, name: 'Task two' }
  ];
  // this.tasks = [];
  console.log('--- task component is alive!');
  console.log('tasks :>> ', this.tasks);
}

test(): void {
  console.log(this.log);
}

submit(): void {
  if (!this.addTaskForm.valid) {
    this.error = true;
    this.log = 'form invalid';
  } else {
    this.error = false;
    const e = {
      ...this.addTaskForm.value,
    };
    this.addTask.emit(e);
    console.log(e);
  }
}

toggle(): void{
  this.error = !this.error;
}

}
